import React, { useState, useEffect } from "react";
import api from "../../services/api";

import MainTitle from "../../components/title/MainTitle";
import { FaOptinMonster } from 'react-icons/fa';
import { FaCaretDown } from 'react-icons/fa';
import { TailSpin } from "react-loader-spinner";

/**
 * 
 * @returns 
 */

function Help () {

    const [ loader, setLoader ] = useState( true );
    const [ faq, setFaq ] = useState({
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

        api
            .get( "/standard-help" )
            .then( response => {

                setFaq({ 
                    ...faq,
                    data: response.data
                });
                setTimeout( () => 
                    setLoader(false), 
                500);
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
                    <TailSpin color="rgba(255, 255, 255)" />
                </div>
                :
                <section className="Help">
                    <MainTitle description="dúvidas frequentes" descriptionUnder="" icon={<FaOptinMonster />} />
                    <div className="Help__wrp">
                        <section className="Help__content">
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
                        <section className="Help__rdrct">
                            <p className="Help__rdrct__txt Help__rdrct__txt--highlight">
                                Continua com dúvida ?
                            </p>
                            <p className="Help__rdrct__txt">
                                Envie uma mensagem <a className="Help__rdrct__anchr" href="/contato" title="Ir para página de contato">Clique aqui.</a>
                            </p>
                        </section>
                    </div>
                </section>
            }
        </>
    );
}

export default Help;