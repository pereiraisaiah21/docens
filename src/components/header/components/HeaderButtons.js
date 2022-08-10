import React from "react";
import { FaQuestionCircle, FaDoorOpen, FaBell, FaAngleDown, FaUser } from 'react-icons/fa';

import "../Header.scss";

/**
 * 
 * @returns 
 */

function HeaderButtons ({
    userIsLogged
}) {
    
    return (
        <ul className="hdr__bttns">
            {
                userIsLogged
                ?
                <li className="hdr__lst"> 
                    <a href="/a" title="" className="hdr__itm hdr__itm--ntfctn">
                        <span className="hdr__itm__icn hdr__itm__icn--ntfctn">
                            <FaBell />
                        </span>
                        <span className="hdr__itm__nm"></span>
                    </a>
                </li>
                :
                ""
            }
            <li className="hdr__lst"> 
                <a href="/a" title="" className="hdr__itm">
                    <span className="hdr__itm__icn">
                        <FaQuestionCircle />
                    </span>
                    <span className="hdr__itm__nm"></span>
                </a>
            </li>
            {
                !userIsLogged
                ?
                <li className="hdr__lst hdr__lst--brdr"> 
                    <a href="/a" title="" className="hdr__itm">
                        <span className="hdr__itm__icn">
                            <FaDoorOpen />
                        </span>
                        <span className="hdr__itm__nm">
                            ENTRAR
                        </span>
                    </a>
                </li>
                :
                <li className="hdr__lst hdr__lst--brdr"> 
                    <a href="/perfil" title="" className="hdr__itm">
                        <span className="hdr__itm__icn hdr__itm__icn--lgn">
                            <FaUser />
                        </span>
                        <span className="hdr__itm__nm">
                            MINHA CONTA
                        </span>
                    </a>
                </li>
            }
        </ul>
    );
}

export default HeaderButtons;