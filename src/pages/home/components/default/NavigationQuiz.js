import React, { useState } from "react";

import MainTitle from "../../../../components/title/MainTitle";
import Emoji from 'a11y-react-emoji';
import Card from "../../../../components/card/Card";

/**
 * 
 * @returns 
 */

function NavigationQuiz () {

    const [teachers, setTeachers] = useState({
        data  : [
            {
                name            : "Adminstrador",
                subject         : "",
                description     : "Adm@docens.com",
                imageSrc        : ""
            },
        ],
        error : ""
    });
    const cardsContentDefault = [
        {
            name        : "Quizes",
            description : "Confira todos os quizes",
            link        : "/quiz",
            imageSrc    : "https://t5z6q4c2.rocketcdn.me/wp-content/uploads/2020/04/o-que-e-quimica-historia-definicao-utilidades-e-suas-areas.jpg",
            imageAlt    : "Image alternative",
            emoji: "🎞"
        },
        {
            name        : "Banco",
            description : "Banco de exercícíos",
            link        : "/quiz",
            imageSrc    : "https://t5z6q4c2.rocketcdn.me/wp-content/uploads/2020/04/o-que-e-quimica-historia-definicao-utilidades-e-suas-areas.jpg",
            imageAlt    : "Image alternative",
            emoji: "🪑"
        },
    ];

    return (

        <section className="actns">
            <div className="actns__quiz">
                <div className="emoji--title">
                    <Emoji className="emoji--navigation" symbol={"🧮"} label="love" />
                    <MainTitle description="questionário" descriptionUnder="responda quizes" isCarousel={false} />
                </div>
                <a className="actns__quiz__wrapper">
                    <Emoji className="emoji--navigation" symbol={""} label="love" />
                  {
                    cardsContentDefault.map( ( item, key ) => {
                        return (
                            <Card
                                  emoji={item.emoji}
                                  classStyleDivButton={"actns__itm__bttn"}
                                  link={item.link}
                                  classStyleGrand="actns__itm actns__itm--quiz"
                                  classStyleImage="actns__itm__img"
                                  classStyleSpan="actns__itm__nm"
                                  classStyleDiv="actns__itm__inf"
                                  classStyleDivSpan="actns__itm__icn"
                                  classStyleDivLabel="actns__itm__dscrptn"
                                  srcImage={item.imageSrc}
                                  altImage={item.imageAlt}
                                  title={item.name}
                                  description={item.description}
                                  key={key}
                            />
                        )
                    })}
                </a>
            </div>
        </section>
    );
}

export default NavigationQuiz;
