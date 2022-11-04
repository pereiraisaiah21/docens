import React from "react";

/**
 * 
 * @returns 
 */

function PageDescription ({
    classText,
    text
}) {

    return (
        
        <span className={classText}>
           {text}
        </span>
    );
}

export default PageDescription;