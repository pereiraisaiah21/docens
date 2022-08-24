import React from "react";

import MainTitle from "../../components/title/MainTitle";
import NavigationMyProgress from "../home/components/NavigationActions"

function Course () {
    return (
        <section className="crs">
            <div className="crs__wrppr">
                <div className="crs__cntnt">
                    <nav className="crs__br">
                        <h1 className="crs__br__ttl">
                            Meu aprendizado
                        </h1>
                        <ul className="crs__br__optns">
                            <li className="crs__br__itm">
                                <a className="crs__br__anchr crs__br__anchr--actv" href="" title="">
                                    Todos os cursos
                                </a>
                            </li>
                            <li className="crs__br__itm">
                                <a className="crs__br__anchr" href="" title="">
                                    Todos os cursos
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>


        </section>
    )
}

export default Course;