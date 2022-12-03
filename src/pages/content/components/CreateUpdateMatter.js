import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../../services/api";
import UserData from "../../../UserData";
import Select from 'react-select'

import { FaPencilAlt, FaInfoCircle } from 'react-icons/fa';

/**
 *
 * @returns
 */

function CreateUpdateMatter () {

    const {id} = useParams();

    let navigate = useNavigate();

    const { userDataValues } = useContext( UserData );
    const [ typeUser, setTypeUser ] = useState( null );
    const [ matterEditData, setMatterEditData ] = useState({
        data : [],
        error : ""
    });
    const [ name, setName ] = useState( "" );
    const [ url, setUrl ] = useState( "" );
    const [ description, setDescription ] = useState( "" );
    const [subject, setSubject] = useState( null );
    const [ formSendSuccess, setFormSendSuccess ] = useState( "" );
    const subjectOptions = [
        { value: "materia", label: "Materias" },
        { value: "pergunta", label: "Quiz" },
        { value: "feedback", label: "Feedback" },
        { value: "outro", label: "Outro" }
    ];

    const handleSubmit = function( event ) {
        event.preventDefault();

        if ( name !== null && url !== null && description !== null ) {
            console.log("send");

            api
                .post( "/new/content", {
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

        if ( id ) {
            api
                .get( `/${id}` )
                .then( response => {
                    setMatterEditData({
                        ...matterEditData,
                        data: response.data
                    });
                }).catch( err => {
                    setMatterEditData({
                        ...matterEditData,
                        error: err
                    });
                });
        };
    }, []);

    useEffect(() => {

        if ( matterEditData.data !== undefined ) {
            setName( matterEditData.data.title );
            setUrl( matterEditData.data.title );
            setDescription(  matterEditData.data.body );
        };
    }, [ matterEditData ]);

    return (

        <section className="content">
            <div className="content__wrp">
                <form className="content__frm" onSubmit={(e) => e.preventDefault()}>
                    <fieldset className="content__fldst">
                        <legend className="content__lgnd"><FaPencilAlt />Curso *</legend>
                        <Select
                            className="cntct__slct"
                            options={subjectOptions}
                            onChange={(e) => setSubject(e.value)}
                            placeholder="Selecione um curso"
                        />
                    </fieldset>
                    <fieldset className="content__fldst content__fldst--hlf">
                        <legend className="content__lgnd"><FaPencilAlt />Nome da matéria *</legend>
                        <input className="content__inpt" type="text" onChange={(e) => setName(e.target.value)} placeholder={name || "Digite o nome da matéria"} value={name || ""} />
                    </fieldset>
                    <fieldset className="content__fldst content__fldst--hlf">
                        <legend className="content__lgnd"><FaPencilAlt />Url da matéria *</legend>
                        <input className="content__inpt" type="text" onChange={(e) => setUrl(e.target.value)} placeholder={url || "Digite a URL da matéria"} value={url || ""} />
                    </fieldset>
                    <fieldset className="content__fldst">
                        <legend className="content__lgnd"><FaPencilAlt />Descrição</legend>
                        <textarea className="content__inpt" type="text" onChange={(e) => setDescription(e.target.value)} placeholder={description || "Digite a descrição da matéria"} value={description || ""} rows="4" cols="50"></textarea>
                    </fieldset>
                    <fieldset className="content__fldst">
                        <input className="content__sbmt" value="Salvar matéria" type="submit" onClick={handleSubmit} />
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
};

export default CreateUpdateMatter;
