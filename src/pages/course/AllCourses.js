import React, { useContext, useState, useEffect } from "react";
import api from "../../services/api"
import UserData from "../../UserData";

import MainTitle from "../../components/title/MainTitle";
import MatterEditButtons from "../matter/components/MatterEditButtons";
import ConnectionFailed from "../../components/alert/ConnectionFailed";
import PageDescription from "../../components/alert/PageDescription";
import Emoji from 'a11y-react-emoji';
import { FaBookOpen } from 'react-icons/fa';

/**
 * 
 * @returns 
 */

function AllCourses () {

    let userStorage = JSON.parse(localStorage.getItem("user"));

    const { userDataValues } = useContext( UserData );
    const [ typeUser, setTypeUser ] = useState( null );
    const [ courses, setAllCourses ] = useState({
        data: [],
        error: ""
    });
    const [ inputSearch, setInputSearch ] = useState( "" );
    const [ searchResult, setSearchResult ] = useState({
        data : []
    });
    
    useEffect(() => {

        setTypeUser( userDataValues.typeUser );
    }, [ userDataValues ]);
    
    useEffect( () => {

        api
            .post( "/allCourses" )
            .then( response => {

                setAllCourses({ 
                    ...courses,
                    data: response.data
                });
            }).catch( err => {
                setAllCourses({
                    ...courses,
                    error: err
                });
            });

            console.log( AllCourses.data )
    }, []);

    const handleSearch = function( digit ) {
        setInputSearch( digit );

        let results = courses.data.filter( item => {
            return item.name.toLowerCase().includes( digit.toLowerCase() );
        });

        if ( results !== "" && results !== undefined ) {
            setSearchResult({
                ...searchResult,
                data : results
            });
        };
    };

    return (

        <>
            <section className="crs">
                <div className="emoji--title">
                    <Emoji className="emoji--navigation" symbol={"📚"} label="love" />
                    <MainTitle description="todos os cursos" descriptionUnder="Busque algum CURSO" isCarousel={false} />
                </div>
                <div className="crs__wrpprAll">
                    <div className="crs__allCrs">
                        <fieldset className="crs__srch">
                            <legend className="prfl__inf__itm">
                                <FaBookOpen />
                                Cursos
                            </legend>
                            <input className="crs__srch__inpt" placeholder="Digite algum curso" onChange={(e) => handleSearch(e.target.value)} />
                        </fieldset>
                        <PageDescription classText="pageAlert" text="" />
                        {
                            searchResult.data !== null && (
                                searchResult.data.map((item, key) => {
                                    return (
                                        <div className="crs__itm" key={key}>
                                            <img src="https://imagepng.org/wp-content/uploads/2019/05/dinheiro-icone.png" className="crs__itm__img" alt="" />
                                            <span className="crs__itm__ttl">
                                                {item.name}
                                            </span>
                                        </div>
                                    )
                                })
                            )
                        }
                        {
                            courses.data !== null && inputSearch === "" && (
                                courses.data.map((item, key) => {
                                    return (
                                        <div className="crs__itm" key={key}>
                                            <img src="https://imagepng.org/wp-content/uploads/2019/05/dinheiro-icone.png" className="crs__itm__img" alt="" />
                                            <span className="crs__itm__ttl">
                                                {item.name}
                                            </span>
                                            {
                                                userStorage.occupation !== "student"
                                                ?
                                                <MatterEditButtons classParent="crs__itm__edt" classAnchor="crs__itm__edt__anchr" matter={"posts/1"} />
                                                :
                                                ""
                                            }
                                        </div>
                                    )
                                })
                            )
                        }
                        {
                            courses.error && (
                                <ConnectionFailed />
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default AllCourses;