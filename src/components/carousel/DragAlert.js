import React from "react";

import { FaHandPointRight } from 'react-icons/fa';

import "./Carousel.scss";

/**
 * 
 * @returns 
 */

function DragAlert ({
    classSyle
}) {
    
    return (
        <div className={classSyle}>
            Arraste para o lado
            <FaHandPointRight /> 
        </div>
    );
}

export default DragAlert;