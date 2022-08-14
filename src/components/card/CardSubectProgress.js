import React from "react";

import { FaEye } from 'react-icons/fa';

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function CardSubjectProgress ({
    link, 
    classStyleGrand, 
    srcImage,
    altImage, 
    classStyleImage, 
    classStyleSpan, 
    classStyleDiv, 
    classStyleDivProgress, 
    classStyleDivButton,
    classStyleDivProgressDiv, 
    classStyleSpanHit,
    title, 
    description,
    progressValue
}) {

    return (
        <div className={classStyleGrand}>
            <img alt={altImage} className={classStyleImage} src={srcImage} />
            <span className={`${classStyleSpan} title`}>
                {title}
            </span>
            <p className={`description`}>
                {description}
            </p>
            <div className={classStyleDiv}>
                {
                    progressValue 
                    ?
                    <span className={classStyleSpanHit}>
                        {progressValue}% completados
                    </span>
                    :
                    ""
                }
                <div className={classStyleDivProgress}>
                    <div className={classStyleDivProgressDiv} style={{width: `${progressValue}%`}} />
                </div>
                <a href={`${link}`} className={classStyleDivButton} title={title}>
                    <FaEye />
                    Acessar
                </a>
            </div>
        </div>
    );
}

export default CardSubjectProgress;