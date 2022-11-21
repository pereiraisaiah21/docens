
import React from "react";

import { FaTimes, FaDoorOpen } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function ActionsMobile ({
    setMenuMobileClose
}) {

    let navigate = useNavigate();
    let userStorage = JSON.parse(localStorage.getItem("user"));

    const closeMenuMobile = function() {
        setMenuMobileClose( false );
    };
    const logoutUser = function( event ) {
        event.preventDefault();
        localStorage.removeItem( "user" );
        localStorage.removeItem( "adm" );

        return navigate( "/entrar" );
    };

    return (

        <section className="hdr--mbl__actns">
            <div className="hdr--mbl__cls">
                {
                    !!userStorage && (
                        <span className="hdr--mbl__clsnm hdr--mbl__clsnm--logout" onClick={logoutUser}>
                            <FaDoorOpen />
                            Sair
                        </span>
                    )
                }
                <span className="hdr--mbl__clsnm" onClick={closeMenuMobile}>
                    <FaTimes />
                    Fechar
                </span>
            </div>
        </section>
    );
}

export default ActionsMobile;
