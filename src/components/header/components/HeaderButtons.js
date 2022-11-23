import React, { useContext } from "react";
import UserData from "../../../UserData";
import { useNavigate } from "react-router-dom";

import { FaQuestionCircle, FaDoorOpen, FaBell, FaUser, FaBars } from 'react-icons/fa';

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function HeaderButtons ({
    setMenuMobileClose
}) {

    const { userDataValues, setUserDataValues } = useContext( UserData );
    let userStorage = JSON.parse(localStorage.getItem("user"));
    let navigate = useNavigate();

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
            link : "/entrar",
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
            name : "",
            link : `/perfil/`,
            alt : "Ir para perfil",
            classParent : "hdr__lst",
            classBoxSon : "hdr__itm",
            classIconBox : "hdr__itm__icn hdr__itm__icn--lgn",
            classNameBox : "hdr__itm__nm",
            icon : <FaUser />
        },
    ];

    const openMenuMobile = function() {
        setMenuMobileClose( true );
    };
    const logoutUser = function( event ) {
        event.preventDefault();
        localStorage.removeItem( "user" );
        localStorage.removeItem( "adm" );

        return navigate( "/entrar" );
    };

    return (

        <div className="hdr__optns">
            <ul className="hdr__bttns">
                {
                    !!userStorage && userStorage.occupation === "student"
                    ?
                    <>
                        {
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

                        }
                        <li className="hdr__lst hdr__lst--brdr"> 
                            <a href="/logout/" title="" className="hdr__itm" onClick={logoutUser}>
                                <span className="hdr__itm__nm">
                                    <FaDoorOpen />
                                </span>
                            </a>
                        </li>
                    </>
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
