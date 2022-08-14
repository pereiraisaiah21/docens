import React, { useEffect, useState } from "react";
import axios from "axios";

import CardSubjectProgress from "../../../components/card/CardSubectProgress";
import MainTitle from "../../../components/title/MainTitle"
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { FaOptinMonster } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function NavigationMyProgress ({
    slider
}) {

    const [cardsContent, setCardsContent] = useState({
        data  : [
            {
                name            : "",
                description     : "",
                link            : "",
                imageSrc        : "",
                imageAlt        : "",
                progressValue   : ""
            }
        ],
        error : ""
    });

    useEffect(() => {
        axios.get( "https://jsonplaceholder.typicode.com/users/" )
        .then( response => {
            setCardsContent({
                ...cardsContent,
                data : response.data
            });
        })
        .catch( err => {
            setCardsContent({
                ...cardsContent, 
                error : err
            })
        });
    }, []);

    return (
        <section className="actns">
            <MainTitle description="MEU PROGRESSO" icon={<FaOptinMonster />} />
            <div className="actns__crds actns__crds--myPrfl">
                {
                    slider
                    ?
                    <Swiper
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={10}
                        slidesPerView={(window.innerWidth < 768) ? 2 : 3}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {
                            cardsContent.data !== null 
                            ?
                            cardsContent.data.map((item, key) => {
                                return (
                                    <SwiperSlide key={key}>
                                        <CardSubjectProgress 
                                            classStyleDivButton={"actns__itm__bttn actns__itm__bttn--myPrgrss"}
                                            link={item.name} 
                                            classStyleGrand="actns__itm actns__itm--myPrgrss" 
                                            srcImage={"https://www.purarteadesivos.com.br/wp-content/uploads/2017/04/adesivo-personalizado-pokebola-pokemon-recorte-eletronico-geek-nerd-gamer-pura-arte-adesivos.png"} 
                                            altImage={"item.imageAlt"} 
                                            classStyleImage="actns__itm__img actns__itm__img--myPrgrss" 
                                            classStyleSpan="actns__itm__nm actns__itm__nm--myPrgrss" 
                                            classStyleDiv="actns__itm__inf actns__itm__inf--myPrgrss" 
                                            classStyleDivProgress="actns__itm__prgrss"
                                            classStyleDivProgressDiv="actns__itm__prcnt"
                                            classStyleSpanHit="actns__itm__ht"
                                            title={item.name}
                                            progressValue={item.id}
                                        />
                                    </SwiperSlide>
                                )
                            })
                            :
                            ""
                        }
                    </Swiper>
                    :
                    cardsContent.data !== null 
                    ?
                    cardsContent.data.map( ( item, key ) => {
                        return (
                            <CardSubjectProgress 
                                classStyleDivButton={"actns__itm__bttn actns__itm__bttn--myPrfl"}
                                link={item.name} 
                                classStyleGrand="actns__itm actns__itm--myPrfl" 
                                srcImage={"https://www.purarteadesivos.com.br/wp-content/uploads/2017/04/adesivo-personalizado-pokebola-pokemon-recorte-eletronico-geek-nerd-gamer-pura-arte-adesivos.png"} 
                                altImage={"item.imageAlt"} 
                                classStyleImage="actns__itm__img actns__itm__img--myPrfl" 
                                classStyleSpan="actns__itm__nm actns__itm__nm--myPrfl" 
                                classStyleDiv="actns__itm__inf actns__itm__inf--myPrfl" 
                                classStyleDivProgress="actns__itm__prgrss actns__itm__prgrss--myPrfl"
                                classStyleDivProgressDiv="actns__itm__prcnt"
                                classStyleSpanHit="actns__itm__ht"
                                title={item.name}
                                description={"Este conteúdo contém a cronologia do desenvolvimento sustentável com o passar dos anos. Além de pincelar conceitos da agronomia Ecológica."}
                                progressValue={item.id}
                                key={key}
                            />
                        )
                    })
                    :
                    ""
                }
            </div>
        </section>
    );
}

export default NavigationMyProgress;