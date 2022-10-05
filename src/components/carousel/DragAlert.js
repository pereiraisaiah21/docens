import React from "react";

import { FaAngleDoubleRight } from 'react-icons/fa';

/**
 * 
 * @returns 
 */

function DragAlert ({
    classSyle
}) {
    
    return (

        <div className={classSyle}>
            arraste para o lado
            <FaAngleDoubleRight /> 
        </div>
    );
}

export default DragAlert;