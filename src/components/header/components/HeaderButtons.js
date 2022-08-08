import React from "react";
import { FaQuestionCircle, FaDoorOpen } from 'react-icons/fa';

import "../Header.scss";

/**
 * 
 * @returns 
 */

function HeaderButtons () {
    
    return (
        <ul className="hdr__bttns">
            <li className="hdr__lst"> 
                <a href="/a" title="" className="hdr__itm">
                    <span className="hdr__itm__icn">
                        <FaQuestionCircle />
                    </span>
                    <span className="hdr__itm__nm">
                        Ajuda
                    </span>
                </a>
            </li>
            <li className="hdr__lst"> 
                <a href="/a" title="" className="hdr__itm">
                    <span className="hdr__itm__icn">
                        <FaDoorOpen />
                    </span>
                    <span className="hdr__itm__nm">
                        Entrar
                    </span>
                </a>
            </li>
        </ul>
    );
}

export default HeaderButtons;