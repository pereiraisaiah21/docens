import React from "react";

import { FaDumbbell } from 'react-icons/fa';

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function ButtonWorkout ({
    classStyle,
    url
}) {

    return (
    
        <a className={classStyle} href={url} title="modulo01">
            <FaDumbbell />
        </a>
    );
}

export default ButtonWorkout;