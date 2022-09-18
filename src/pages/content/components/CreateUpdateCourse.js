import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../../../services/api"
import Select from 'react-select'

import UserData from "../../../UserData";

import MainTitle from "../../../components/title/MainTitle";

import { FaOptinMonster, FaInfoCircle } from 'react-icons/fa';

/**
 * 
 * @returns 
 */

function CreateUpdateCourse () {

    const {id} = useParams();
    const {contentid} = useParams();

    let navigate = useNavigate();

    const { userDataValues } = useContext( UserData );
    const [ typeUser, setTypeUser ] = useState( null );
    const [courseEditData, setCourseEditData] = useState({
        data : [],
        error : ""
    });
    const [ name, setName ] = useState( "" );
    const [ url, setUrl ] = useState( "" ); 
    const [ description, setDescription ] = useState( "" );
    const [ formSendSuccess, setFormSendSuccess ] = useState( "" );

    const handleSubmit = function( event ) {
        event.preventDefault();

        if ( name !== null && url !== null && description !== null ) {
            console.log("send");

            axios.post( "/new/content", {
                name : name,
                url : url,
                description : description
            })
            .then( response => {

                setFormSendSuccess( true );
            })
            .catch( err =>  {
                setFormSendSuccess( false );
            });
        };
    };

    useEffect(() => {

        setTypeUser( userDataValues.typeUser );

        // if ( typeUser === "default" ) {
        //     return navigate("/");
        // }
    }, [ userDataValues ]);

    useEffect(() => {

        if ( id && contentid ) {
            api
                .get( `/${id}/${contentid}` )
                .then( response => {

                    setCourseEditData({ 
                        ...courseEditData,
                        data: response.data
                    });
                }).catch( err => {
                    setCourseEditData({
                        ...courseEditData,
                        error: err
                    });
                });
        };
    }, []);

    useEffect(() => {

        if ( courseEditData.data !== undefined ) {
            setName( courseEditData.data.title );
            setUrl( courseEditData.data.title );
            setDescription(  courseEditData.data.body);
        };
    }, [ courseEditData ]);
 
    return (
        
        <section className="content">
            <div className="content__wrp">
                <MainTitle description="curso" descriptionUnder="Preencha o formulário abaixo" icon={<FaOptinMonster />} />
                <form className="content__frm" onSubmit={(e) => e.preventDefault()}>
                    <fieldset className="content__fldst content__fldst--hlf">
                        <legend className="content__lgnd">Nome do curso *</legend>
                        <input className="content__inpt" type="text" onChange={(e) => setName(e.target.value)} placeholder={name || "Digite o nome do curso"} value={name || ""} />
                    </fieldset>
                    <fieldset className="content__fldst content__fldst--hlf">
                        <legend className="content__lgnd">Url do curso *</legend>
                        <input className="content__inpt" type="text" onChange={(e) => setUrl(e.target.value)} placeholder={url || "Digite a URL do curso"} value={url || ""} />
                    </fieldset>
                    <fieldset className="content__fldst content__fldst--hlf">
                        <legend className="content__lgnd">Descrição</legend>
                        <input className="content__inpt" type="text" onChange={(e) => setDescription(e.target.value)} placeholder={description || "Digite a descrição do curso"} value={description || ""} />
                    </fieldset>
                    <fieldset className="content__fldst">
                        <input className="content__sbmt" value="Salvar curso" type="submit" onClick={handleSubmit} />
                    </fieldset>
                </form>
                <span className="content__rtrn">
                    <FaInfoCircle />
                    {
                        formSendSuccess !== null && formSendSuccess
                        ?
                        "Artigo cadastrado com sucesso."
                        :
                        (!formSendSuccess
                        ?
                        "Estamos com problemas para salvar seu artigo. Tente novamente mais tarde."
                        :
                        "")
                    }
                </span>
            </div>
        </section>
    );
}

export default CreateUpdateCourse;