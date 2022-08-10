// Libs
import React, { useState, useEffect } from "react";
import axios from "axios";

import { FaRegCaretSquareDown } from 'react-icons/fa';

import "./Help.scss";


/**
 * 
 * @returns 
 */

function Help () {

    const [faq, setFaq] = useState({data : [], error : ""});
    const [faqCategories, setFaqCategories] = useState({data : [], error : ""});

    async function getFaq (faqCategory = "") {

        axios.get(`https://jsonplaceholder.typicode.com/users/`)
        .then((response) => {

            if (faqCategory === "") {
                setFaq({ ...faq, data: response.data});
            } else {
                setFaqCategories({ ...faqCategories, data: [response.data]});
            };
        }).catch(err => {
            if (faqCategory === "") {
                setFaq({ ...faq, error: err });
            } else {
                setFaqCategories({ ...faqCategories, error: err });
            };
        });
    };
    const handleQuestionClick = function (e) {
        if (e.target.nextSibling.classList.contains("open")) {
            e.target.nextSibling.classList.remove("open");
        } else {
            e.target.nextSibling.classList.add("open");
        };
    };

    useEffect(() => {
        getFaq();
        getFaq("1");
    }, [getFaq]);

    return (
        <div className="Help">
            <nav className="Help__nav">
                <ul className="Help__nav__list">
                    <li className="Help__nav__title">
                        CATEGORIAS
                    </li>
                    {
                        faqCategories.data !== null
                        ?
                        faqCategories.data.map((item, key) => {
                            return (
                                <li className="Help__nav__item" key={key}>
                                    <a className="Help__nav__anchor" href="/" title={item.name}>{item.email}</a>
                                </li>
                            )
                        })
                        :
                        ""
                    }
                </ul>
            </nav>
           <section className="Help__content">
                <h4>Dúvidas frequentes</h4>
                <ul className="Help__question">
                    {
                        faq.data !== null
                        ?
                        faq.data.map((item, key) => {
                            return (
                                <li className="Help__question__item" key={key} onClick={handleQuestionClick}>
                                    <p className="Help__question__doubt">{item.name} <FaRegCaretSquareDown />
                                    </p>
                                    <p className="Help__question__answer">{item.address.city}</p>
                                </li>
                            )
                        })
                        :
                        ""
                    }
                </ul>
           </section>
        </div>
    );
}

export default Help;