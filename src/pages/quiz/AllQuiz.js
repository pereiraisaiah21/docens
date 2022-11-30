import React, { useContext, useState, useEffect } from "react";
import api from "../../services/api";
import UserData from "../../UserData";

import MainTitle from "../../components/title/MainTitle";
import MatterEditButtons from "./components/QuestionEditButtons";
import Emoji from 'a11y-react-emoji';
import { FaNewspaper, FaBookOpen } from 'react-icons/fa';

/**
 *
 * @returns
 */

function AllQuiz () {

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
            name: "Quiz 01",
            url: "quiz/logica/materia-01"
        },
        {
            name: "Quiz 02",
            url: "materias/logica/materia-02"
        },
        {
            name: "Quiz 03",
            url: "materias/logica/materia-03"
        },
        {
            name: "Quiz 04",
            url: "materias/logica/materia-04"
        },
    ];

    useEffect(() => {

        setTypeUser( userDataValues.typeUser );
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

    return (

        <>
            <section className="mttr">
                <div className="emoji--title">
                    <Emoji className="emoji--navigation" symbol={"📚"} label="love" />
                    <MainTitle description="todos os quizes" descriptionUnder="Busque algum QUIZ" isCarousel={false} />
                </div>
                <div className="mttr__wrpprAll">
                    <div className="mttr__allMttrs">
                        <fieldset className="crs__srch">
                            <legend className="prfl__inf__itm">
                                <FaBookOpen />
                                Quiz
                                <input className="mttr__srch__inpt" placeholder="Busque algum quiz" onChange={(e) => handleSearch(e.target.value)} />
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
                            // matters.data !== null && inputSearch === "" && (
                            dataPlaceholder && (
                                dataPlaceholder.map((item, key) => {
                                    return (
                                        <a className="mttr__itm" key={key} href={item.url} title={item.name}>
                                            <Emoji className="crs__itm__img" symbol={"🪖"} label="love" />
                                            {/* <img src="https://imagepng.org/wp-content/uploads/2019/05/dinheiro-icone.png" className="mttr__itm__img" alt="" /> */}
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
                                        </a>
                                    )
                                })
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default AllQuiz;
