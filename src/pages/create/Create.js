import React from "react";

import Emoji from 'a11y-react-emoji';
import MainTitle from "../../components/title/MainTitle";
import CreateUpdateArticle from '../content/components/CreateUpdateArticle';
import CreateUpdateCourse from '../content/components/CreateUpdateCourse';
import CreateUpdateMatter from '../content/components/CreateUpdateMatter';
import CreateUpdateQuestion from '../quiz/components/CreateUpdateQuestion';

/**
 * 
 * @returns 
 */

function Create () {

    const navTabsHandler = function( event ) {
        event.preventDefault();

        let buttonActive = document.querySelector( ".create__nav__button--active" );
        let sectionActive = document.querySelector( `div[vop='${event.target.getAttribute("vop")}']` );
        let sectionWillActive = document.querySelector( "div.create__nav__section--active" );

        buttonActive.classList.remove( "create__nav__button--active" );
        sectionWillActive.classList.remove( "create__nav__section--active" );

        event.target.classList.add( "create__nav__button--active" );
        sectionActive.classList.add( "create__nav__section--active" );
    };

    return (

        <section className="create">
               <div className="emoji--title">
                <Emoji className="emoji--navigation" symbol={"📃"} label="love" />
                <MainTitle description="meu feed" descriptionUnder="Pubicações recentes" isCarousel={false} />
            </div>
            <div className="create__wrppr">
                <p>
                    Selecione alguma das opções abaixo, para preencher o cadastro de algum item.
                </p>
                <nav className="create__nav">
                    <ul className="create__nav__list">
                        <li className="create__nav__item">
                            <button onClick={navTabsHandler} vop="#course" className="create__nav__button create__nav__button--active">
                                Curso
                            </button>
                        </li>
                        <li className="create__nav__item">
                            <button onClick={navTabsHandler} vop="#matter" className="create__nav__button">
                                Matéria
                            </button>
                        </li>
                        <li className="create__nav__item">
                            <button onClick={navTabsHandler} vop="#article" className="create__nav__button">
                                Artigo
                            </button>
                        </li>
                        <li className="create__nav__item">
                            <button onClick={navTabsHandler} vop="#quiz" className="create__nav__button">
                                Quiz
                            </button>
                        </li>
                    </ul>
                </nav>
                <div className="create__nav__section create__nav__section--active" vop="#course">
                    <CreateUpdateCourse />
                </div>
                <div className="create__nav__section" vop="#matter">
                    <CreateUpdateMatter />
                </div>
                <div className="create__nav__section" vop="#article">
                    <CreateUpdateArticle />
                </div>
                <div className="create__nav__section" vop="#quiz">
                    <CreateUpdateQuestion />
                </div>
            </div>
        </section>
    );
};

export default Create;
