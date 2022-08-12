import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from 'react-modal';

import { TailSpin } from "react-loader-spinner";
import QuestionAlternative from "./components/QuestionAlternative";
import Progress from "./components/Progress";
import { FaTimes } from 'react-icons/fa';
import WarnResult from "./components/WarnResult";

import "./Quiz.scss";

/**
 * 
 * @returns 
 */

function Quiz () {

    const [loader, setLoader] = useState(true);
    const [answer, setAnswer] = useState(null);
    const [showResolution, setShowResolution] = useState(false);
    const [isChoiceCorrect, setIsChoiceCorrect] = useState("");
    const [disableOptions, setDisableOptions] = useState(false);
    const [modalIsOpen, setIsOpen] = React.useState(false);
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

    Modal.setAppElement('#root');

    const openModal = function (event) {
        event.preventDefault();
        setIsOpen(true);
    };
    const closeModal = function () {
        setIsOpen(false);
    };
    async function getQuestion () { 

        setShowResolution(false);
        setIsChoiceCorrect(false);
        setDisableOptions(false);

        axios.get(`https://opentdb.com/api.php?amount=1`)
        .then((response) => {

            let options = response.data.results[0].incorrect_answers;
            options.push(response.data.results[0].correct_answer);
            
            setQuestion({...question, data: {
                categoriaId: 5,
                id : "",
                title : response.data.results[0].category,
                content : response.data.results[0].question,
                alternatives : options,
                progressBar: 65
                }
            });
            setAnswerReturn({...answerReturn, correctAnswer : response.data.results[0].correct_answer});
            setTimeout(() => setLoader(false), 2000);
        }).catch(err => {
            setQuestion({...question, error: err});
        });
    };
    const updateAnswers = function(e) {
        e.preventDefault();

        if (answer !== null) {
            setDisableOptions(true);
            setShowResolution(true);
            if (answer === answerReturn.correctAnswer) {
                setIsChoiceCorrect(true);
            } else {
                setIsChoiceCorrect(false);
            };
        };

        if (answer === null) {
            setAnswerReturn({...answerReturn, error : true});
        };

        sendQuestionFeedback();
    };
    const sendQuestionFeedback = function() {
        axios.post('/user/questionfeedback/', {
            result: isChoiceCorrect
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    useEffect( () => {
        getQuestion();
    }, []);

    return (
        <>
        {
            loader
            ?
            <div className="ldr">
                <TailSpin color = "rgba(255, 255, 255)"/>
            </div>
            :
            <div className="qz">
                <section className={`Question${disableOptions && isChoiceCorrect ? " Question__congrats" : ""}`}>
                    <div className="Question__progress">
                        <a href="/fasd" title="Sair das perguntas" className="Question__exit">
                            <FaTimes />
                        </a>
                        <Progress progress={30 } />
                    </div>
                    <QuestionAlternative 
                        title={question.data.title}
                        content={question.data.content}
                        alternatives={question.data.alternatives} 
                        setOption={setAnswer}
                        optionsDisable={disableOptions}
                    />
                    <section className="Question__send">
                        <a href="/" className={`Question__send__button${showResolution === true ? " next" : ""}`} title="itemTitle" onClick={updateAnswers}>
                            Próxima
                        </a>
                        <a href="/" className="Question__send__tip" title="itemTitle" onClick={openModal}>
                            Dica
                        </a>
                    </section>
                    {
                        disableOptions
                        ?
                        <div className="Question__verification">
                            {
                                disableOptions && isChoiceCorrect
                                ?
                                <WarnResult alertText="Parabéns, você acertou a questão. Confira abaixo a explicação." classStyle="Question__alert Question__alert--correct"/>
                                :
                                ""
                            }
                            {
                                disableOptions && !isChoiceCorrect
                                ?
                                <WarnResult alertText="Você errou a questão. Confira abaixo a explicação." classStyle="Question__alert Question__alert--incorrect"/>
                                :
                                ""
                            }
                        </div>
                        :
                        ""
                    }
                </section>
                {
                    showResolution
                    ?
                    <section className="Question__resolution">
                        <h4>RESOLUÇÃO</h4>
                        <p>
                        Na maioria das vezes, o soluço é causado por uma irritação no nervo chamado frênico, que auxilia os movimentos do diafragma, músculo que separa o tórax do abdome, na respiração. A expiração do ar acontece quando o diafragma relaxa e, a inspiração, quando ele se contrai.
                        </p>
                        <p>
                        Na maioria das vezes, o soluço é causado por uma irritação no nervo chamado frênico, que auxilia os movimentos do diafragma, músculo que separa o tórax do abdome, na respiração. A expiração do ar acontece quando o diafragma relaxa e, a inspiração, quando ele se contrai.
                        </p>
                    </section>
                    :
                    ""
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