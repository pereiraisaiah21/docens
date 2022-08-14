
import React from "react";

import { FaTimes } from 'react-icons/fa';

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function ActionsMobile ({
    setMenuMobileClose
}) {

    const closeMenuMobile = function() {
        setMenuMobileClose( false )
    }

    return (
        <section className="hdr--mbl__actns">
            <div className="hdr--mbl__cls">
                <span className="hdr--mbl__clsnm" onClick={closeMenuMobile}>
                    <FaTimes />
                    Fechar
                </span>
            </div>
        </section>
    );
}

export default ActionsMobile;




