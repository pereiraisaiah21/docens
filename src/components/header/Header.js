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

    const {userDataValues} = useContext( UserData );
	const [isMenuMobileOpen, setIsMenuMobileOpen] = useState( false );

    return (
     	<header className="hdr">
			<div className="hdr__wrppr">
				<Logo />
				<PagesDesktop />
				<HeaderButtons 
					userIsLogged={!!userDataValues.data.name}
					username={userDataValues.data.username}
					setMenuMobileClose={setIsMenuMobileOpen}
				/>
			</div>
			<div className={`hdr--mbl${isMenuMobileOpen ? " hdr--mbl--opn" : "" }`}>
			{
				isMenuMobileOpen
				?
				<div className="hdr__wrppr--m">
					<ActionsMobile setMenuMobileClose={setIsMenuMobileOpen} />
					<UserDataMobile userData={userDataValues.data} />
					<PagesMobile />
				</div>
				:
				""
			}
			</div>
        </header>
    );
}

export default Header;