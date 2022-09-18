import React from "react";

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function CardCourse ({
    classStyleGrand,
    classStyleInfoBox,
    link, 
    title, 
    summary,
}) {

    return (

        <a href={link} title={title} className={classStyleGrand}>
            <div className={classStyleInfoBox}>
                <h6>
                    {title}
                </h6>
                <p>
                    {summary}
                </p>
            </div>
        </a>
    );
}

export default CardCourse;