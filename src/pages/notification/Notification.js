import React, { useState, useEffect } from "react";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";

import MainTitle from "../../components/title/MainTitle";
import { FaRegBookmark, FaTag } from 'react-icons/fa';

import "./Notifications.scss";

function Notification () {

    const [loader, setLoader] = useState( true );
    const [notifications, setNotifications] = useState({
        data : [],
        error : ""
    })

    useEffect(() => {
        axios.get( `https://jsonplaceholder.typicode.com/users/` )
        .then( response => {

            setNotifications({
                ...notifications,
                data: response.data
            });
            setTimeout( () => 
                setLoader( false ), 
                3000
            );
        }).catch( err => {
            setNotifications({
                ...notifications,
                error: err
            });
        });
    }, []);

    return (
        <>
            {
                loader
                ?
                <div className="ldr">
                    <TailSpin color = "rgba(255, 255, 255)" />
                </div>
                :
                <section className="ntfct">
                    <MainTitle description="NAVEGUE PELO SITE" isCarousel={false} icon={<FaTag />} />
                    <div className="ntfct__wrppr">
                        <ul className="ntfct__cntnt">
                            {
                                notifications !== null
                                ?
                                notifications.data.map((item, key) => {
                                    return (
                                        <li key={key}>
                                            <span><FaRegBookmark />{item.name}</span>
                                            <p>{item.email}</p>
                                        </li>
                                    )
                                })
                                :
                                ""
                            }
                        </ul>
                    </div>
                </section>
            }
        </>
    );
}

export default Notification;