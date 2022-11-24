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
    matter,
    editLink
}) {

    return (

        <div className={classParent}>
            <a className={classAnchor} href={editLink} title="">
                <FaPencilAlt />
                <span>

                </span>
            </a>
            <a className={classAnchor} href={editLink} title="">
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
