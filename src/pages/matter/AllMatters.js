import React, { useState, useEffect } from "react";
import axios from "axios";

import { FaNewspaper } from 'react-icons/fa';

import "./Matter.scss"

/**
 * 
 * @returns 
 */

function AllMatters () {

    const [matters, setAllMatters] = useState({
        data: [],
        error: ""
    });
    const [inputSearch, setInputSearch] = useState("");
    const [searchResult, setSearchResult] = useState({
        data : []
    });

    useEffect( () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/`)
        .then((response) => {

            setAllMatters({ ...matters, data: response.data});
        }).catch(err => {
            setAllMatters({ ...matters, error: err });
        });
    }, []);

    const handleSearch = function (digit) {
        setInputSearch(digit);

        let results = matters.data.filter(item => {
            return item.name.includes(digit)
        });

        if(results !== "" && results !== undefined) {
            setSearchResult({...searchResult, data : results})
        }
    }


    return (
        <section className="mttr">
            <div className="mttr__wrppr">
            <div className="actns__dscrptn">
                    <span className="actns__dscrptn__icn">
                        <FaNewspaper />
                    </span>
                    <span className="actns__dscrptn__ttl actns__dscrptn__ttl--dscrptn">
                        Todas matérias
                        <p>
                            Materias disponíveis
                        </p>
                    </span>
                </div>
                <div className="mttr__allMttrs">
                    <div className="mttr__srch">
                        <input className="mttr__srch__inpt" placeholder="Busque alguma matéria" onChange={(e) => handleSearch(e.target.value)}/>
                    </div>
                    {
                        searchResult.data !== null 
                        ?
                        searchResult.data.map((item, key) => {
                            return (
                                <div className="mttr__itm" key={key}>
                                    <img src="https://imagepng.org/wp-content/uploads/2019/05/dinheiro-icone.png" className="mttr__itm__img" alt="" />
                                    <span className="mttr__itm__ttl">
                                        {item.name}
                                    </span>
                                </div>
                            )
                        })
                        :
                        ""
                    }
                    {
                        matters.data !== null && inputSearch === ""
                        ?
                        matters.data.map((item, key) => {
                            return (
                                <div className="mttr__itm" key={key}>
                                    <img src="https://imagepng.org/wp-content/uploads/2019/05/dinheiro-icone.png" className="mttr__itm__img" alt="" />
                                    <span className="mttr__itm__ttl">
                                        {item.name}
                                    </span>
                                </div>
                            )
                        })
                        :
                        ""
                    }
                </div>
            </div>
           
        </section>
    );
}

export default AllMatters;