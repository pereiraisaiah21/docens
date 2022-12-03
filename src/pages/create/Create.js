import React, { useState, useEffect } from "react";

import Emoji from 'a11y-react-emoji';
import MainTitle from "../../components/title/MainTitle";
import CreateUpdateArticle from '../content/components/CreateUpdateArticle';
import CreateUpdateCourse from '../content/components/CreateUpdateCourse';
import CreateUpdateMatter from '../content/components/CreateUpdateMatter';
import CreateUpdateQuestion from '../quiz/components/CreateUpdateQuestion';
import SuccessForm from "../../components/alert/SuccessForm";

/**
 * 
 * @returns 
 */

function Create () {

    const [ showSuccess, setShowSuccess ] = useState( false );

    const navTabsHandler = function( event ) {
        event.preventDefault();

        console.log( " X ", event.target.closest("button"))

        let buttonActive = document.querySelector( ".create__nav__button--active" );
        let sectionActive = document.querySelector( `div[vop='${event.target.closest("button").getAttribute("vop")}']` );
        let sectionWillActive = document.querySelector( "div.create__nav__section--active" );

        buttonActive.classList.remove( "create__nav__button--active" );
        sectionWillActive.classList.remove( "create__nav__section--active" );

        event.target.classList.add( "create__nav__button--active" );
        sectionActive.classList.add( "create__nav__section--active" );
    };

    useEffect( () => {
        setTimeout( () => {
            setShowSuccess( false );
        }, 3000);
    }, [ showSuccess ] );

    return (

        <section className="create">
            {
                showSuccess
                ?
                <SuccessForm />
                :
                null
            }
            <div className="emoji--title">
                <Emoji className="emoji--navigation" symbol={"📃"} label="love" />
                <MainTitle description="Criar" descriptionUnder="" isCarousel={false} />
            </div>
            <div className="create__wrppr">
                <p className="create__info">
                    Selecione alguma das opções abaixo, para preencher o cadastro de algum item.
                </p>
                <nav className="create__nav">
                    <ul className="create__nav__list">
                        <li className="create__nav__item">
                            <button onClick={navTabsHandler} vop="#course" className="create__nav__button create__nav__button--active">
                                <Emoji className="emoji--navigation" symbol={"🔖"} label="love" />Curso
                            </button>
                        </li>
                        <li className="create__nav__item">
                            <button onClick={navTabsHandler} vop="#matter" className="create__nav__button">
                                <Emoji className="emoji--navigation" symbol={"🏷"} label="love" />Matéria
                            </button>
                        </li>
                        <li className="create__nav__item">
                            <button onClick={navTabsHandler} vop="#article" className="create__nav__button">
                                <Emoji className="emoji--navigation" symbol={"📃"} label="love" />Artigo
                            </button>
                        </li>
                        <li className="create__nav__item">
                            <button onClick={navTabsHandler} vop="#quiz" className="create__nav__button">
                                <Emoji className="emoji--navigation" symbol={"🧾"} label="love" />Quiz
                            </button>
                        </li>
                    </ul>
                </nav>
                <div className="create__nav__section create__nav__section--active" vop="#course">
                    <CreateUpdateCourse setState={setShowSuccess} />
                </div>
                <div className="create__nav__section" vop="#matter">
                    <CreateUpdateMatter setState={setShowSuccess} />
                </div>
                <div className="create__nav__section" vop="#article">
                    <CreateUpdateArticle setState={setShowSuccess} />
                </div>
                <div className="create__nav__section" vop="#quiz">
                    <CreateUpdateQuestion setState={setShowSuccess} />
                </div>
            </div>
        </section>
    );
};

export default Create;
