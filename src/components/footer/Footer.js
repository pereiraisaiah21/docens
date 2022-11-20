import React from "react";

import FooterLogo from "../../images/FooterLogo.png";
import Bar from "../bar/Bar";
import Emoji from 'a11y-react-emoji'

/**
 * 
 * @returns 
 */

function Footer () {

    return (
       
       <>
            <Bar />
            <footer className="fttr">
                <div className="fttr__wrp">
                    <ul className="fttr__lst">
                        <li className="fttr__lst__itm">
                            Docens Educacional
                        </li>
                        <li className="fttr__lst__itm">
                            <a className="" href="/termos-de-uso" title="Ir para página de termos de uso">
                                Termos de uso
                            </a>
                        </li>
                        <li className="fttr__lst__itm">
                            <a className="" href="/cookies" title="Ir para página de uso de cookies">
                                Uso de cookies 
                            </a>
                        </li>
                        <li className="fttr__lst__itm">
                            <a className="" href="/agradecimentos" title="Ir para página de uso de cookies">
                                Agradecimentos
                            </a>
                        </li>
                        <li className="fttr__lst__itm">
                            <a className="" href="mailto:cursoseducaionais@ce.edu.com" title="Enviar email para cursoseducaionais@ce.edu.com">
                                docens@suporte.com.br
                            </a>
                        </li>
                    </ul>
                    <div className="fttr__dvl">
                        Made with <Emoji className="fttr__dvl__emoji" symbol="🤍" label="love" /> by
                        <img className="fttr__dvl__img" src={FooterLogo} title="Logo" />
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;