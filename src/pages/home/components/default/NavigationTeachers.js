import React, { useState, useEffect } from "react";
import api from "../../../../services/api";

import MainTitle from "../../../../components/title/MainTitle";
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { FaOptinMonster } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


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

      api
        .get( "/users" )
        .then( response => {

            setTeachers({
                ...teachers,
                data : response.data
            });
        })
        .catch( err => {
            setTeachers({
                ...teachers,
                error : err
            })
        });
    }, []);

    return (

        <section className="actns">
            <MainTitle description="professores" descriptionUnder="Professores contribuintes" isCarousel={true} icon={<FaOptinMonster />} />
            <div className="actns__crds">
                <section className="actns__tchrs">
                    <Swiper
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={10}
                        slidesPerView={(window.innerWidth < 768) ? 2 : 5}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        loop={true}
                    >
                        {
                            teachers.data !== null && teachers.data !== undefined && (
                            teachers.data.map( ( item, key ) => {
                                return(
                                    <SwiperSlide key={key}>
                                        <div className="actns__tchrs__itm">
                                            <a className="actns__tchrs__anchr" alt="´Ícone professor" href="/professor">
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
                            }))
                        }
                    </Swiper>
                </section>
            </div>
        </section>
    );
}

export default NavigationTeachers;
