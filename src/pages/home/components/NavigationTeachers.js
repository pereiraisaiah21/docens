import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import DragAlert from "../../../components/carousel/DragAlert";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { FaChalkboardTeacher } from 'react-icons/fa';

function NavigationTeachers () {

    const [teachers, setTeachers] = useState({
        data  : [
            {
                name            : "",
                subject         : "",
                description     : "",
                imageSrc        : ""
            }
        ],
        error : ""
    });

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users/")
        .then(response => {
            setTeachers({...teachers, data : response.data});
        })
        .catch(err => setTeachers({...teachers, error : err}));
    }, []);

    return (
        <section className="actns actns--bg-01">
            <div className="actns__dscrptn">
                <span className="actns__dscrptn__icn">
                    <FaChalkboardTeacher />
                </span>
                <span className="actns__dscrptn__ttl actns__dscrptn__ttl--dscrptn">
                    PROFESSORES
                    <p>
                        Confira os professores
                    </p>
                </span>
                <DragAlert classSyle="dragAlert dragAlert--tp-01" />
            </div>
            <div className="actns__crds">
                <section className="actns__tchrs">
                    <Swiper
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={10}
                        slidesPerView={(window.innerWidth < 768) ? 2 : 5}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}>
                        {
                            teachers.data !== null && teachers.data !== undefined
                            ?
                            teachers.data.map((item, key) => {
                                return(
                                    <SwiperSlide key={key}>
                                        <div className="actns__tchrs__itm">
                                            <a className="actns__tchrs__anchr">
                                                <img className="actns__tchrs__img" alt="" src="https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_man_boy_male_profile_smiley_happy_people_icon_181657.png" />
                                                <span className="actns__tchrs__nm">
                                                    {item.name}
                                                </span>
                                                <p className="actns__tchrs__dscrptn">
                                                    {item.username}
                                                </p>
                                            </a>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                            :
                            ""
                        }
                    </Swiper>
                </section>
            </div>
        </section>
    );
}

export default NavigationTeachers;