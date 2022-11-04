import React from 'react';
import { useNavigate } from "react-router-dom";

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

    let navigate = useNavigate();

    const exitQuiz = function (e) {
        e.preventDefault();
        return navigate("/");
    }

    return (

        <div className="Question__progress">
            <a href="/exitQuiz" title="Sair das perguntas" className="Question__exit" onClick={exitQuiz}>
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
