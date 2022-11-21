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

    const pagesMobile = [
        {
            name        : "Feed",
            description : "Acesse o feed",
            link        : "/feed",
            emoji: "📃"
        },
        {
            name        : "Tutorial",
            description : "Acesse o tutorial de navegação",
            link        : "",
            emoji: "🔍"
        },
        {
            name        : "Cursos",
            description : "Acesse as cursos disponíveis",
            link        : "/cursos",
            emoji: "📚"
        },
        {
            name        : "Emblemas",
            description : "Confira os emblemas disponíveis",
            link        : "/emblemas",
            emoji: "🏅"
        }
    ];

    return (

        <section className="hdr--mbl__pgs">
            <ul className="hdr--mbl__lst">
                {
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
                }
            </ul>
		</section>
    );
}

export default PagesMobile;