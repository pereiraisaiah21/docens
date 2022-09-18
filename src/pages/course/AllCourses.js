import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api"
import UserData from "../../UserData";

import MainTitle from "../../components/title/MainTitle";
import MatterEditButtons from "../matter/components/MatterEditButtons";
import { FaNewspaper } from 'react-icons/fa';
import ConnectionFailed from "../../components/alert/ConnectionFailed";

/**
 * 
 * @returns 
 */

function AllCourses () {

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
            .get( "/users" )
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
                <MainTitle description="todos os cursos" descriptionUnder="Busque alguma CURSO" icon={<FaNewspaper />} />
                <div className="crs__wrpprAll">
                    <div className="crs__allCrs">
                        <div className="crs__srch">
                            <input className="crs__srch__inpt" placeholder="Busque algum curso" onChange={(e) => handleSearch(e.target.value)} />
                        </div>
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
                                                typeUser !== "default"
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