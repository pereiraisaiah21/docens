import React from "react";

import { FaBars, FaRegSadTear, FaHome, FaQuestionCircle, FaStepBackward } from 'react-icons/fa';

/**
 * 
 * @returns 
 */

function Bar () {
    const bar = document.querySelector( "#bar" );
    const openBar = function (e) {
        e.preventDefault();
        bar.dataset.bar = true;
    };

    return (
        
        <div className="bar" id="bar" data-bar="false">
            <div className="bar__left">
                <a className="bar__menu" href="/openMenu" title="" onClick={openBar}>
                    <FaBars />
                </a>
            </div>
            <div className="bar__right">
                <a className="bar__item"  title="">
                    <FaHome />
                    <span className="bar__text">
                        Inicio
                    </span>
                </a>
                <a className="bar__item"  title="">
                    <FaQuestionCircle />
                    <span className="bar__text">
                        Ajuda
                    </span>
                </a>
                <a className="bar__item"  title="">
                    <FaRegSadTear />
                    <span className="bar__text">
                        Inicio
                    </span>
                </a>
                <a className="bar__item"  title="">
                    <FaStepBackward />
                    <span className="bar__text">
                        Voltar
                    </span>
                </a>
            </div>
        </div>
    );
}

export default Bar;