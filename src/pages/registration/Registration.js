import React, { useState, useEffect } from "react";
import api from "../../services/api";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import reactCSS from 'reactcss';
import Emoji from 'a11y-react-emoji';
import { SketchPicker } from 'react-color';

import { FaUser, FaEnvelope, FaMap, FaCalendarWeek, FaRegNewspaper, FaPaintBrush } from 'react-icons/fa';
import MainTitle from "../../components/title/MainTitle";
import Avatar from "./Avatar";
import Color from "./Color";

/**
 * 
 * @returns 
 */

function Registration () {

    let navigate = useNavigate();

    const maxNumber = 1;
    const [ images, setImages ] = useState( [] );
    const [ avatar, setAvatar ] = useState( "" );
    const [ bio, setBio ] = useState( "" );
    const [ fullname, setFullname ] = useState( "" );
    const [ email, setEmail ] = useState( "" );
    const [ city, setCity ] = useState( "" );
    const [ username, setUsername ] = useState( "" );
    const [ password, setPassword ] = useState( "" );
    const [ birthdayDate, setBirthdayDate ] = useState( new Date() );
    const [ color, setColor ] = useState({
        displayColorPicker: false,
        color: {
            r: '241',
            g: '112',
            b: '19',
            a: '1',
        }
    });

    const [ blockForwardButton, setBlockForwardButton ] = useState( false );
    const [ showSecondStep, setShowSecondStep ] = useState( false );
    const [ updateOpen, setUpdateOpen ] = useState( false );

    const styles = reactCSS({
        'default': {
          color: {
            width: '36px',
            height: '14px',
            borderRadius: '2px',
            background: `rgba(${ color.color.r }, ${ color.color.g }, ${ color.color.b }, ${ color.color.a })`,
          },
          swatch: {
            padding: '5px',
            margin: '5px',
            background: '#fff',
            borderRadius: '1px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
            display: 'inline-block',
            cursor: 'pointer',
          },
          popover: {
            position: 'absolute',
            zIndex: '2',
          },
          cover: {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
          },
        },
    });

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
        setShowSecondStep( !showSecondStep );
    };
    const showNextStep = function( event ) {
        event.preventDefault();
        setShowSecondStep( !showSecondStep );
    };
    const directToLogin = function( event ) {
        event.preventDefault();
        return navigate("/entrar");
    };
    const colorHandleClick = function () {
        setColor({ ...color, displayColorPicker: !color.displayColorPicker });
    };
    const colorHandleClose = function () {
        setColor({ ...color, displayColorPicker: false });
    };
    const colorHandleChange = function ( color ) {
        setColor({...color, color: color.rgb });
        console.log( " X ", color.hex)
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
                    <h1 className="lgn__image__title">
                        Bem-vindo
                    </h1>
                    <Emoji className="lgn__image__lock" symbol={"🧕🙋"} label="love" />
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
                                <Avatar />
                                <fieldset className="rgsttn__flst rgsttn__flst--avatar">
                                    <legend className="prfl__inf__itm">
                                        <FaPaintBrush />
                                        Cor de destaque
                                    </legend>
                                    <div>
                                        <div style={ styles.swatch } onClick={ colorHandleClick }>
                                            <div style={ styles.color } />
                                        </div>
                                        {
                                            color.displayColorPicker
                                            ?
                                            <div style={ styles.popover }>
                                                <div style={ styles.cover } onClick={ colorHandleClose }/>
                                                <SketchPicker color={ color.color } onChange={ colorHandleChange } />
                                            </div>
                                            :
                                            null
                                        }
                                    </div>
                                </fieldset>
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
