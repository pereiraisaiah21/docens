import React from 'react';

import { FaTimes } from 'react-icons/fa';

import XpGif from "../../../components/images/xp.gif";

/**
 *
 * @param {*} param0
 * @returns
 */

function Progress ({
    progress,
    showImage
}) {

    return (

        <div className="Question__progress">
            <a href="/fasd" title="Sair das perguntas" className="Question__exit">
                <FaTimes />
            </a>
            <div className="Progress">
                <span className="Progress__made" style={{width: progress + "%"}}>
                    <span className="Progress__made__number">
                        {progress > 100 ? 100 : progress} %
                    </span>
                    {
                        showImage && (
                            <div className={`qzPls`}>
                                <img alt="Gif + xp" src={XpGif} />
                            </div>
                        )
                    }
                </span>
            </div>
        </div>
    );
}

export default Progress;
