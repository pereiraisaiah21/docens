import React from "react";

import { FaRegArrowAltCircleDown } from 'react-icons/fa';

function SeparationDots ({
    additionalClass
}) {

    return (

        <FaRegArrowAltCircleDown className={`Home__arrowDown ${additionalClass}`} />
    );
}

export default SeparationDots;
