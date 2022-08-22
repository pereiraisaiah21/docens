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
                <span>
                    Editar
                </span>
            </a>
            <a className={classAnchor} href="" title=""> 
                <FaPlus />
                <span>
                    Adicionar
                </span>
            </a>
            <a className={classAnchor} href="" title=""> 
                <FaEye />
                <span>
                    Visualizar
                </span>
            </a>
        </div>
    );
}

export default QuestionEditButtons;