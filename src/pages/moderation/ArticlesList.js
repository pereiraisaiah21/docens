import React, { useContext, useState, useEffect } from "react";

import UserData from "../../UserData";
import MainTitle from "../../components/title/MainTitle";

/**
 *
 * @returns
 */

function ArticlesList () {

    const { userDataValues } = useContext( UserData );
    const [ typeUser, setTypeUser ] = useState( null );

    const [ articles, setArticles ] = useState({
        data: [
            {
                url: "/fadsfs",
                name: "Algebra 01",
                author: "Rosemberg",
                authorIcon: "",
                image: "",
                imageAlt: "Imagem da matéria de algebra",
                approved : false
            },
            {
                url: "/fadsfs",
                name: "Algebra 01",
                author: "Rosemberg",
                authorIcon: "",
                image: "",
                imageAlt: "Imagem da matéria de algebra",
                approved : false
            },
            {
                url: "/fadsfs",
                name: "Algebra 01",
                author: "Rosemberg",
                authorIcon: "",
                image: "",
                imageAlt: "Imagem da matéria de algebra",
                approved : true
            },
            {
                url: "/fadsfs",
                name: "Algebra 01",
                author: "Rosemberg",
                authorIcon: "",
                image: "",
                imageAlt: "Imagem da matéria de algebra",
                approved : false
            },
            {
                url: "/fadsfs",
                name: "Algebra 01",
                author: "Rosemberg",
                authorIcon: "",
                image: "",
                imageAlt: "Imagem da matéria de algebra",
                approved : true
            },
        ]
    })

    useEffect(() => {

        setTypeUser( userDataValues.typeUser )
    }, [ userDataValues ]);

    return (

        <section className="articlesList">
            <MainTitle description="itens a serem aprovados" descriptionUnder="" />
            <main className="articlesList__wrapper">
                {
                    articles.data 
                    ?
                    articles.data.map( ( item, key ) => {
                        return (
                            <div className="articlesList__item">
                                <a className="articlesList__anchor">
                                    <span className="articlesList__name"> { item.name } </span>

                                    <div className="articlesList__author">
                                        <img alt="" className="articlesList__image" src="https://via.placeholder.com/30" />
                                        <span className="articlesList__text">
                                            {item.author}
                                        </span>
                                    </div>
                                </a>
                            </div>
                        )
                    })
                    :
                    null
                }
            </main>
            <MainTitle description="artigos moderados" descriptionUnder="" />
            <div className="articlesList__wrapper">
                {
                    articles.data
                    ?
                    articles.data.map( ( item, key ) => {
                        return (

                            <div className="articlesList__item">
                            <a className="articlesList__anchor">
                                <span className="articlesList__name"> { item.name } </span>

                                <div className="articlesList__author">
                                    <img alt="" className="articlesList__image" src="https://via.placeholder.com/30" />
                                    <span className="articlesList__text">
                                        {item.author}
                                    </span>
                                    <img className="articlesList__approved" src={`/${item.approved}.svg`} title="" />
                                </div>
                            </a>
                        </div>
                        )
                    })
                    :
                    null
                }
            </div>
        </section>
    );
}

export default ArticlesList;
