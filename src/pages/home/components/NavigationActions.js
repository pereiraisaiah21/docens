import React from "react";

import CardWithImage from "../../../components/card/CardWithImage";
import { FaOptinMonster } from 'react-icons/fa';

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
        <section className="actns">
            <div className="actns__dscrptn">
                <span className="actns__dscrptn__icn">
                    <FaOptinMonster />
                </span>
                <span className="actns__dscrptn__ttl">
                    NAVEGUE PELO SITE
                </span>
            </div>
            <div className="actns__crds">
                {
                    cardsContent.map((item, key) => {
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