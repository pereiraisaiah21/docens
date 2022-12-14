import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../../services/api";
import UserData from "../../../UserData";
import Select from 'react-select'
import ImageUploading from 'react-images-uploading';

import MatterEditor from "../../matter/components/MatterEditor";
import { FaInfoCircle, FaFileImport, FaPencilAlt } from 'react-icons/fa';
import { articleSave } from "../../../emulation";

/**
 *
 * @returns
 */

function CreateUpdateArticle () {

    const {id} = useParams();
    const {contentid} = useParams();

    let navigate = useNavigate();

    // Presentation
    let matterStorage = JSON.parse( localStorage.getItem( "matter" ) );

    const { userDataValues } = useContext( UserData );
    const [ typeUser, setTypeUser ] = useState( null );
    const [matterEditData, setMatterEditData] = useState({
        data : [],
        error : ""
    });
    const [category, setCategory] = useState( null );
    const [name, setName] = useState( "" );
    const [subName, setSubName] = useState( "" );
    const [url, setUrl] = useState( "" );
    // const [quizUrl, setQuizUrl] = useState( "" );
    const [content, setContent] = useState( "" );
    const [nextContentUrl, setNextContentUrl] = useState( "" );
    const [tags, setTags] = useState( "" );
    const [hightlighImage, setHightlighImage] = useState( "" );
    const [images, setImages] = useState([]);
    const [formSendSuccess, setFormSendSuccess] = useState( "" );
    const categoryOptions = [{value: matterStorage.name, label: matterStorage.name}] || [
        { value: "tecnologia", label: "Tecnologia" },
        { value: "matematica", label: "Matemática" },
        { value: "fisica", label: "Física" },
        { value: "quimica", label: "Química" },
        { value: "filosofia", label: "Filosofia" },
        { value: "sociologia", label: "Sociologia" },
    ];
    const subjectOptions = [
        { value: "curiosidade", label: "Curiosidade" },
        { value: "hadware", label: "Hardware" },
        { value: "software", label: "Software" },
        { value: "teoria", label: "Teória" },
        { value: "pratica", label: "Prática" },
        { value: "programacao", label: "Programação" },
        { value: "redes", label: "Redes" },
    ];

    const onChange = function( imageList, addUpdateIndex ) {
        console.log( imageList, addUpdateIndex );
        setHightlighImage( imageList );
    };
    function handleSelectCategory( data ) {
        setCategory( data );
    };
    function handleSelectSubject( data ) {
        setTags( data );
    };
    const handleSubmit = function( event ) {
        event.preventDefault();

        if ( category !== null && name !== null && subName !== null && url !== null && content !== null && tags !== null ) {
            console.log("send");

            api
                .post( "/cadArticle", {
                    category : category,
                    title : name,
                    subtitle : subName,
                    content : content,
                    // quizUrl : quizUrl,
                    tags : tags,
                    hightlighImage : hightlighImage
                })
                .then( response => {

                    setFormSendSuccess( true );
                })
                .catch( err =>  {
                    setFormSendSuccess( false );

                    // Presentation
                    localStorage.setItem("article", JSON.stringify({
                        category : category,
                        name : name,
                        subName: subName,
                        content : content,
                        tags : tags,
                        url : url
                    }));
                    setFormSendSuccess( true );
                });
        };
    };

    useEffect(() => {

        setTypeUser( userDataValues.typeUser )

        if ( typeUser === "default" ) {
            return navigate("/");
        }
    }, [ userDataValues ]);

    useEffect(() => {

        if ( id && contentid ) {
            api
                .get( `/${id}/${contentid}` )
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
            setName(matterEditData.data.title);
            setSubName(matterEditData.data.title);
            // setQuizUrl(matterEditData.data.title);
            setTags(matterEditData.data.body);
            setContent(matterEditData.data.body);
            setUrl(matterEditData.data.title);
            setNextContentUrl(matterEditData.data.title);
        };
    }, [ matterEditData ]);

    return (

        <section className="content">
            <div className="content__wrp">
                <form className="content__frm" onSubmit={(e) => e.preventDefault()}>
                    <fieldset className="content__fldst">
                        <legend className="content__lgnd"><FaPencilAlt />Matéria *</legend>
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
                        <legend className="content__lgnd"><FaPencilAlt />Título do artigo *</legend>
                        <input className="content__inpt" type="text" onChange={(e) => setName(e.target.value)} placeholder={name || "Digite o nome da matéria"} value={name || ""} />
                    </fieldset>
                    <fieldset className="content__fldst content__fldst--hlf">
                        <legend className="content__lgnd">Subtitulo do artigo *</legend>
                        <input className="content__inpt" type="text" onChange={(e) => setSubName(e.target.value)} placeholder={subName || "Digite o nome da matéria"} value={subName || ""} />
                    </fieldset>
                    <fieldset className="content__fldst content__fldst--hlf">
                        <legend className="content__lgnd"><FaPencilAlt />Url da matéria *</legend>
                        <input className="content__inpt" type="text" onChange={(e) => setUrl(e.target.value)} placeholder={url || "Digite a URL da matéria"} value={url || ""} />
                    </fieldset>
                    {/* <fieldset className="content__fldst content__fldst--hlf">
                        <legend className="content__lgnd">Url da atividade *</legend>
                        <input className="content__inpt" type="text" onChange={(e) => setQuizUrl(e.target.value)} placeholder={quizUrl || "Digite a URL do questionário da matéria" } value={quizUrl || ""} />
                    </fieldset> */}
                    <fieldset className="content__fldst content__fldst--hlf">
                        <legend className="content__lgnd"><FaPencilAlt />Url do próximo conteúdo ( Opcional )</legend>
                        <input className="content__inpt" type="text" onChange={(e) => setNextContentUrl(e.target.value)} placeholder={nextContentUrl || "Digite a URL da próxima matéria"} value={nextContentUrl || ""} />
                    </fieldset>
                    <fieldset className="content__fldst">
                        <legend className="content__lgnd"><FaPencilAlt />Escopo do artigo *</legend>
                        <MatterEditor />
                    </fieldset>
                    <fieldset className="content__fldst">
                        <legend className="content__lgnd"><FaPencilAlt />Tags ( Opcional )</legend>
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
                        <legend className="content__lgnd"><FaPencilAlt />Imagem de destaque *</legend>
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
                        <input className="content__sbmt" value="Salvar curso" type="submit" onClick={handleSubmit} />
                    </fieldset>
                </form>
                {/* <span className="content__rtrn">
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
                </span> */}
            </div>
        </section>
    );
};

export default CreateUpdateArticle;
