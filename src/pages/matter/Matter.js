import React, { useState } from "react";

import CardCourse from "../../components/card/CardCourse";

import MainTitle from "../../components/title/MainTitle";
import NavigationMyProgress from "../home/components/NavigationActions"

function Matter () {

    const [posts, setPosts] = useState({
        data : [
            {
                imageSrc    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                imageAlt    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                subject     : "Direitos humanos",
                title       : "Fundamentos de Realidade aumentada",
                summary     : "Turismo. No setor de turismo, por exemplo, o Timetraveller é um bom exemplo do uso da realidade aumentada. Se você visitar um lugar histórico, como o Muro de Berlim, e acionar o aplicativo, ele irá contar histórias com vídeos do local para entender o seu passado.",
                link        : "/hfs",
                views       : 200
            },
            {
                imageSrc    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                imageAlt    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                subject     : "Direitos humanos",
                title       : "Fundamentos de Realidade aumentada",
                summary     : "Turismo. No setor de turismo, por exemplo, o Timetraveller é um bom exemplo do uso da realidade aumentada. Se você visitar um lugar histórico, como o Muro de Berlim, e acionar o aplicativo, ele irá contar histórias com vídeos do local para entender o seu passado.",
                link        : "/hfs",
                views       : 200
            },
            {
                imageSrc    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                imageAlt    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                subject     : "Direitos humanos",
                title       : "Fundamentos de Realidade aumentada",
                summary     : "Turismo. No setor de turismo, por exemplo, o Timetraveller é um bom exemplo do uso da realidade aumentada. Se você visitar um lugar histórico, como o Muro de Berlim, e acionar o aplicativo, ele irá contar histórias com vídeos do local para entender o seu passado.",
                link        : "/hfs",
                views       : 200
            },
            {
                imageSrc    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                imageAlt    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                subject     : "Direitos humanos",
                title       : "Fundamentos de Realidade aumentada",
                summary     : "Turismo. No setor de turismo, por exemplo, o Timetraveller é um bom exemplo do uso da realidade aumentada. Se você visitar um lugar histórico, como o Muro de Berlim, e acionar o aplicativo, ele irá contar histórias com vídeos do local para entender o seu passado.",
                link        : "/hfs",
                views       : 200
            },
            {
                imageSrc    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                imageAlt    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                subject     : "Direitos humanos",
                title       : "Fundamentos de Realidade aumentada",
                summary     : "Turismo. No setor de turismo, por exemplo, o Timetraveller é um bom exemplo do uso da realidade aumentada. Se você visitar um lugar histórico, como o Muro de Berlim, e acionar o aplicativo, ele irá contar histórias com vídeos do local para entender o seu passado.",
                link        : "/hfs",
                views       : 200
            },
            {
                imageSrc    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                imageAlt    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                subject     : "Direitos humanos",
                title       : "Fundamentos de Realidade aumentada",
                summary     : "Turismo. No setor de turismo, por exemplo, o Timetraveller é um bom exemplo do uso da realidade aumentada. Se você visitar um lugar histórico, como o Muro de Berlim, e acionar o aplicativo, ele irá contar histórias com vídeos do local para entender o seu passado.",
                link        : "/hfs",
                views       : 200
            }
        ],
        error: ""
    });

    return (
        <section className="crs">
            <div className="crs__wrppr">
                <div className="crs__cntnt">
                    <h1 className="crs__ttl">
                            Algebra binária
                    </h1>
                    <p className="crs__dscrptn">
                        Esta matéria diz sobre um sistema de equações é constituído por um conjunto de equações que apresentam mais de uma incógnita. Para resolver um sistema é necessário encontrar os valores que satisfaçam simultaneamente todas as equações.
                    </p>
                    <nav className="crs__br crs__br--mttr">
                        <ul className="crs__br__optns">
                            <li className="crs__br__itm">
                                <a className="crs__br__anchr crs__br__anchr--ttl" href="" title="">
                                    Todos os artigos
                                </a>
                            </li>
                            <li className="crs__br__itm">
                                <a className="crs__br__anchr" href="" title="">
                                    Introdução
                                </a>
                            </li>
                            <li className="crs__br__itm">
                                <a className="crs__br__anchr" href="" title="">
                                    Equação do primeiro grau
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    );
}

export default Matter;