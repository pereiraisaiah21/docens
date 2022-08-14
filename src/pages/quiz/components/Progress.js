import React from 'react';

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
        <div className="Progress">
            <span className="Progress__made" style={{width: progressValue + "%", backgroundColor : progressColor}}>
                <span className="Progress__made__number">
                    {progress > 100 ? 100 : progress} %
                </span>
            </span>
        </div>
    );
}

export default Progress;
