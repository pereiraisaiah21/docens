import React, { useState, useEffect } from "react";
import api from "../../services/api";
import Modal from 'react-modal';

import QuestionAlternative from "./components/QuestionAlternative";
import Progress from "./components/Progress";
import MainTitle from "../../components/title/MainTitle";
import QuizFinishedMessage from "./components/QuizFinishedMessage";
import { TailSpin } from "react-loader-spinner";
import { FaFire } from 'react-icons/fa';
import Emoji from 'a11y-react-emoji';

/**
 *
 * @returns
 */

function Quiz () {

    const [ loader, setLoader ] = useState( true );
    const [ answer, setAnswer ] = useState( null );
    const [ isChoiceCorrect, setIsChoiceCorrect ] = useState( "" );
    const [ disableOptions, setDisableOptions ] = useState( false );
    const [ questionIndex, setQuestionIndex ] = useState( -1 );
    const [ isAnswerEmpty, setIsAnswerEmpty ] = useState( null );
    const [ progressColor, setProgressColor ] = React.useState( "" );
    const [ modalIsOpen, setIsOpen ] = React.useState( false );
    const [ question, setQuestion ] = useState({data :  [{
        categoriaId: "",
        id : 1,
        title : "",
        content: "",
        alternatives : []
    }], id: 1, error: "" });
    const [ answerReturn, setAnswerReturn ] = useState({
        correctAnswer : null,
        explication : "",
        error : false
    });

    Modal.setAppElement( '#root' );

    const openModal = function( event ) {
        event.preventDefault();
        setIsOpen( true );
    };
    const closeModal = function() {
        setIsOpen( false );
    };
    const getQuestion = function() {

        setAnswer( null );
        setIsAnswerEmpty( null );
        setIsChoiceCorrect( false );
        setDisableOptions( false );
        setQuestionIndex( questionIndex + 1 );

        api
            .get( `https://opentdb.com/api.php?amount=1` )
            .then( response => {

                let options = response.data.results[0].incorrect_answers;
                options.push(response.data.results[0].correct_answer);

                setQuestion({
                    ...question,
                    data: {
                        categoriaId: 5,
                        id : "",
                        title : response.data.results[0].category,
                        content : response.data.results[0].question,
                        alternatives : options,
                        progressBar: 65
                    }
                });
                setAnswerReturn({
                    ...answerReturn,
                    correctAnswer : response.data.results[0].correct_answer
                });
                setTimeout( () =>
                    setLoader( false ),
                    1500
                );
            }).catch( err => {
                setQuestion({
                    ...question,
                    error: err
                });
            });
    };
    const updateAnswers = function( e ) {
        e.preventDefault();

        if ( answer === null ) {
            setIsAnswerEmpty( true );
            return;
        };
        if ( answer !== null ) {
            setDisableOptions( true );
            setIsAnswerEmpty( false );

            if ( answer === answerReturn.correctAnswer ) {
                setIsChoiceCorrect( true );
                setProgressColor( "rgb(51, 147, 48)" );
            } else {
                setIsChoiceCorrect( false );
                setProgressColor( "rgb(147, 53, 48)" );
            };

            sendQuestionFeedback();
            setTimeout(
                getQuestion,
                1000
            );
        };
    };
    const sendQuestionFeedback = function() {
        api
            .post( '/user/questionfeedback/', {
                result: isChoiceCorrect
            })
            .catch( err => {
                console.error( err );
            });
    };

    useEffect(() => {

        getQuestion();
    }, []);

    return (

        <>
        {
            loader
            ?
            <div className="ldr">
                <TailSpin color="rgba(255, 255, 255)" />
            </div>
            :
            <>
                <div className="emoji--title emoji--title--quiz">
                    <Emoji className="emoji--navigation" symbol={"???"} label="love" />
                    <MainTitle description="quiz" descriptionUnder="responda as perguntas" isCarousel={false} />
                </div>
                <div className="qz">
                    <section className={`Question${disableOptions && isChoiceCorrect ? " " : ""}`}>
                        <Progress progress={`${questionIndex}0`} progressColor={progressColor} showImage={disableOptions} />
                        <QuestionAlternative
                            number={questionIndex}
                            title={question.data.title}
                            content={question.data.content}
                            alternatives={question.data.alternatives}
                            setOption={setAnswer}
                            optionsDisable={disableOptions}
                        />
                        {
                            questionIndex > 9
                            ?
                            ""
                            :
                            <>
                                <section className="Question__send">
                                    <a href="/" className={`Question__send__button`} title="Enviar resposta" onClick={updateAnswers}>
                                        Pr??xima
                                    </a>
                                    <a href="/" className="Question__send__tip" title="Pedir ajuda" onClick={openModal}>
                                        <FaFire /> Dica
                                    </a>
                                </section>
                                {
                                    isAnswerEmpty === true
                                    ?
                                    <span className="Question__warn">
                                        Selecione alguma alternativa antes de avan??ar esta pergunta
                                    </span>
                                    :
                                    ""
                                }
                            </>
                        }
                        {
                            questionIndex > 9 && (
                                <QuizFinishedMessage />
                            )
                        }
                    </section>
                    <div className="qz__backdrop"/>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel={"Example Modal"}
                    >
                        <div className="Question__tip">
                            <p>Esta aqui ?? a dica</p>
                        </div>
                    </Modal>
                </div>
            </>
        }
        </>
    );
}

export default Quiz;
