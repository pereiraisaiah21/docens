import React from "react";

import { FaEye } from 'react-icons/fa';
import Emoji from 'a11y-react-emoji';

/**
 *
 * @param {*} param0
 * @returns
 */

function Card ({
    emoji,
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
            <Emoji className="emoji--navigation" symbol={emoji} label="love" />
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
