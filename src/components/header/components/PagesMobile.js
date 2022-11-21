import React from "react";

import Emoji from 'a11y-react-emoji';

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function PagesMobile ({
    userData
}) {

    const userStorage = JSON.parse(localStorage.getItem( "user" ));

    const pagesMobile = [
        {
            name        : "Feed",
            description : "Acesse o feed",
            url        : "/feed",
            emoji: "📃"
        },
        {
            name        : "Tutorial",
            description : "Acesse o tutorial de navegação",
            url        : "",
            emoji: "🔍"
        },
        {
            name        : "Cursos",
            description : "Acesse as cursos disponíveis",
            url        : "/cursos",
            emoji: "📚"
        },
        {
            name        : "Emblemas",
            description : "Confira os emblemas disponíveis",
            url        : "/emblemas",
            emoji: "🏅"
        }
    ];
    const pagesMobileUnlogged = [
        {
            name        : "Entrar",
            description : "Entrar",
            url        : "/entrar",
            emoji: "🛤"
        },
        {
            name        : "Dúvidas",
            description : "Acesse o feed",
            url        : "/feed",
            emoji: "📃"
        },
        {
            name        : "Docens",
            description : "Acesse o feed",
            url        : "/sobre-nos",
            emoji: "🤖"
        }
        
    ];

    return (

        <section className="hdr--mbl__pgs">
            <ul className="hdr--mbl__lst">
                {
                    !!userStorage
                    ?
                    pagesMobile.map( ( item, key ) => {
                        return(
                            <li key={key}>
                                <a href={item.url} alt={item.title}>
                                    <Emoji className="emoji--navigation" symbol={item.emoji} label="love" />
                                    {item.name}
                                </a>
                            </li>
                        )
                    })
                    :
                    pagesMobileUnlogged.map( ( item, key ) => {
                        return(
                            <li key={key}>
                                <a href={item.url} alt={item.title}>
                                    <Emoji className="emoji--navigation" symbol={item.emoji} label="love" />
                                    {item.name}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
		</section>
    );
}

export default PagesMobile;
