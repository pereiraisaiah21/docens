import React from "react";

import { FaArrowDown } from 'react-icons/fa';

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function SeparationDots ({
    additionalClass
}) {

    return (

        <FaArrowDown className={`Home__arrowDown ${additionalClass}`} />
    );
}

export default SeparationDots;
