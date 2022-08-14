import React from "react";

import CardWithImage from "../../../components/card/CardWithImage";
import { FaOptinMonster } from 'react-icons/fa';

import MainTitle from "../../../components/title/MainTitle";

/**
 * 
 * @returns 
 */

function NavigationActions () {

    const cardsContent = [
        {
            name        : "item.name",
            description : "item.description",
            link        : "",
            imageSrc    : "https://www.purarteadesivos.com.br/wp-content/uploads/2017/04/adesivo-personalizado-pokebola-pokemon-recorte-eletronico-geek-nerd-gamer-pura-arte-adesivos.png",
            imageAlt    : "Image alternative"
        },
        {
            name        : "item.name",
            description : "item.description",
            link        : "",
            imageSrc    : "https://www.purarteadesivos.com.br/wp-content/uploads/2017/04/adesivo-personalizado-pokebola-pokemon-recorte-eletronico-geek-nerd-gamer-pura-arte-adesivos.png",
            imageAlt    : "Image alternative"
        },
        {
            name        : "item.name",
            description : "item.description",
            link        : "",
            imageSrc    : "https://www.purarteadesivos.com.br/wp-content/uploads/2017/04/adesivo-personalizado-pokebola-pokemon-recorte-eletronico-geek-nerd-gamer-pura-arte-adesivos.png",
            imageAlt    : "Image alternative"
        }
    ];

    return (
        <section className="actns actns--bg-01">
            <MainTitle description="NAVEGUE PELO SITE" isCarousel={false} icon={<FaOptinMonster />} />
            <div className="actns__crds">
                <CardWithImage 
                    classStyleDivButton={"actns__itm__bttn actns__itm__bttn--fd"}
                    link={"/feed"} 
                    classStyleGrand="actns__itm actns__itm--fd" 
                    srcImage={"https://cdn-icons-png.flaticon.com/512/37/37430.png"} 
                    altImage={"Ícone de feed."} 
                    classStyleImage="actns__itm__img" 
                    classStyleSpan="actns__itm__nm actns__itm__nm--fd" 
                    classStyleDiv="actns__itm__inf" 
                    classStyleDivSpan="actns__itm__icn" 
                    classStyleDivLabel="actns__itm__dscrptn actns__itm__dscrptn--fd" 
                    title={"Feed"} 
                    description={"Feed de matérias"}
                />
                {
                    cardsContent.map( ( item, key ) => {
                        return (
                            <CardWithImage 
                                classStyleDivButton={"actns__itm__bttn"}
                                link={item.link} 
                                classStyleGrand="actns__itm" 
                                srcImage={item.imageSrc} 
                                altImage={item.imageAlt} 
                                classStyleImage="actns__itm__img" 
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