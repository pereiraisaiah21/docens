import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import UserData from "../../UserData";

import MainTitle from "../../components/title/MainTitle";
import MatterEditButtons from "./components/MatterEditButtons";
import { FaNewspaper } from 'react-icons/fa';

/**
 * 
 * @returns 
 */

function AllMatters () {

    const { userDataValues } = useContext( UserData );
    const [ typeUser, setTypeUser ] = useState( null );

    
    const [matters, setAllMatters] = useState({
        data: [],
        error: ""
    });
    const [inputSearch, setInputSearch] = useState("");
    const [searchResult, setSearchResult] = useState({
        data : []
    });
    
    useEffect(() => {
        setTypeUser( userDataValues.typeUser )
    }, [userDataValues]);
    
    useEffect( () => {
        axios.get( `https://jsonplaceholder.typicode.com/users/` )
        .then( response => {

            setAllMatters({ 
                ...matters,
                data: response.data
            });
        }).catch( err => {
            setAllMatters({
                ...matters,
                error: err
            });
        });
    }, []);

    const handleSearch = function( digit ) {
        setInputSearch( digit );

        let results = matters.data.filter( item => {
            return item.name.toLowerCase().includes( digit.toLowerCase() )
        });

        if( results !== "" && results !== undefined ) {
            setSearchResult({
                ...searchResult,
                data : results
            })
        };
    };

    return (
        <>
            <section className="mttr">
                <MainTitle description="todas as matérias" descriptionUnder="Busque alguma matéria" icon={<FaNewspaper />} />
                <div className="mttr__wrpprAll">
                    <div className="mttr__allMttrs">
                        <div className="mttr__srch">
                            <input className="mttr__srch__inpt" placeholder="Busque alguma matéria" onChange={(e) => handleSearch(e.target.value)} />
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
                                        {
                                            typeUser !== "default"
                                            ?
                                            <MatterEditButtons classParent="mttr__itm__edt" classAnchor="mttr__itm__edt__anchr" matter={"posts/1"} />
                                            :
                                            ""
                                        }
                                    </div>
                                )
                            })
                            :
                            ""
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default AllMatters;