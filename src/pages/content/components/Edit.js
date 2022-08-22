import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Select from 'react-select'
import ImageUploading from 'react-images-uploading';

import UserData from "../../../UserData";

import MainTitle from "../../../components/title/MainTitle";

import { FaOptinMonster, FaInfoCircle, FaFileImport, FaUnderline } from 'react-icons/fa';

/**
 * 
 * @returns 
 */

function Edit () {

    const {id} = useParams();
    const {contentid} = useParams();

    let navigate = useNavigate();

    const { userDataValues } = useContext( UserData );
    const [ typeUser, setTypeUser ] = useState( null );

    const [matterEditData, setMatterEditData] = useState({
        data : [],
        error : ""
    });

    const [category, setCategory] = useState( null );
    const [name, setName] = useState( "" );
    const [url, setUrl] = useState( "" ); 
    const [quizUrl, setQuizUrl] = useState( "" ); 
    const [content, setContent] = useState( "" );
    const [nextContentUrl, setNextContentUrl] = useState( "" );
    const [tags, setTags] = useState( "" );
    const [hightlighImage, setHightlighImage] = useState( "" );
    const [images, setImages] = useState([]);
    const [formSendSuccess, setFormSendSuccess] = useState( "" );

    const categoryOptions = [
        { value: "tecnologia", label: "Tecnologia" },
        { value: "matematica", label: "Matemática" },
        { value: "fisica", label: "Física" },
        { value: "quimica", label: "Química" },
        { value: "filosofia", label: "Filosofia" },
        { value: "sociologia", label: "Sociologia" },
    ];
    const subjectOptions = [
        { value: "tecnologia", label: "Tecnologia" },
        { value: "matematica", label: "Matemática" },
        { value: "fisica", label: "Física" },
        { value: "quimica", label: "Química" },
        { value: "filosofia", label: "Filosofia" },
        { value: "sociologia", label: "Sociologia" },
    ];

    const onChange = function( imageList, addUpdateIndex ) {
        // data for submit
        console.log( imageList, addUpdateIndex );
        setHightlighImage( imageList );
    };

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
                <MainTitle description="Conteúdo" descriptionUnder="Preencha o formulário abaixo" icon={<FaOptinMonster />} />
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
                    <fieldset className="content__fldst content__fldst--hlf">
                        <legend className="content__lgnd">Nome da matéria *</legend>
                        <input className="content__inpt" type="text" onChange={(e) => setName(e.target.value)} placeholder={name} value={name || ""} />
                    </fieldset>
                    <fieldset className="content__fldst content__fldst--hlf">
                        <legend className="content__lgnd">Url da matéria *</legend>
                        <input className="content__inpt" type="text" onChange={(e) => setUrl(e.target.value)} placeholder={url} value={url || ""} />
                    </fieldset>
                    <fieldset className="content__fldst content__fldst--hlf">
                        <legend className="content__lgnd">Url da atividade *</legend>
                        <input className="content__inpt" type="text" onChange={(e) => setQuizUrl(e.target.value)} placeholder={quizUrl} value={quizUrl || ""} />
                    </fieldset>
                    <fieldset className="content__fldst content__fldst--hlf">
                        <legend className="content__lgnd">Url do próximo conteúdo ( Opcional )</legend>
                        <input className="content__inpt" type="text" onChange={(e) => setNextContentUrl(e.target.value)} placeholder={nextContentUrl} value={nextContentUrl || ""} />
                    </fieldset>
                    <fieldset className="content__fldst">
                        <legend className="content__lgnd">Escopo do artigo *</legend>
                        <textarea className="content__inpt" onChange={(e) => setContent(e.target.value)} rows="20" cols="20" type="text" placeholder={content} value={content || ""} />
                    </fieldset>
                    <fieldset className="content__fldst">
                        <legend className="content__lgnd">Tags ( Opcional )</legend>
                        <Select
                            name="filters"
                            className="content__slct"
                            placeholder="Selecione tags"
                            value={tags}
                            options={subjectOptions}
                            onChange={handleSelectSubject}
                            isSearchable={true}
                            isMulti
                        />
                    </fieldset>
                    <fieldset className="content__fldst">
                        <legend className="content__lgnd">Imagem de destaque *</legend>
                        <ImageUploading
                            multiple
                            value={images}
                            onChange={onChange}
                            maxNumber={1}
                            dataURLKey="data_url"
                            acceptType={["png"]}
                        >
                            {
                                ({
                                    imageList,
                                    onImageUpload,
                                    onImageUpdate,
                                    onImageRemove,
                                    isDragging,
                                    dragProps
                                }) => (
                                    <div className="prfl__inf--upld__wrppr">
                                        <button
                                            style={isDragging ? { color: "red" } : null}
                                            onClick={onImageUpload}
                                            {...dragProps}
                                            className="content__upld__bttn"
                                        >
                                            <FaFileImport />
                                            Clique, ou arraste a imagem
                                        </button>
                                        {
                                            imageList.map( ( image, index ) => (
                                                <div key={index} className="prfl__inf--upld__img">
                                                    <img src={image.data_url ? image.data_url : "https://static.vecteezy.com/ti/vetor-gratis/p1/2275847-avatar-masculino-perfil-icone-de-homem-caucasiano-sorridente-vetor.jpg"} alt="" width="100" />
                                                    <div className="image-item__btn-wrapper">
                                                        <button className="content__upld__bttnDown" onClick={() => onImageUpdate( index )}>
                                                            Atualizar
                                                        </button>
                                                        <button className="content__upld__bttn" onClick={() => onImageRemove( index )}>
                                                            Remover imagem
                                                        </button>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                            }
                        </ImageUploading>
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

export default Edit;