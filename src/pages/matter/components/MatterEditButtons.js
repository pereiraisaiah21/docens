import React from "react";

import { FaPlus, FaPencilAlt, FaEye } from 'react-icons/fa';

/**
 *
 * @param {*} param0
 * @returns
 */

function MatterEditButtons ({
    classParent,
    classAnchor,
    matter
}) {

    return (

        <div className={classParent}>
            <a className={classAnchor} href="materias/alt/posts/1" title="">
                <FaPencilAlt />
                <span>

                </span>
            </a>
            <a className={classAnchor} href="materias/alt" title="">
                <FaPlus />
                <span>

                </span>
            </a>
            <a className={classAnchor} href="" title="">
                <FaEye />
                <span>

                </span>
            </a>
        </div>
    );
}

export default MatterEditButtons;
