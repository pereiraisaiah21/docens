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
                subject     : "Lógica",
                title       : "Fundamentos da lógica",
                summary     : "Lógica é a técnica utilizada para desenvolver instruções em uma sequência para atingir determinado objetivo.",
                link        : "/materias/logica/fundamentos-da-logica",
                views       : 200
            },
            {
                imageSrc    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                imageAlt    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                subject     : "Lógica",
                title       : "Quais os fundamentos da computação?",
                summary     : "Esses fundamentos da ciência da computação incluem algoritmos, metodologia e linguagens de programação, computação e análise de dados e símbolos e elementos e hardware do computador.",
                link        : "/hfs",
                views       : 200
            },
            {
                imageSrc    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                imageAlt    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                subject     : "Teoria",
                title       : "Computação Clássica",
                summary     : "Computação clássica: princípios básicos. *em 1936, Turing provou que existem problemas que não podem ser resolvidos por uma máquina de Turing, como o problema de HALTING. out A B A B out 00 1 01 1 10 1 11 0.",
                link        : "/hfs",
                views       : 200
            },
            {
                imageSrc    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                imageAlt    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                subject     : "Programação - Prática",
                title       : "Tipos de dados na linguagem R",
                summary     : "Na programação R, os tipos de dados mais básicos são os objetos R chamados vectors que contém elementos de diferentes classes.",
                link        : "/hfs",
                views       : 200
            },
            {
                imageSrc    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                imageAlt    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                subject     : "Programação - Prática",
                title       : "Usos Linguagem R",
                summary     : "É tanto uma linguagem de programação quanto um ambiente de software para análise estatística, representação gráfica e relatórios.",
                link        : "/hfs",
                views       : 200
            },
            {
                imageSrc    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                imageAlt    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                subject     : "Programação - Prática",
                title       : "Linguagem R vs Python",
                summary     : "As linguagens Python e R estão sendo bastante cobradas ultimamente. Principalmente por conta de um assunto que está muito evidente ultimamente: Análise de Dados.",
                link        : "/hfs",
                views       : 200
            },
            {
                imageSrc    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                imageAlt    : "https://etus.com.br/img/impulsionamento-post-etus2.webp",
                subject     : "Programação - Prática",
                title       : "Introdução Linguagem de progração R",
                summary     : "A linguagem R é mais usada para manipulação de conjuntos de dados de tamanho médio, análises estatísticas e produção de documentos e apresentações centradas em dados.",
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
