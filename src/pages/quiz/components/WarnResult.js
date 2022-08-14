import React from "react";

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function WarnResult ({
    alertText, 
    classStyle
}) {

    return (
       <div className={classStyle}>
            <p>
                {alertText}
            </p>
       </div>
    );
}

export default WarnResult;