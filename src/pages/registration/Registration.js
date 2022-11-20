import React, { useState, useEffect } from "react";
import api from "../../services/api";
import ImageUploading from 'react-images-uploading';
import Select from 'react-select'
import DatePicker from "react-datepicker";
import { useParams, useNavigate } from "react-router-dom";
import Emoji from 'a11y-react-emoji'

import { FaInfoCircle, FaFileImport, FaCaretSquareUp, FaUser, FaEnvelope, FaMap, FaCalendarWeek, FaRegNewspaper } from 'react-icons/fa';
import MainTitle from "../../components/title/MainTitle";

import "react-datepicker/dist/react-datepicker.css";

function Registration () {

    let navigate = useNavigate();

    const [images, setImages] = useState([]);
    const maxNumber = 1;
    const [avatar, setAvatar] = useState( "" );
    const [bio, setBio] = useState( "" );
    const [fullname, setFullname] = useState( "" );
    const [email, setEmail] = useState( "" );
    const [city, setCity] = useState( "" );
    
    const [ blockForwardButton, setBlockForwardButton ] = useState( false );
    const [ showSecondStep, setShowSecondStep ] = useState( false );
    const [ updateOpen, setUpdateOpen ] = useState( false );

    const [password, setPassword] = useState( "" );
    const [username, setUsername] = useState( "" );
    // const [gender, setGender] = useState( "" );
    const [birthdayDate, setBirthdayDate] = useState( new Date() );
    // const genderOptions = [
    //     { value: "feminino", label: "Feminino" },
    //     { value: "masculino", label: "Masculino" },
    //     { value: "naoinformar", label: "Prefiro não dizer" }
    // ];

    useEffect(() => {
        if ( !fullname || !email || !city || !birthdayDate || !bio ) {
            setBlockForwardButton( true );
        } else {
            setBlockForwardButton( false );
        }
    }, [fullname, email, city, birthdayDate, bio]);

    const handleUpdateData = function( event ) {
        event.preventDefault();
        let url = "/creat";

        if ( fullname || username || email || city || birthdayDate || bio ) {
            api
                .post( url, {
                    // avatar : avatar === "" ? "" : avatar,
                    name : fullname === "" ? "" : fullname,
                    username : username === "" ? "" : username,
                    email : email === "" ? "" : email,
                    city : city === "" ? "" : city,
                    bio : bio === "" ? "" : bio,
                    password : password === "" ? "" : password,
                    occupation : "student",
                    // gender : gender === "" ? "" : gender,
                    birth: birthdayDate === "" ? "" : birthdayDate.toLocaleDateString('pt-BR'),
                    cor: "#090"
                })
                .then( response => {
                    setUpdateOpen( true );
                    // console.log("response", response)
                    setTimeout( () => {
                        return navigate("/entrar");
                    }, 2000);
                })
                .catch( err =>  {
                    console.log( err );
                });
            window.scrollTo(0,0);
        }
    };
    const onChange = function( imageList, addUpdateIndex ) {
        console.log( imageList, addUpdateIndex );
        setImages( imageList );
    };
    const showNextStepPass = function( event ) {
        event.preventDefault();

        console.log("afasd", showSecondStep)
        setShowSecondStep( !showSecondStep );
    };
    const showNextStep = function( event ) {
        event.preventDefault();
        console.log("afasd", showSecondStep)
        setShowSecondStep( !showSecondStep );
    };
    const directToLogin = function( event ) {
        event.preventDefault();
        return navigate("/entrar");
    };

    return (
        <section className="rgsttn">
            {
                updateOpen && (
                    <div className="success">
                        Cadastro realizado com sucesso!
                    </div>
                )
            }
            <div className="rgsttn__image">
                <div className="lgn__imageBox">
                    <FaUser className="lgn__image__lock" />
                    <h1 className="lgn__image__title">
                        Bem-vindo
                    </h1>
                </div>
            </div>
            <form className="rgsttn__frm" onSubmit={( e ) => e.preventDefault()}>
                <div className="rgsttn__frmBox">
                    <MainTitle description="Cadastro" descriptionUnder="" />
                    <div className="prfl__inf">
                        {
                            showSecondStep 
                            ?
                            <>
                                <fieldset className="rgsttn__flst">
                                    <legend className="prfl__inf__itm">
                                        <FaUser />
                                        Nome de usuário
                                    </legend>
                                    <input className="prfl__inpt" value={username} placeholder={"Digite seu nome de usuário"} onChange={(e) => setUsername(e.target.value)} />
                                </fieldset>
                                <fieldset className="rgsttn__flst">
                                    <legend className="prfl__inf__itm">
                                        <FaUser />
                                        Senha
                                    </legend>
                                    <input className="prfl__inpt" value={password} type="password" placeholder={"Digite sua senha"} onChange={(e) => setPassword(e.target.value)} />
                                </fieldset>
                            </>
                            :
                            <>
                                <fieldset className="rgsttn__flst">
                                    <legend className="prfl__inf__itm">
                                        <FaUser></FaUser>
                                        Nome
                                    </legend>
                                    <input className="prfl__inpt" value={fullname} placeholder={"Digite seu nome"} onChange={(e) => setFullname(e.target.value)} />
                                </fieldset>
                                <fieldset className="rgsttn__flst">
                                    <legend className="prfl__inf__itm">
                                        <FaEnvelope />
                                        E-mail
                                    </legend>
                                    <input className="prfl__inpt" value={email} placeholder={"Digite seu e-mail"} onChange={(e) => setEmail(e.target.value)} />
                                </fieldset>
                                <fieldset className="rgsttn__flst">
                                    <legend className="prfl__inf__itm">
                                        <FaMap />
                                        Cidade
                                    </legend>
                                    <input className="prfl__inpt" value={city} placeholder={"Digite sua cidade"} onChange={(e) => setCity(e.target.value)} />
                                </fieldset>
                                <fieldset className="rgsttn__flst">
                                    <legend className="prfl__inf__itm">
                                        <FaCalendarWeek />
                                        Data de nascimento
                                    </legend>
                                    <DatePicker className="prfl__inpt" selected={birthdayDate} onChange={(birthdayDate) => setBirthdayDate(birthdayDate)} />
                                </fieldset>
                                <fieldset className="rgsttn__flst">
                                    <legend className="prfl__inf__itm">
                                        <FaRegNewspaper />
                                        Digite uma frase para sua bio
                                    </legend>
                                    <input className="prfl__inpt" value={bio} placeholder={"Digite sua biografia"} onChange={(e) => setBio(e.target.value)} />
                                </fieldset>
                            </>
                        }
                        <fieldset className="lgn__flst lgn__flst--optns">
                            {
                                showSecondStep
                                ?
                                    <>
                                        <a href="/fasd" title="" className="lgn__rcvr" onClick={showNextStep}>
                                            Voltar para cadastro
                                        </a>
                                        <button className="lgn__snd" onClick={handleUpdateData}>
                                            Salvar
                                        </button>
                                    </>
                                :
                                <button className="lgn__snd" id="go-forward" disabled={blockForwardButton} onClick={showNextStepPass}>
                                    Avançar
                                </button>                                
                            }
                            <button className="lgn__rgs" onClick={directToLogin}>
                                Entrar
                            </button>
                        </fieldset>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default Registration;
