import React, { useState } from "react";

import { FaQuestionCircle, FaDoorOpen, FaBell, FaCaretDown, FaUser, FaBars } from 'react-icons/fa';

import "../Header.scss";

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function HeaderButtons ({
    userIsLogged,
    setMenuMobileClose
}) {

    const actionOptionsUnlogged = [
        {
            name : "",
            link : "/ajuda",
            alt : "Ir para página de ajuda",
            classParent : "hdr__lst",
            classBoxSon : "hdr__itm",
            classIconBox : "hdr__itm__icn",
            classNameBox : "hdr__itm__nm",
            icon : <FaQuestionCircle />
        },
        {
            name : "Entrar",
            link : "/login",
            alt : "Ir para página de login",
            classParent : "hdr__lst hdr__lst--brdr",
            classBoxSon : "hdr__itm",
            classIconBox : "hdr__itm__icn",
            classNameBox : "hdr__itm__nm",
            icon : <FaDoorOpen />
        }
    ];

    const actionOptionsLogged = [
        {
            name : "",
            link : "/ajuda",
            alt : "Ir para página de ajuda",
            classParent : "hdr__lst",
            classBoxSon : "hdr__itm",
            classIconBox : "hdr__itm__icn",
            classNameBox : "hdr__itm__nm",
            icon : <FaQuestionCircle />
        },
        {
            name : "",
            link : "/mensagens",
            alt : "Ir para página de notificações",
            classParent : "hdr__lst",
            classBoxSon : "hdr__itm hdr__itm--ntfctn",
            classIconBox : "hdr__itm__icn hdr__itm__icn--ntfctn",
            classNameBox : "hdr__itm__nm",
            icon : <FaBell />
        },
        {
            name : <FaCaretDown />,
            link : `/perfil/a`,
            alt : "Ir para perfil",
            classParent : "hdr__lst hdr__lst--brdr",
            classBoxSon : "hdr__itm",
            classIconBox : "hdr__itm__icn hdr__itm__icn--lgn",
            classNameBox : "hdr__itm__nm",
            icon : <FaUser />
        },
    ];

    const openMenuMobile = function() {
        setMenuMobileClose( true )
    }
    
    return (
        <div className="hdr__optns">
            <ul className="hdr__bttns">
                {
                    userIsLogged
                    ?
                    actionOptionsLogged.map( ( item, key ) => {
                        return (
                            <li className={item.classParent} key={key}> 
                                <a href={item.link} title="" className={item.classBoxSon}>
                                    <span className={item.classIconBox}>
                                        {item.icon}
                                    </span>
                                    <span className={item.classNameBox}>
                                        {item.name}
                                    </span>
                                </a>
                            </li>
                        )
                    })
                    :
                    actionOptionsUnlogged.map( ( item, key ) => {
                        return (
                            <li className={item.classParent} key={key}> 
                                <a href={item.link} title="" className={item.classBoxSon}>
                                    <span className={item.classIconBox}>
                                        {item.icon}
                                    </span>
                                    <span className={item.classNameBox}>
                                        {item.name}
                                    </span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="hdr__bttns--mbl" onClick={openMenuMobile}>
				<FaBars />
			</div>
        </div>
    );
}

export default HeaderButtons;