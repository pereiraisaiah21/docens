import React, { useState } from "react";

import HeaderButtons from "./components/HeaderButtons";
import { FaBars, FaTimes } from 'react-icons/fa';

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
                <a href="/" title="Logo" className="hdr__lg">
                    <img src="https://venngage-wordpress.s3.amazonaws.com/uploads/2019/04/fed-ex-logo-1.png" className="hdr__lg__img" alt=""/>
                </a>
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
                    <HeaderButtons userIsLogged={true}/>
                    <div className="hdr__bttns--mbl" onClick={menuBarClick}> 
                        <FaBars/>
                    </div>
                </div>
            </div>
            {
                menuIsOpen
                ?
                <div className="hdr--mbl">
                    <div className="hdr--mbl__bckdrp"></div>
                    <div className="hdr__wrppr--m">
                        <section className="hdr--mbl__actns">
                            <div className="hdr--mbl__cls" onClick={menuBarClick}>
                                <span className="hdr--mbl__clsnm">
                                    <FaTimes />
                                    Fechar
                                </span>
                            </div>
                        </section>
                        <section className="hdr--mbl__usr">
                            <div className="hdr--mbl__prfl">
                                <div className="hdr--mbl__icon">
                                    <img className="hdr--mbl__icn" src={"https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_man_boy_male_profile_smiley_happy_people_icon_181657.png"} alt="Ícone do usuário"/>
                                </div>
                                <div className="hdr--mbl__inf">
                                    <span className="hdr--mbl__nm">Michael Douglas</span>
                                    <span className="hdr--mbl__ocptn">Estudante</span>
                                </div>
                            </div>
                        </section>
                        <section className="hdr--mbl__pgs">
                            <ul className="hdr--mbl__lst">
                                <li><a href="/" alt="">Wanderson</a></li>
                                <li><a href="/" alt="">Wanderson</a></li>
                                <li><a href="/" alt="">Wanderson</a></li>
                                <li><a href="/" alt="">Wanderson</a></li>
                            </ul>
                        </section>
                    </div>
                </div>
                :
                ""
            }
        </header>
    );
}

export default Header;