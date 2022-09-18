import React from "react";

import { FaEye } from 'react-icons/fa';

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function CardWithImage ({
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
            <img alt={altImage} className={classStyleImage} src={srcImage} />
            <span className={`${classStyleSpan} title`}>
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

export default CardWithImage;