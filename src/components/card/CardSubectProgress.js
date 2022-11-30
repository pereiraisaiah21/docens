import React from "react";

import Emoji from 'a11y-react-emoji';
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
    progressValue,
    emoji
}) {

    return (

        <div className={classStyleGrand}>
            <Emoji className={classStyleImage} symbol={emoji} label="love" />
            {/* <img alt={altImage} className={classStyleImage} src={srcImage} /> */}
            <span className={`${classStyleSpan} title`}>
                {title}
            </span>
            <p className={`description`}>
                {description}
            </p>
            <div className={classStyleDiv}>
                {
                    progressValue && (
                        <div className={classStyleDivProgress}>
                            <span className={classStyleSpanHit}>
                                {progressValue}% completados
                            </span>
                            <div className={classStyleDivProgressDiv} style={{width: `${progressValue}%`}} />
                        </div>
                    )
                }
                <a href={`${link}`} className={classStyleDivButton} title={title}>
                    <FaEye />
                    Acessar
                </a>
            </div>
        </div>
    );
}

export default CardSubjectProgress;