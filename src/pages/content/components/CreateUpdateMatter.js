import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../../services/api";
import UserData from "../../../UserData";

import MainTitle from "../../../components/title/MainTitle";
import { FaOptinMonster, FaInfoCircle } from 'react-icons/fa';
import Emoji from 'a11y-react-emoji';

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
    const [ formSendSuccess, setFormSendSuccess ] = useState( "" );

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
                <div className="emoji--title">
                    <Emoji className="emoji--navigation" symbol={"📃"} label="love" />
                    <MainTitle description="matéria" descriptionUnder="preencha o formulário abaixo" isCarousel={false} />
                </div>
                <form className="content__frm" onSubmit={(e) => e.preventDefault()}>
                    <fieldset className="content__fldst content__fldst--hlf">
                        <legend className="content__lgnd">Nome da matéria *</legend>
                        <input className="content__inpt" type="text" onChange={(e) => setName(e.target.value)} placeholder={name || "Digite o nome da matéria"} value={name || ""} />
                    </fieldset>
                    <fieldset className="content__fldst content__fldst--hlf">
                        <legend className="content__lgnd">Url da matéria *</legend>
                        <input className="content__inpt" type="text" onChange={(e) => setUrl(e.target.value)} placeholder={url || "Digite a URL da matéria"} value={url || ""} />
                    </fieldset>
                    <fieldset className="content__fldst content__fldst--hlf">
                        <legend className="content__lgnd">Descrição</legend>
                        <input className="content__inpt" type="text" onChange={(e) => setDescription(e.target.value)} placeholder={description || "Digite a descrição da matéria"} value={description || ""} />
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
}

export default CreateUpdateMatter;