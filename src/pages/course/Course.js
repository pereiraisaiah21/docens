import React, { useState } from "react";

import CardCourse from "../../components/card/CardCourse";

import MainTitle from "../../components/title/MainTitle";
import NavigationMyProgress from "../home/components/NavigationActions"

function Course () {

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
                    <nav className="crs__br">
                        <ul className="crs__br__optns">
                            <li className="crs__br__itm">
                                <a className="crs__br__anchr crs__br__anchr--ttl" href="" title="">
                                    Todos as matérias
                                </a>
                            </li>
                            <li className="crs__br__itm">
                                <a className="crs__br__anchr" href="" title="">
                                    Equação do primeiro grau
                                </a>
                            </li>
                            <li className="crs__br__itm">
                                <a className="crs__br__anchr" href="" title="">
                                    Equação do segundo grau
                                </a>
                            </li>
                            <li className="crs__br__itm">
                                <a className="crs__br__anchr" href="" title="">
                                    Expressões algébricas
                                </a>
                            </li>
                            <li className="crs__br__itm">
                                <a className="crs__br__anchr" href="" title="">
                                    Sistemas de equações
                                </a>
                            </li>
                            <li className="crs__br__itm">
                                <a className="crs__br__anchr" href="" title="">
                                    Polinômios
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="crs__artcls">
                        <h2 className="crs__artcls__ttl">
                            Últimos artigos
                        </h2>
                        {
                            posts.data !== null
                            ?
                            posts.data.map( ( item, key ) => {
                                return (
                                    <CardCourse 
                                        classStyleGrand="crs__crd" 
                                        classStyleInfoBox="crs__crd__inf"
                                        link={item.link}
                                        title={item.title}
                                        summary={item.summary}
                                        key={key}
                                    />
                                )
                            })
                            :
                            ""
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Course;