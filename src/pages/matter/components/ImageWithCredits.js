import React from "react";

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function ImageWithCredits ({
    classStyleImg,
    classStyleCredit,
    imageSrc,
    imageAlt,
    imageCredits
}) {

    return (

        <>
            <img alt={imageAlt} src={imageSrc} className={classStyleImg} />
            <p className={classStyleCredit}>
                Fonte: {imageCredits}
            </p>
        </>
    );
}

export default ImageWithCredits;