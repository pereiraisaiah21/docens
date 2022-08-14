import React from 'react';

import { FaTimes } from 'react-icons/fa';

import "../Quiz.scss";

/**
 *
 * @param {*} param0
 * @returns
 */

function Progress ({
    progress,
    progressColor
}) {

    const progressValue = ( progress < 10 ? 5 : progress > 100 ? 100 : progress );

    return (
        <div className="Question__progress">
            <a href="/fasd" title="Sair das perguntas" className="Question__exit">
                <FaTimes />
            </a>
            <div className="Progress">
                <span className="Progress__made" style={{width: progressValue + "%", backgroundColor : progressColor}}>
                    <span className="Progress__made__number">
                        {progress > 100 ? 100 : progress} %
                    </span>
                </span>
            </div>
        </div>
    );
}

export default Progress;
