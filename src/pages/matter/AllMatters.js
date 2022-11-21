import React, { useContext, useState, useEffect } from "react";
import api from "../../services/api";
import UserData from "../../UserData";

import MainTitle from "../../components/title/MainTitle";
import MatterEditButtons from "./components/MatterEditButtons";
import ConnectionFailed from "../../components/alert/ConnectionFailed";
import Emoji from 'a11y-react-emoji';
import { FaBookOpen } from 'react-icons/fa';

/**
 * 
 * @returns 
 */

function AllMatters () {

    let isADM = JSON.parse(localStorage.getItem("adm"));
    const { userDataValues } = useContext( UserData );

    const [ typeUser, setTypeUser ] = useState( null );
    const [ matters, setAllMatters ] = useState({
        data: [],
        error: ""
    });
    const [ inputSearch, setInputSearch ] = useState( "" );
    const [ searchResult, setSearchResult ] = useState({
        data : []
    });
    
    useEffect(() => {

        setTypeUser( userDataValues.typeUser )
    }, [ userDataValues ]);
    
    useEffect( () => {

        api
            .get( "/users" )
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
            return item.name.toLowerCase().includes( digit.toLowerCase() );
        });

        if ( results !== "" && results !== undefined ) {
            setSearchResult({
                ...searchResult,
                data : results
            });
        };
    };

    const dataPlaceholder = [
        {
            name: "Matéria 01",
            url: "materias/materia-01"
        },
        {
            name: "Matéria 02",
            url: "materias/materia-02"
        },
        {
            name: "Matéria 03",
            url: "materias/materia-03"
        },
        {
            name: "Matéria 04",
            url: "materias/materia-04"
        },
    ];

    return (

        <>
            <section className="mttr">
                <div className="emoji--title">
                    <Emoji className="emoji--navigation" symbol={"📕"} label="love" />
                    <MainTitle description="todas as matérias" descriptionUnder="Busque alguma matéria" isCarousel={false} />
                </div>
                <div className="mttr__wrpprAll">
                    <div className="mttr__allMttrs">
                        <div className="mttr__srch">
                        </div>
                        <fieldset className="crs__srch">
                            <legend className="prfl__inf__itm">
                                <FaBookOpen />
                                Matérias
                                <input className="mttr__srch__inpt" placeholder="Digite alguma matéria" onChange={(e) => handleSearch(e.target.value)} />
                            </legend>
                        </fieldset>

                        {
                            searchResult.data !== null && (
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
                            )
                        }
                        {
                            dataPlaceholder && (
                                dataPlaceholder.map((item, key) => {
                                    return (
                                        <a className="mttr__itm" key={key} href={item.url} title={item.name}>
                                            <Emoji className="crs__itm__img" symbol={"📓"} label="love" />
                                            <span className="mttr__itm__ttl">
                                                {item.name}
                                            </span>
                                            {
                                                isADM && (
                                                    <MatterEditButtons classParent="mttr__itm__edt" classAnchor="mttr__itm__edt__anchr" matter={"posts/1"} />
                                                )
                                            }
                                        </a>
                                    )
                                })
                            )
                        }
                        {
                            matters.error && (
                                <ConnectionFailed />
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default AllMatters;