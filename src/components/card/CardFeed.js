import React from "react";

import { FaEye } from 'react-icons/fa';

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function CardFeed ({
    classStyleGrand, 
    classStyleImageBox,
    classStyleImage,
    classStyleInfoBox,
    classStyleViewBox,
    classStyleSubject,
    link, 
    srcImage,
    altImage, 
    title, 
    summary,
    subject,
    views
}) {

    return (

        <a href={link} title={title} className={classStyleGrand}>
            <div className={classStyleImageBox}>
                <img alt={altImage} className={classStyleImage} src={srcImage} />
            </div>
            <div className={classStyleInfoBox}>
                <h6>
                    {title}
                </h6>
                <span className={classStyleSubject}>
                    {subject} 
                </span>
                <p>
                    {summary}
                </p>
                <div className={classStyleViewBox}>
                    <span>
                        {views}
                        <FaEye />
                    </span>
                </div>
            </div>
        </a>
    );
}

export default CardFeed;