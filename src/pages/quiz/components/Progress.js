import React from 'react';

import "../Quiz.scss";

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function Progress ({
    progress
}) {

    return (
        <div className="Progress">
            <span className="Progress__made" style={{width: progress + "%"}}>
                <span className="Progress__made__number">{progress} %</span>
            </span>
        </div>
    );
}

export default Progress;