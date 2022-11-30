import React, { useState } from "react";

import CardCourse from "../../components/card/CardCourse";
import Emoji from 'a11y-react-emoji';
import MainTitle from "../../components/title/MainTitle";

/**
 *
 * @returns
 */

function Course () {

    const icon = ["🛄", "🛄", "🗿", "⚱", "🪣", "🧹", "🧷", "🧴", "🪑", "🛋", "🪟", - "🩺", "🩹", "🔬", "🧬", "🧰", "🪜", "⛓", "📉", "⚙", "📦", "🖊", "🪙"];
    const [posts, setPosts] = useState({
        data : [
            {
                imageSrc    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                imageAlt    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                subject     : "Direitos humanos",
                title       : "Fundamentos de Realidade aumentada",
                summary     : "Texto de descrição do post, Texto de descrição do post, Texto de descrição do post, Texto de descrição do post.",
                link        : "/hfs",
                views       : 200
            },
            {
                imageSrc    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                imageAlt    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                subject     : "Direitos humanos",
                title       : "Fundamentos de Realidade aumentada",
                summary     : "Texto de descrição do post, Texto de descrição do post, Texto de descrição do post, Texto de descrição do post.",
                link        : "/hfs",
                views       : 200
            },
            {
                imageSrc    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                imageAlt    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                subject     : "Direitos humanos",
                title       : "Fundamentos de Realidade aumentada",
                summary     : "Texto de descrição do post, Texto de descrição do post, Texto de descrição do post, Texto de descrição do post.",
                link        : "/hfs",
                views       : 200
            },
            {
                imageSrc    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                imageAlt    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                subject     : "Direitos humanos",
                title       : "Fundamentos de Realidade aumentada",
                summary     : "Texto de descrição do post, Texto de descrição do post, Texto de descrição do post, Texto de descrição do post.",
                link        : "/hfs",
                views       : 200
            },
            {
                imageSrc    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                imageAlt    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                subject     : "Direitos humanos",
                title       : "Fundamentos de Realidade aumentada",
                summary     : "Texto de descrição do post, Texto de descrição do post, Texto de descrição do post, Texto de descrição do post.",
                link        : "/hfs",
                views       : 200
            },
            {
                imageSrc    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                imageAlt    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                subject     : "Direitos humanos",
                title       : "Fundamentos de Realidade aumentada",
                summary     : "Texto de descrição do post, Texto de descrição do post, Texto de descrição do post, Texto de descrição do post.",
                link        : "/hfs",
                views       : 200
            }
        ],
        error: ""
    });

    const dataPlaceholder = [
        {
            name : "Introdução a lógica",
            description : "Neste curso conheceremos um pouco mais sobre a lógica de programaçaõ. Explicamos a evolução dela no decorrer dos anos. Mostramos também exemplos para facilitar a compreensão dos conteúdos.",
            allMatters : [
                {
                    name: "Lógica Teoria",
                    url: "/materias/logica-teoria",
                },
                {
                    name: "Expandindo a lógica",
                    url: "/materias/materia-02",
                },
                {
                    name: "Prática Lógica",
                    url: "/materias/materia-03",
                }
            ],
            lastArticles : [
                {
                    imageSrc    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                    imageAlt    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                    subject     : "Direitos humanos",
                    title       : "Fundamentos de Realidade aumentada",
                    summary     : "Texto de descrição do post, Texto de descrição do post, Texto de descrição do post, Texto de descrição do post.",
                    link        : "/hfs",
                    views       : 200
                },
                {
                    imageSrc    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                    imageAlt    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                    subject     : "Direitos humanos",
                    title       : "Fundamentos de Realidade aumentada",
                    summary     : "Texto de descrição do post, Texto de descrição do post, Texto de descrição do post, Texto de descrição do post.",
                    link        : "/hfs",
                    views       : 200
                },
                {
                    imageSrc    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                    imageAlt    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                    subject     : "Direitos humanos",
                    title       : "Fundamentos de Realidade aumentada",
                    summary     : "Texto de descrição do post, Texto de descrição do post, Texto de descrição do post, Texto de descrição do post.",
                    link        : "/hfs",
                    views       : 200
                }
            ]
        }
    ];

    return (

        <section className="crs">
            <div className="crs__wrppr">
                <div className="crs__cntnt">                                 
                    <h1 className="crs__ttl">
                        <Emoji className="emoji--navigation" symbol={icon[Math.floor(Math.random() * icon.length)]} label="love" />
                        <MainTitle description={dataPlaceholder[0].name} descriptionUnder="" isCarousel={false} />
                    </h1>
                    <p className="crs__dscrptn">
                        {dataPlaceholder[0].description}
                    </p>
                    <nav className="crs__br">
                        <ul className="crs__br__optns">
                            <li className="crs__br__itm">
                                <a className="crs__br__anchr crs__br__anchr--ttl" href="" title="">
                                    Todas as matérias
                                </a>
                            </li>
                            {
                                dataPlaceholder[0].allMatters.map( ( item, key ) => {
                                    return (
                                        <li className="crs__br__itm" key={key}>
                                            <a className="crs__br__anchr" href={item.url} title="">
                                                {item.name}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                    <div className="crs__artcls">
                        <h2 className="crs__artcls__ttl">
                            Últimos artigos
                        </h2>
                        {
                            dataPlaceholder[0].lastArticles.map( ( item, key ) => {
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
                        }
                    </div>        
                </div>
            </div>
        </section>
    );
}

export default Course;
