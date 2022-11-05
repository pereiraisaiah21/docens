import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserData from "../../UserData";
import api from "../../services/api";
import Modal from 'react-modal';

import MainTitle from "../../components/title/MainTitle";

/**
 *
 * @returns
 */

function ArticleModerate () {

    let { id } = useParams();

    const { userDataValues } = useContext( UserData );
    const [ typeUser, setTypeUser ] = useState( null );
    const [ articleContent, setArticleContent ] = useState({
        data: [],
        error: ""
    });
    const [ loader, setLoader ] = useState( true );
    const [ modalIsOpen, setIsOpen ] = React.useState( false );
    const [ whyNotApproved, setWhyNotApproved ] = useState( "" );

    Modal.setAppElement( '#root' );

    const openModal = function( event ) {
        event.preventDefault();
        setIsOpen( true );
    };
    const closeModal = function() {
        setIsOpen( false );
    };

    const approvedClick = function (e) {
        e.preventDefault();
    }
    const handleSubmitFeedback = function (e) {
        e.preventDefault();
    }

    useEffect(() => {

        setTypeUser( userDataValues.typeUser )


        api
            .get( `posts/${id}` )
            .then( response => {

                setArticleContent({
                    ...articleContent,
                    data: [response.data]
                });
                setTimeout( () =>
                    setLoader( false ),
                    3000
                );
            }).catch( err => {
                setArticleContent({
                    ...articleContent,
                    error: err
                });
            });

    }, [ userDataValues ]);

    return (

        <section className="moderate">
            <MainTitle description="moderar artigo" descriptionUnder="" />
            <div className="moderate__actions">
                <button className="moderate__button moderate__true" onClick={approvedClick}>
                    <img className="moderate__icon" alt="" src="/true.svg" /> Aprovar
                </button>
                <button className="moderate__button moderate__false" onClick={openModal}>
                    <img className="moderate__icon" alt="" src="/false.svg" /> Negar
                </button>
            </div>
            {
                articleContent.data 
                ?
                articleContent.data.map( ( item, key ) => {
                    return (
                        <div className="moderate__body">
                            <h1 className="moderate__title">{ item.title }</h1>
                            <div className="moderate__scope">
                                { item.body }
                            </div>
                            <div className="moderate__author">
                                <span className="moderate__author__name">Autor: { item.title }</span>
                            </div>
                        </div>
                    )
                })
                :
                null
            }
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel={"Example Modal"}
                className="moderate__modal"
            >
                <div className="moderate__feedback">
                    <p>Digite a seguir o motivo:</p>
                    <form onSubmit={handleSubmitFeedback}>
                        <textarea className="moderate__input" value={whyNotApproved} onChange={(e) => setWhyNotApproved(e.target.value)} placeholder="Digite o motivo" cols={20}></textarea>
                        <button className="moderate__submit">
                            Confirmar
                        </button>
                    </form>
                </div>
            </Modal>
        </section>
    );
}

export default ArticleModerate;
