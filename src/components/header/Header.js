import React, { useState, useContext } from "react";
import UserData from "../../UserData";

import Logo from "./components/Logo";
import PagesMobile from "./components/PagesMobile";
import PagesDesktop from "./components/PagesDesktop";
import ActionsMobile from "./components/ActionsMobile";
import UserDataMobile from "./components/UserDataMobile";
import HeaderButtons from "./components/HeaderButtons";

/**
 * 
 * @returns 
 */

function Header () {

    const { userDataValues, setUserDataValues } = useContext( UserData );
	const [ isMenuMobileOpen, setIsMenuMobileOpen ] = useState( false );


    return (

     	<header className="hdr">
			<div className="hdr__wrppr">
				<Logo />
				<PagesDesktop />
				<HeaderButtons
					setMenuMobileClose={setIsMenuMobileOpen}
				/>
			</div>
			<div className={`hdr--mbl${isMenuMobileOpen ? " hdr--mbl--opn" : "" }`}>
			{
				isMenuMobileOpen && (
					<div className="hdr__wrppr--m">
						<ActionsMobile setMenuMobileClose={setIsMenuMobileOpen} />
						<UserDataMobile />
						<PagesMobile />
					</div>
				)
			}
			</div>
			<span className="separator"/>
        </header>
    );
}

export default Header;
