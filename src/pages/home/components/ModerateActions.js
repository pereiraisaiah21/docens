import React from "react";

import Card from "../../../components/card/Card";
import { FaOptinMonster } from 'react-icons/fa';
import MainTitle from "../../../components/title/MainTitle";
import Emoji from 'a11y-react-emoji';

/**
 *
 * @returns
 */

function ModerateActions () {

    let userStorage = JSON.parse(localStorage.getItem("user"));
    let isADM = JSON.parse(localStorage.getItem("adm"));

    const cardsContentDefault = [
        {
            name        : "Artigo",
            description : "Modere os artigos",
            link        : "/moderar/21",
            imageSrc    : "https://t5z6q4c2.rocketcdn.me/wp-content/uploads/2020/04/o-que-e-quimica-historia-definicao-utilidades-e-suas-areas.jpg",
            imageAlt    : "Image alternative",
            emoji: "📃"
        },
        {
            name        : "Pergunta",
            description : "Modere as perguntas",
            link        : "/feed",
            imageSrc    : "https://t5z6q4c2.rocketcdn.me/wp-content/uploads/2020/04/o-que-e-quimica-historia-definicao-utilidades-e-suas-areas.jpg",
            imageAlt    : "Image alternative",
            emoji: "🧾"
        },
        {
            name        : "Curso",
            description : "Modere os cursos",
            link        : "/feed",
            imageSrc    : "https://t5z6q4c2.rocketcdn.me/wp-content/uploads/2020/04/o-que-e-quimica-historia-definicao-utilidades-e-suas-areas.jpg",
            imageAlt    : "Image alternative",
            emoji: "🔖"
        },
        {
            name        : "Matéria",
            description : "Modere as matérias",
            link        : "/feed",
            imageSrc    : "https://t5z6q4c2.rocketcdn.me/wp-content/uploads/2020/04/o-que-e-quimica-historia-definicao-utilidades-e-suas-areas.jpg",
            imageAlt    : "Image alternative",
            emoji: "🏷"
        }
    ];
    

    return (

        <section className="actns">
             <div className="emoji--title emoji--title--noback">
                <Emoji className="emoji--navigation" symbol={"📃"} label="love" />
                <MainTitle description="Moderar" descriptionUnder="selecione uma opção abaixo" isCarousel={false} icon={<FaOptinMonster />} />
            </div>
            <div className="actns__crds actns__crds--list">
                {
                    !isADM
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
                    null
                }
            </div>
        </section>
    );
}

export default ModerateActions;
