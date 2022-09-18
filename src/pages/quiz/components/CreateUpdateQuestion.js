import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../../services/api";

import UserData from "../../../UserData";

import MainTitle from "../../../components/title/MainTitle";
import AddAlternatives from "./AddAlternatives";
import Select from 'react-select'

import { FaOptinMonster, FaInfoCircle } from 'react-icons/fa';

/**
 * 
 * @returns 
 */

function CreateUpdateQuestion () {

    const {id} = useParams();
    const {contentid} = useParams();

    let navigate = useNavigate();

    const { userDataValues } = useContext( UserData );
    const [ typeUser, setTypeUser ] = useState( null );
    const [ quizEditData, setQuizEditData ] = useState({
        data : [],
        error : ""
    });
    const [ category, setCategory ] = useState( null );
    const [ name, setName ] = useState( "" );
    const [ description, setDescription ] = useState( "" );
    const [ alternatives, setAlternatives ] = useState( "" );
    const [ correctAlternative, setCorrectAlternative ] = useState( null );
    const [ formSendSuccess, setFormSendSuccess ] = useState( "" );
    const categoryOptions = [
        { value: "tecnologia", label: "Tecnologia" },
        { value: "matematica", label: "Matemática" },
        { value: "fisica", label: "Física" },
        { value: "quimica", label: "Química" },
        { value: "filosofia", label: "Filosofia" },
        { value: "sociologia", label: "Sociologia" },
    ];

    function handleSelectCategory( data ) {
        setCategory( data );
    };
    const handleSubmit = function( event ) {
        event.preventDefault();
        
        if ( category !== null && name !== null && description !== null && alternatives.length > 1 && correctAlternative ) {
            console.log("send")
            api
                .post( "/new/question", {
                    category : category,
                    name : name,
                    description : description,
                    alternatives : alternatives
                })
                .then( () => setFormSendSuccess( true ))
                .catch( () => setFormSendSuccess( false ));
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

                    setQuizEditData({
                        ...quizEditData,
                        data: response.data
                    });
                }).catch( err => {
                    setQuizEditData({
                        ...quizEditData,
                        error: err
                    });
                });
        };
    }, []);

    useEffect(() => {

        if ( quizEditData.data !== undefined ) {
            setCategory( quizEditData.data.title );
            setName( quizEditData.data.title );
            setDescription( quizEditData.data.body );
            setAlternatives( quizEditData.data.body );
        };
    }, [ quizEditData ]);

    return (

        <section className="content">
            <div className="content__wrp">
                <MainTitle description="pergunta" descriptionUnder="Preencha o formulário abaixo" icon={<FaOptinMonster />} />
                <form className="content__frm" onSubmit={(e) => e.preventDefault()}>
                    <fieldset className="content__fldst">
                        <legend className="content__lgnd">Matéria *</legend>
                        <Select
                            name="filters"
                            className="content__slct"
                            placeholder="Selecione uma matéria"
                            value={category}
                            options={categoryOptions}
                            onChange={handleSelectCategory}
                        />
                    </fieldset>
                    <fieldset className="content__fldst">
                        <legend className="content__lgnd">Titulo da pergunta *</legend>
                        <input className="content__inpt" type="text" onChange={(e) => setName(e.target.value)} placeholder={name} value={name || ""} />
                    </fieldset>
                    <fieldset className="content__fldst">
                        <legend className="content__lgnd">Descrição da pergunta ( conteúdo ) *</legend>
                        <textarea className="content__inpt" type="text" onChange={(e) => setDescription(e.target.value)} placeholder={description} value={description || ""} />
                    </fieldset>
                    <AddAlternatives setAlternatives={setAlternatives} setCorrectAlternative={setCorrectAlternative} />
                    <fieldset className="content__fldst">
                        <input className="content__sbmt" value="Salvar pergunta" type="submit" onClick={handleSubmit} />
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

export default CreateUpdateQuestion;