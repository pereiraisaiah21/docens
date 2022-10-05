import React from "react";

import { FaPlus, FaPencilAlt, FaEye } from 'react-icons/fa';

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function QuestionEditButtons ({
    classParent,
    classAnchor,
    matter
}) {

    return (

        <div className={classParent}>
            <a className={classAnchor} href={`/materias/${matter}/editar`} title="">
                <FaPencilAlt />
            </a>
            <a className={classAnchor} href="" title=""> 
                <FaPlus />
            </a>
            <a className={classAnchor} href="" title=""> 
                <FaEye />
            </a>
        </div>
    );
}

export default QuestionEditButtons;