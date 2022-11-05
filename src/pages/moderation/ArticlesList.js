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
                image: "",
                imageAlt: "Imagem da matéria de algebra",
                description: "Descripção de algebra"
            }
        ]
    })

    useEffect(() => {

        setTypeUser( userDataValues.typeUser )
    }, [ userDataValues ]);

    return (

        <section className="articlesList">
            <MainTitle description="sobre nós" descriptionUnder="Docens Educacional" />
            <main className="articlesList__wrapper">
                {
                    articles.data 
                    ?
                    articles.data.map( ( item, key ) => {
                        return (
                            <div>
                                <a>
                                    <span> { item.name } </span>
                                </a>
                            </div>
                        )
                    })
                    :
                    null
                }
            </main>
        </section>
    );
}

export default ArticlesList;
