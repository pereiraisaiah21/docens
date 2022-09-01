import React from "react";

import { FaEye } from 'react-icons/fa';

/**
 *
 * @param {*} param0
 * @returns
 */

function Card ({
    link,
    classStyleGrand,
    srcImage,
    altImage,
    classStyleImage,
    classStyleSpan,
    classStyleDiv,
    classStyleDivSpan,
    classStyleDivLabel,
    classStyleDivButton,
    title,
    description
}) {

    return (
        <div className={classStyleGrand}>
            <span className={`${classStyleSpan}`}>
                {title}
            </span>
            <div className={classStyleDiv}>
                <span className={classStyleDivSpan} />
                <label className={`${classStyleDivLabel} open`}>
                    {description}
                </label>
                <a href={`${link}`} className={classStyleDivButton} title={title}>
                    <FaEye />
                    Acessar
                </a>
            </div>
        </div>
    );
}

export default Card;
