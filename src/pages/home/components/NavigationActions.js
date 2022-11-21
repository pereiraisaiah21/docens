import React, { useContext, useEffect } from "react";
import UserData from "../../../UserData";

import Card from "../../../components/card/Card";
import { FaOptinMonster } from 'react-icons/fa';
import MainTitle from "../../../components/title/MainTitle";

/**
 *
 * @returns
 */

function NavigationActions () {

    let userStorage = JSON.parse(localStorage.getItem("user"));

    const cardsContentDefault = [
        {
            name        : "Feed",
            description : "Acesse o feed",
            link        : "/feed",
            imageSrc    : "https://t5z6q4c2.rocketcdn.me/wp-content/uploads/2020/04/o-que-e-quimica-historia-definicao-utilidades-e-suas-areas.jpg",
            imageAlt    : "Image alternative",
            emoji: "📃"
        },
        {
            name        : "Tutorial",
            description : "Acesse o tutorial de navegação",
            link        : "",
            imageSrc    : "https://t5z6q4c2.rocketcdn.me/wp-content/uploads/2020/04/o-que-e-quimica-historia-definicao-utilidades-e-suas-areas.jpg",
            imageAlt    : "Image alternative",
            emoji: "🔍"
        },
        {
            name        : "Cursos",
            description : "Acesse as cursos disponíveis",
            link        : "/cursos",
            imageSrc    : "https://t5z6q4c2.rocketcdn.me/wp-content/uploads/2020/04/o-que-e-quimica-historia-definicao-utilidades-e-suas-areas.jpg",
            imageAlt    : "Image alternative",
            emoji: "📚"
        },
        {
            name        : "Emblemas",
            description : "Confira os emblemas disponíveis",
            link        : "/emblemas",
            imageSrc    : "https://t5z6q4c2.rocketcdn.me/wp-content/uploads/2020/04/o-que-e-quimica-historia-definicao-utilidades-e-suas-areas.jpg",
            imageAlt    : "Image alternative",
            emoji: "🏅"
        }
    ];
    const cardsContentTeacher = [
        {
            name        : "Tutorial",
            description : "Acesse o tutorial de navegação",
            link        : "",
            imageSrc    : "https://t5z6q4c2.rocketcdn.me/wp-content/uploads/2020/04/o-que-e-quimica-historia-definicao-utilidades-e-suas-areas.jpg",
            imageAlt    : "Image alternative",
            emoji: "🔍"
        },
        {
            name        : "Materias",
            description : "Acesse as matérias disponíveis",
            link        : "/materias",
            imageSrc    : "https://t5z6q4c2.rocketcdn.me/wp-content/uploads/2020/04/o-que-e-quimica-historia-definicao-utilidades-e-suas-areas.jpg",
            imageAlt    : "Image alternative",
            emoji: "📕"
        }
    ];

    return (

        <section className="actns">
            <MainTitle description="navegue pelo site" descriptionUnder="selecione uma opção" isCarousel={false} icon={<FaOptinMonster />} />
            <div className="actns__crds">
                {
                    !!userStorage && userStorage.occupation === "student"
                    ?
                      cardsContentDefault.map( ( item, key ) => {
                          return (
                              <Card
                                    emoji={item.emoji}
                                    classStyleDivButton={"actns__itm__bttn"}
                                    link={item.link}
                                    classStyleGrand="actns__itm"
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
                      })
                    :
                    cardsContentTeacher.map( ( item, key ) => {
                        return (
                            <Card
                                emoji={item.emoji}
                                classStyleDivButton={"actns__itm__bttn"}
                                link={item.link}
                                classStyleGrand="actns__itm"
                                classStyleSpan="actns__itm__nm"
                                classStyleDiv="actns__itm__inf"
                                classStyleDivSpan="actns__itm__icn"
                                classStyleDivLabel="actns__itm__dscrptn"
                                title={item.name}
                                description={item.description}
                                key={key}
                            />
                        )
                    })
                }
            </div>
        </section>
    );
}

export default NavigationActions;
