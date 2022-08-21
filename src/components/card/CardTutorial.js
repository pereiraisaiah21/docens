import React from "react";


/**
 * 
 * @param {*} param0 
 * @returns 
 */

function CardTutorial ({
    classStyleGrand, 
    srcImage,
    altImage, 
    classStyleImage, 
    classStyleSpan,
    title, 
    description
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
        </div>
    );
}

export default CardTutorial;