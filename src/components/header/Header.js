import React from "react";

import HeaderButtons from "./components/HeaderButtons";

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
    
    return (
        <header className="hdr">
            <div className="hdr__lg">
                <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" className="hdr__lg__img" alt=""/>
            </div>
            <div className="hdr__pgs">
                {
                    pages.map((item, key) => {
                        return (
                            <a href={item.url} className="" title={item.title}>
                                {item.name}
                            </a>
                        )
                    })
                }
            </div>
            <div className="hdr__optns">
                <HeaderButtons />
            </div>
        </header>
    );
}

export default Header;