import React from "react";

import DragAlert from "../carousel/DragAlert"

/**
 * 
 * @param {*} param0 
 * @returns 
*/

function MainTitle ({
    description,
    isCarousel,
    descriptionUnder,
    icon
}) {

    return (

        <div className="actns__dscrptn">
            <span className="actns__dscrptn__icn">
                {/* {icon} */}
            </span>
            <span className={`actns__dscrptn__ttl${descriptionUnder ? " actns__dscrptn__ttl--dscrptn" : ""}`}>
                {description}
                {
                    descriptionUnder && (
                        <p>
                            {descriptionUnder}
                        </p>
                    )
                }
            </span>
            {
                isCarousel && (
                    <DragAlert classSyle="dragAlert dragAlert--tp-01" />
                )
            }
        </div>
    );
}

export default MainTitle;