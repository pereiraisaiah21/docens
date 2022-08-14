import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import axios from "axios";
import Modal from 'react-modal';

import QuestionAlternative from "./components/QuestionAlternative";
import Progress from "./components/Progress";
import QuizFinishedMessage from "./components/QuizFinishedMessage";
import { TailSpin } from "react-loader-spinner";
import { FaTimes } from 'react-icons/fa';
// import WarnResult from "./components/WarnResult";

import XpGif from "../../components/images/xp.gif";

import "./Quiz.scss";

/**
 *
 * @returns
 */

function Quiz () {

    // let {matter} = useParams();
    // let {contentId} = useParams();

    const [loader, setLoader] = useState( true );
    const [answer, setAnswer] = useState( null );
    //const [showResolution, setShowResolution] = useState(false);
    const [isChoiceCorrect, setIsChoiceCorrect] = useState( "" );
    const [disableOptions, setDisableOptions] = useState( false );
    const [questionIndex, setQuestionIndex] = useState( -1 );
    const [isAnswerEmpty, setIsAnswerEmpty] = useState( null );

    const [progressColor, setProgressColor] = React.useState( "" );
    const [modalIsOpen, setIsOpen] = React.useState( false );
    const [question, setQuestion] = useState({data :  [{
        categoriaId: "",
        id : 1,
        title : "",
        content: "",
        alternatives : []
    }], id: 1, error: ""});
    const [answerReturn, setAnswerReturn] = useState({
        correctAnswer : null,
        explication : "",
        error : false
    });
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            width: "300px",
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

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
        //setShowResolution(false);
        setIsChoiceCorrect( false );
        setDisableOptions( false );
        setQuestionIndex( questionIndex + 1 );

        axios.get( `https://opentdb.com/api.php?amount=1` )
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
            //setShowResolution(true);
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
                3000
            );
        };
    };

    const sendQuestionFeedback = function() {
        axios.post( '/user/questionfeedback/', {
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
                <TailSpin color = "rgba(255, 255, 255)" />
            </div>
            :
            <div className="qz">
                <div className={`qzPls${isChoiceCorrect ? " qzPls--active" : ""}`}>
                    <img alt="Gif + xp" src={XpGif} />
                </div>
                <section className={`Question${disableOptions && isChoiceCorrect ? " " : ""}`}>
                    <Progress progress={`${questionIndex}0`} progressColor={progressColor} />
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
                                <a href="/" className={`Question__send__button`} title="itemTitle" onClick={updateAnswers}>
                                    Próxima
                                </a>
                                <a href="/" className="Question__send__tip" title="itemTitle" onClick={openModal}>
                                    Dica
                                </a>
                            </section>
                            {
                                isAnswerEmpty === true
                                ?
                                <span className="Question__warn">
                                    Selecione alguma alternativa antes de avançar esta pergunta
                                </span>
                                :
                                ""
                            }
                        </>
                    }
                    {
                        questionIndex > 9
                        ?
                        <QuizFinishedMessage />
                        :
                        ""
                    }
                    
                    {
                        disableOptions
                        ?
                        <div className="Question__verification">
                            {/* {
                                disableOptions && isChoiceCorrect
                                ?
                                <WarnResult 
                                    alertText="Parabéns, você acertou a questão. Confira abaixo a explicação." 
                                    classStyle="Question__alert Question__alert--correct"
                                />
                                :
                                ""
                            }
                            {
                                disableOptions && !isChoiceCorrect
                                ?
                                <WarnResult 
                                    alertText="Você errou a questão. Confira abaixo a explicação." 
                                    classStyle="Question__alert Question__alert--incorrect"
                                />
                                :
                                ""
                            } */}
                        </div>
                        :
                        ""
                    }
                </section>
                {
                    // showResolution
                    // ?
                    // <section className="Question__resolution">
                    //     <h4>RESOLUÇÃO</h4>
                    //     <p>
                    //     Na maioria das vezes, o soluço é causado por uma irritação no nervo chamado frênico, que auxilia os movimentos do diafragma, músculo que separa o tórax do abdome, na respiração. A expiração do ar acontece quando o diafragma relaxa e, a inspiração, quando ele se contrai.
                    //     </p>
                    // </section>
                    // :
                    // ""
                }

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel={"Example Modal"}
                >
                    <div className="Question__tip">
                        <p>Esta aqui é a dica</p>
                    </div>
                </Modal>
            </div>
        }
        </>
    );
}

export default Quiz;
