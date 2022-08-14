import React, { useState, useEffect } from "react";
import axios from "axios";

import { FaCaretDown } from 'react-icons/fa';
import { TailSpin } from "react-loader-spinner";

import "./Help.scss";

/**
 * 
 * @returns 
 */

function Help () {

    const [loader, setLoader] = useState( true );
    const [faq, setFaq] = useState({
        data : [],
        error : ""
    });

    const handleQuestionClick = function( e ) {
        if ( e.target.nextSibling.classList.contains( "open" ) ) {
            e.target.nextSibling.classList.remove( "open" );
        } else {
            e.target.nextSibling.classList.add( "open" );
        };
    };

    useEffect(() => {
        axios.get( `https://jsonplaceholder.typicode.com/users/` )
        .then( response => {

            setFaq({ 
                ...faq,
                data: response.data
            });
            setTimeout( () => 
                setLoader(false), 
            2000);
        }).catch( err => {
            setFaq({ 
                ...faq,
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
                <div className="Help">
                    <section className="Help__content">
                        <h4>Dúvidas frequentes</h4>
                        <ul className="Help__question">
                            {
                                faq.data !== null
                                ?
                                faq.data.map( ( item, key ) => {
                                    return (
                                        <li className="Help__question__item" key={key} onClick={handleQuestionClick}>
                                            <p className="Help__question__doubt">
                                                {item.name}
                                                <FaCaretDown />
                                            </p>
                                            <p className="Help__question__answer">
                                                {item.address.city}
                                            </p>
                                        </li>
                                    )
                                })
                                :
                                ""
                            }
                        </ul>
                    </section>
                </div>
            }
        </>
    );
}

export default Help;