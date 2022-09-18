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

function CreateUpdateTeacher () {

    const {id} = useParams();

    let navigate = useNavigate();

    const { userDataValues } = useContext( UserData );
    const [ typeUser, setTypeUser ] = useState( null );
    const [ teacherEditData, setTeacherEditData ] = useState({
        data : [],
        error : ""
    });
    const [ name, setName ] = useState( "" );
    const [ email, setEmail ] = useState( "" );
    const [ password, setPassword ] = useState( "" );
    const [ speciality, setSpeciality ] = useState( "" );
    const matterSpecialty = [
        { value: "x", label: "Algebra" },
        { value: "y", label: "Química" },
        { value: "z", label: "Física" }
    ];
    const [ formSendSuccess, setFormSendSuccess ] = useState( "" );

    const handleSubmit = function( event ) {
        event.preventDefault();

        if ( name !== null && email !== null && password !== null && speciality.length > 0 ) {
            console.log("send");

            axios.post( "/new/content", {
                name : name,
                email : email,
                password : password
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

                    setTeacherEditData({ 
                        ...teacherEditData,
                        data: response.data
                    });
                }).catch( err => {
                    setTeacherEditData({
                        ...teacherEditData,
                        error: err
                    });
                });
        };
    }, []);

    useEffect(() => {

        if ( teacherEditData.data !== undefined ) {
            setName( teacherEditData.data.title );
            setEmail( teacherEditData.data.title );
            setPassword(  teacherEditData.data.body);
        };
    }, [ teacherEditData ]);
 
    return (
        
        <section className="content">
            <div className="content__wrp">
                <MainTitle description="professor" descriptionUnder="Preencha o formulário abaixo" icon={<FaOptinMonster />} />
                <form className="content__frm" onSubmit={(e) => e.preventDefault()}>
                    <fieldset className="content__fldst">
                        <legend className="content__lgnd">Nome *</legend>
                        <input className="content__inpt" type="text" onChange={(e) => setName(e.target.value)} placeholder={name || "Digite o nome do professor"} value={name || ""} />
                    </fieldset>
                    <fieldset className="content__fldst content__fldst--hlf">
                        <legend className="content__lgnd">Email</legend>
                        <input className="content__inpt" type="text" onChange={(e) => setEmail(e.target.value)} placeholder={email || "Digite o e-mail do professor"} value={email || ""} />
                    </fieldset>
                    <fieldset className="content__fldst content__fldst--hlf">
                        <legend className="content__lgnd">Senha</legend>
                        <input className="content__inpt" type="text" onChange={(e) => setPassword(e.target.value)} placeholder={password || "Crie uma senha para o professor"} value={password || ""} />
                    </fieldset>
                    <fieldset className="content__fldst content__fldst--hlf">
                        <legend className="content__lgnd">Especialidade</legend>
                        <Select className="" options={matterSpecialty} onChange={(e) => setSpeciality(e.value)}/>
                    </fieldset>
                    <fieldset className="content__fldst">
                        <input className="content__sbmt" value="Salvar professor" type="submit" onClick={handleSubmit} />
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

export default CreateUpdateTeacher;