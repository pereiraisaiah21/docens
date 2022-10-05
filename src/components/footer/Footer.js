import React from "react";

import FooterLogo from "../../images/FooterLogo.png";

/**
 * 
 * @returns 
 */

function Footer () {

    return (
        
        <footer className="fttr">
            <div className="fttr__wrp">
                <ul className="fttr__lst">
                    <li className="fttr__lst__itm">
                        Cursos educacionais
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
                        <a className="" href="/b" title="Ir para página de uso de cookies">
                            Agradecimentos
                        </a>
                    </li>
                    <li className="fttr__lst__itm">
                        <a className="" href="mailto:cursoseducaionais@ce.edu.com" title="Enviar email para cursoseducaionais@ce.edu.com">
                            cursoseducaionais@ce.edu.com
                        </a>
                    </li>
                </ul>
                <div className="fttr__dvl">
                    Desenvolvido por 
                    <img className="fttr__dvl__img" src={FooterLogo} title="Logo" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;