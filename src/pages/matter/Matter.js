import React, { useState } from "react";

import MainTitle from "../../components/title/MainTitle";
import Emoji from 'a11y-react-emoji';

/**
 * 
 * @returns 
 */

function Matter () {

    const icon = ["🛄", "🛄", "🗿", "⚱", "🪣", "🧹", "🧷", "🧴", "🪑", "🛋", "🪟", - "🩺", "🩹", "🔬", "🧬", "🧰", "🪜", "⛓", "📉", "⚙", "📦", "🖊", "🪙"];
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

    const dataPlaceholder = [
    {
        name : "Lógica Teoria",
        description : "Esta matéria possui artigos sobre oquue é a lógica, e como que ela vem evoluindo ao decorrer dos tempos. Por definição formal, temos que lógica é \"A lógica é uma área da filosofia que visa estudar a estrutura formal dos enunciados (proposições) e suas regras.\". Veja mais a seguir, nos artigos listados.",
        articles : [
            {
                name : "Introdução",
                url : "/materias/logica/introducao",
                title: "Ir para artigo Introducão"
            },
            // {
            //     name : "Fundamentos da lógica",
            //     url : "/materias/logica/introducao",
            //     title: "Ir para artigo Introducão"
            // },
            // {
            //     name : "Lógica no cotidiano",
            //     url : "/materias/logica/introducao",
            //     title: "Ir para artigo Introducão"
            // },
            // {
            //     name : "Evolução da lógica",
            //     url : "/materias/logica/introducao",
            //     title: "Ir para artigo Introducão"
            // },
            // {
            //     name : "Lógica na programação",
            //     url : "/materias/logica/introducao",
            //     title: "Ir para artigo Introducão"
            // },
            // {
            //     name : "Lógica matemática",
            //     url : "/materias/logica/introducao",
            //     title: "Ir para artigo Introducão"
            // }
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
                    <nav className="crs__br crs__br--mttr">
                        <ul className="crs__br__optns">
                            <li className="crs__br__itm">
                                <a className="crs__br__anchr crs__br__anchr--ttl" href="#" title="Todos os artigos.">
                                    Todos os artigos
                                </a>
                            </li>
                            {
                                dataPlaceholder[0].articles.map( ( item, key ) => {
                                    return (
                                        <li className="crs__br__itm" key={key}>
                                            <a className="crs__br__anchr" href={item.url} title={item.title}>
                                                {item.name}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    );
}

export default Matter;