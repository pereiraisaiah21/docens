import React, { useState } from "react";

import MainTitle from "../../components/title/MainTitle";
import CardFeed from "../../components/card/CardFeed";
import Emoji from 'a11y-react-emoji';

/**
 *
 * @returns
 */

function Feed () {

    const [posts, setPosts] = useState({
        data : [
            {
                imageSrc    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                imageAlt    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                subject     : "Direitos humanos",
                title       : "Fundamentos de Realidade aumentada",
                summary     : "Texto com breve descrição da matéria, Texto com breve descrição da matéria, Texto com breve descrição da matéria, Texto com breve descrição da matéria, Texto com breve descrição da matéria, Texto com breve descrição da matéria, Texto com breve descrição da matéria.",
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

        <section className="fd">
            <div className="emoji--title">
                <Emoji className="emoji--navigation" symbol={"📃"} label="love" />
                <MainTitle description="meu feed" descriptionUnder="Pubicações recentes" isCarousel={false} />
            </div>
            <div className="fd__wrppr">
                <div className="fd__psts">
                    {
                        posts.data !== null && (
                            posts.data.map( ( item, key ) => {
                                return (
                                    <CardFeed
                                        classStyleGrand="fd__crd"
                                        classStyleImageBox="fd__crd__img"
                                        classStyleImage="fd__crd__img__cntnt"
                                        classStyleInfoBox="fd__crd__inf"
                                        classStyleViewBox="fd__crd__vw"
                                        classStyleSubject="fd__crd__sbjct"
                                        link={item.link}
                                        subject={item.subject}
                                        srcImage={item.imageSrc}
                                        altImage={item.imageAlt}
                                        title={item.title}
                                        summary={item.summary}
                                        views={item.views}
                                        key={key}
                                    />
                                )
                            })
                        )
                    }
                </div>
            </div>
        </section>
    );
}

export default Feed;
