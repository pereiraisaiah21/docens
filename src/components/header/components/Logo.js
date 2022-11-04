import React from "react";

import LogoImage from "../../../images/logo1.png";

/**
 * 
 * @returns 
 */

function Logo () {

    return (

        <a href="/home" title="Logo" className="hdr__lg">
			<img src={LogoImage} className="hdr__lg__img" alt="Logo" />
		</a>
    );
}

export default Logo;




