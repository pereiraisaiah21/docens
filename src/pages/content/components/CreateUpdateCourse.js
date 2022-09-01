import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Select from 'react-select'
import ImageUploading from 'react-images-uploading';

import UserData from "../../../UserData";

import MainTitle from "../../../components/title/MainTitle";
import MatterEditor from "../../matter/components/MatterEditor";

import { FaOptinMonster, FaInfoCircle, FaFileImport, FaUnderline } from 'react-icons/fa';

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

    const [matterEditData, setMatterEditData] = useState({
        data : [],
        error : ""
    });

    const [name, setName] = useState( "" );
    const [url, setUrl] = useState( "" ); 
    const [content, setContent] = useState( "" );

    function handleSelectCategory( data ) {
        setCategory( data );
    }
    function handleSelectSubject( data ) {
        setTags( data );
    }

    const handleSubmit = function(event) {
        event.preventDefault();

        if ( category !== null && name !== null && url !== null && content !== null && quizUrl !== null && tags !== null && hightlighImage !== null ) {
            console.log("send");

            axios.post( "/new/content", {
                category : category,
                name : name,
                content : content,
                quizUrl : quizUrl,
                tags : tags,
                hightlighImage : hightlighImage
            })
            .then( response => {
                setFormSendSuccess( true );
            })
            .catch( err =>  {
                setFormSendSuccess( false );
            });
        }
    }

    useEffect(() => {
        setTypeUser( userDataValues.typeUser )

        if ( typeUser === "default" ) {
            return navigate("/");
        }
    }, [userDataValues]);

    useEffect(() => {

        if ( id && contentid ) {
            axios.get( `https://jsonplaceholder.typicode.com/${id}/${contentid}` )
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
        }
    }, []);

    useEffect(() => {
        if ( matterEditData.data !== undefined ) {
            setName(matterEditData.data.title);
            setQuizUrl(matterEditData.data.title);
            setTags(matterEditData.data.body);
            setContent(matterEditData.data.body);
            setUrl(matterEditData.data.title);
            setNextContentUrl(matterEditData.data.title);
        }
    }, [ matterEditData ]);
 
    return (
        
        <section className="content">
            <div className="content__wrp">
                <MainTitle description="conteúdo" descriptionUnder="Preencha o formulário abaixo" icon={<FaOptinMonster />} />
                <form className="content__frm" onSubmit={(e) => e.preventDefault()}>
                   
                    <fieldset className="content__fldst content__fldst--hlf">
                        <legend className="content__lgnd">Nome do curso *</legend>
                        <input className="content__inpt" type="text" onChange={(e) => setName(e.target.value)} placeholder={name} value={name || ""} />
                    </fieldset>
                    <fieldset className="content__fldst content__fldst--hlf">
                        <legend className="content__lgnd">Url do curso *</legend>
                        <input className="content__inpt" type="text" onChange={(e) => setUrl(e.target.value)} placeholder={url} value={url || ""} />
                    </fieldset>
                    <fieldset className="content__fldst content__fldst--hlf">
                        <legend className="content__lgnd">Descrição</legend>
                        <input className="content__inpt" type="text" onChange={(e) => setQuizUrl(e.target.value)} placeholder={quizUrl} value={quizUrl || ""} />
                    </fieldset>
                    <fieldset className="content__fldst">
                        <input className="content__sbmt" type="submit" onClick={handleSubmit} />
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