import React, { useState, useEffect } from "react";

import Modal from 'react-modal';

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function QuestionAlternative ({
    number, 
    title, 
    content, 
    alternatives, 
    observation, 
    isTipAvailable, 
    tip, 
    quantityAttempts, 
    setOption, 
    optionsDisable}) {

    const [selected, setSelected] = useState( null );
    const [modalIsOpen, setIsOpen] = React.useState( false );
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        }
    };

    console.log("fjisdfj", number)

    Modal.setAppElement( '#root' );

    const handleAlternativeChange = function( e ) {
        setSelected( e.target.value );
    };
    const closeModal = function() {
        setIsOpen( false );
    };

    useEffect(()=>{

        setOption( selected )
    }, [ selected ])

    return (

        <>
            <section className="Question__info">
                <span className="Question__info__title">
                    {title}
                </span>
            </section>
            {
                !(number > 9) && (
                    <section className="Question__content">
                        <p className="Question__paragraph">
                            {content}
                        </p>
                        <section className="Question__alternatives">             
                            {
                                alternatives !== null && alternatives !== undefined
                                ?
                                alternatives.map((item,key) => {
                                    return (
                                        <div className={`Question__alternatives__option ${selected === item ? "selected" : ""}`} key={key}>
                                            <label htmlFor={`a${key}`}>
                                                {
                                                    optionsDisable
                                                    ?
                                                    ""
                                                    :
                                                    <input
                                                        type="radio"
                                                        id={`a${key}`}
                                                        name="choose"
                                                        value={`${item}`}
                                                        checked={`${item}`=== selected ? "selected" : ""}
                                                        onChange={handleAlternativeChange}
                                                        className={`${selected ? "selected" : ""}`}
                                                    />
                                                }
                                                {item}
                                            </label>
                                        </div>)
                                    })
                                : 
                                ""
                            } 
                        </section>
                    </section>
                )
            }
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel={"Example Modal"}
            >
                <div className="Question__tutorial">
                    <p>Abaixo contém uma pergunta sobre a matéria que você selecionou.</p>
                    <p>Com isto, agora você tem que responder as perguntas.</p>
                    <p>Clicando em uma das opções que estão em baixo da descrição da pergunta.</p>
                    <p>Em seguida, clique em Próxima para você avançar as perguntas.</p>
                </div>
            </Modal>
        </>
    );
}

export default QuestionAlternative;