import React from "react";

import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

/**
 * 
 * @returns 
 */

function ImageCarousel ({
    images
}) {

    return (
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {
                images.map((item, key) => {
                    return (
                        <SwiperSlide key={key}>
                            <img alt="" src={item} />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
}

export default ImageCarousel;