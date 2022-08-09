import React from "react";

import { FaGuitar } from 'react-icons/fa';
import CardSubjectProgress from "../../../components/card/CardSubectProgress";
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function NavigationMyProgress () {

    const cardsContent = [
        {
            name            : "Algebra Linear",
            description     : "Descrição da matéria",
            link            : "",
            imageSrc        : "https://www.purarteadesivos.com.br/wp-content/uploads/2017/04/adesivo-personalizado-pokebola-pokemon-recorte-eletronico-geek-nerd-gamer-pura-arte-adesivos.png",
            imageAlt        : "Image alternative",
            progressValue   : 96
        },
        {
            name            : "Algebra Linear",
            description     : "Descrição da matéria",
            link            : "",
            imageSrc        : "https://www.purarteadesivos.com.br/wp-content/uploads/2017/04/adesivo-personalizado-pokebola-pokemon-recorte-eletronico-geek-nerd-gamer-pura-arte-adesivos.png",
            imageAlt        : "Image alternative",
            progressValue   : 45
        },
        {
            name            : "Algebra Linear",
            description     : "Descrição da matéria",
            link            : "",
            imageSrc        : "https://www.purarteadesivos.com.br/wp-content/uploads/2017/04/adesivo-personalizado-pokebola-pokemon-recorte-eletronico-geek-nerd-gamer-pura-arte-adesivos.png",
            imageAlt        : "Image alternative",
            progressValue   : 22
        },
        {
            name            : "Algebra Linear",
            description     : "Descrição da matéria",
            link            : "",
            imageSrc        : "https://www.purarteadesivos.com.br/wp-content/uploads/2017/04/adesivo-personalizado-pokebola-pokemon-recorte-eletronico-geek-nerd-gamer-pura-arte-adesivos.png",
            imageAlt        : "Image alternative",
            progressValue   : 22
        },
        {
            name            : "Algebra Linear",
            description     : "Descrição da matéria",
            link            : "",
            imageSrc        : "https://www.purarteadesivos.com.br/wp-content/uploads/2017/04/adesivo-personalizado-pokebola-pokemon-recorte-eletronico-geek-nerd-gamer-pura-arte-adesivos.png",
            imageAlt        : "Image alternative",
            progressValue   : 22
        }
    ];

    return (
        <section className="actns">
            <div className="actns__dscrptn">
                <span className="actns__dscrptn__icn">
                    <FaGuitar />
                </span>
                <span className="actns__dscrptn__ttl">
                    MEU PROGRESSO
                </span>
            </div>
            <div className="actns__crds actns__crds--myPrgrss">
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={10}
                    slidesPerView={(window.innerWidth < 768) ? 1 : 4}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}>
                        {
                            cardsContent.map((item, key) => {
                                return (
                                    <SwiperSlide key={key}>
                                        <CardSubjectProgress 
                                            classStyleDivButton={"actns__itm__bttn actns__itm__bttn--myPrgrss"}
                                            link={item.link} 
                                            classStyleGrand="actns__itm actns__itm--myPrgrss" 
                                            srcImage={item.imageSrc} 
                                            altImage={item.imageAlt} 
                                            classStyleImage="actns__itm__img actns__itm__img--myPrgrss" 
                                            classStyleSpan="actns__itm__nm actns__itm__nm--myPrgrss" 
                                            classStyleDiv="actns__itm__inf actns__itm__inf--myPrgrss" 
                                            classStyleDivProgress="actns__itm__prgrss"
                                            classStyleDivProgressDiv="actns__itm__prcnt"
                                            classStyleSpanHit="actns__itm__ht"
                                            title={item.name}
                                            progressValue={item.progressValue}
                                        />
                                    </SwiperSlide>
                                )
                            })
                        }
                </Swiper>
            </div>
        </section>
    );
}

export default NavigationMyProgress;