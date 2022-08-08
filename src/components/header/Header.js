import React, { useState } from "react";

import HeaderButtons from "./components/HeaderButtons";
import { FaBars } from 'react-icons/fa';

import "./Header.scss";

/**
 * 
 * @returns 
 */

function Header () {

    const pages = [
        { name : "Atividades", url : "/atividades", title : "Alternative" },
        { name : "Questões", url : "/atividades", title : "Alternative" },
    ];
    const[menuIsOpen, setMenuIsOpen] = useState(false);

    const menuBarClick = (event) => {
        setMenuIsOpen(!menuIsOpen);
    }
    
    return (
        <header className="hdr">
            <div className="hdr__wrppr">
                <div className="hdr__lg">
                    <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" className="hdr__lg__img" alt=""/>
                </div>
                <div className="hdr__pgs">
                    {
                        pages.map((item, key) => {
                            return (
                                <a href={item.url} className="hdr__pgs__itm" title={item.title} key={key}>
                                    {item.name}
                                </a>
                            )
                        })
                    }
                </div>
                <div className="hdr__optns">
                    <HeaderButtons />
                    <div className="hdr__bttns--mbl" onClick={menuBarClick}> 
                        <FaBars/>
                    </div>
                </div>
            </div>
            <div className="hdr--mbl">
                <div className="hdr__wrppr--m"></div>
            </div>
        </header>
    );
}

export default Header;