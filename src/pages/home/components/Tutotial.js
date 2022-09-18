import React, { useState } from "react";

import CardTutorial from "../../../components/card/CardTutorial";
import MainTitle from "../../../components/title/MainTitle";
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

function Tutorial ({
    slider
}) {

    const [tutorialContent, setTutorialContent] = useState({
        data  : [
            {
                name : "Passo 01",
                description : "Clique sobre",
                image : ""
            }
        ]
    });

    return (

        <section className="actns">
            <MainTitle description="tutorial" isCarousel={true} icon={<FaOptinMonster />} />
            <div className="actns__crds actns__crds--myPrfl">
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={10}
                    slidesPerView={(window.innerWidth < 768) ? 1 : 1}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    loop={true}
                >
                {
                    tutorialContent.data.map((item, key) => {
                        return (
                            <SwiperSlide key={key}>
                                <CardTutorial 
                                    classStyleGrand="actns__itm actns__itm--tutorial" 
                                    srcImage={"https://conceito.de/wp-content/uploads/2012/11/tutorial-1.jpg"} 
                                    altImage={"item.imageAlt"} 
                                    classStyleImage="actns__itm__img actns__itm__img--tutorial" 
                                    classStyleSpan="actns__itm__nm actns__itm__nm--tutorial"
                                    title={item.name}
                                    description={item.description}
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

export default Tutorial;