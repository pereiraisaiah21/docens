import React, { useState, useEffect } from "react";

import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import MainTitle from "../../components/title/MainTitle";
import { FaUserGraduate, FaLock, FaUserCircle, FaInfoCircle } from 'react-icons/fa';

/**
 *
 * @returns
 */

function Login () {

    const [ user, setUser ] = useState({});
    const [ username, setUsername ] = useState(null);
    const [ password, setPassword ] = useState(null);
    const [ showFormRecover, setShowFormRecover ] = useState(false);
    const [ emailRecover, setEmailRecover ] = useState(null);
    const [ usernameValid, setUsernameValid ] = useState(true);
    const [ passwordValid, setPasswordValid ] = useState(true);
    const [ emailRecoverValid, setEmailRecoverValid ] = useState(true);
    const [ isEmailRecoverSent, setIsEmailRecoverSent ] = useState(false);

      let navigate = useNavigate();

    useEffect(() => {
        const loggedInUser = localStorage.getItem( "user" );
        console.log(loggedInUser)
        if ( loggedInUser ) {
          // const foundUser = JSON.parse( loggedInUser );
          setUser( loggedInUser );
        }
      }, []);

    const loginSubmit = async  (event) => {
        event.preventDefault();

        if ( username !== null && username !== undefined && username !== "" ) {
            setUsernameValid( true );
        } else {
            setUsernameValid( false );
        };

        if ( password !== null && password !== undefined && password !== "" ) {
            setPasswordValid( true );
        } else {
            setPasswordValid( false );
        };

        if (!usernameValid || !passwordValid) {
          return;
        }

        const user = {username, password};

        try {
           const resp = await axios.post(  "http://blogservice.herokuapp.com/api/login", user );
           console.log(resp.data);
           setUser( resp.data );
           localStorage.setItem( "user", resp.data )
           console.log(resp.data)

           return navigate("/home");
       } catch ( err ) {
           // Handle Error Here
           console.error(err);
       }
    };
    const handleLogout = function()  {
        setUser({});
        setUsername("");
        setPassword("");
        localStorage.clear();
    };
    const recoverClick = function( event ) {
        event.preventDefault();
        setShowFormRecover( !showFormRecover );
    };
    const recoverClickReturn = function( event ) {
        event.preventDefault();
        setShowFormRecover( !showFormRecover );
    };
    const sendRecoverEmail = function( event ) {
        event.preventDefault();

        if ( emailRecover !== null && emailRecover !== undefined && emailRecover !== "" && emailRecover.includes("@") && emailRecover.includes(".") ) {
            setEmailRecoverValid( true );
            submitUserPasswordRecover( emailRecover );
        } else {
            setEmailRecoverValid( false );
        };
    };
    const submitUserPasswordRecover = function( emailRecover ) {
        console.log("Método de recuperação de senha. Retornar confirmação.", emailRecover);
        setIsEmailRecoverSent( true );
    };

    return (

        <section className="lgn">
            <form className="lgn__frm">
                <MainTitle description="entrar" isCarousel={false} icon={<FaUserCircle />} />
                {
                    showFormRecover
                    ?
                    <fieldset className="lgn__flst lgn__flst--optns">
                        <input type="text" className="lgn__inpt lgn__inpt--rcvr" placeholder="Digite seu email" onChange={e => setEmailRecover(e.target.value)} />
                        {
                            emailRecoverValid
                            ?
                            ""
                            :
                            <FaInfoCircle className="lgn__inpt--warn" />
                        }
                        <button className="lgn__snd lgn__snd--rcvr" onClick={sendRecoverEmail}>
                            Enviar senha
                        </button>
                        {
                            isEmailRecoverSent
                            ?
                            <>
                                <span className="lgn__flst__rtrn">
                                    Caso tenha algum cadastro neste e-mail, basta acessar seu e-mail.
                                </span>
                                <span className="lgn__flst__rtrn">
                                    Clique abaixo para inserir suas credenciais.
                                </span>
                            </>
                            :
                            ""
                        }
                        <a href="/fasd" title="" className="lgn__rcvr" onClick={recoverClickReturn}>
                            Voltar para entrar
                        </a>
                    </fieldset>
                    :
                    <>
                        <fieldset className="lgn__flst">
                            <legend>
                                <FaUserGraduate />
                                nome de usuário
                            </legend>
                            <input type="text" className="lgn__inpt" placeholder="Digite seu nome" onChange={e => setUsername(e.target.value)} />
                            {
                                !usernameValid && (
                                    <FaInfoCircle className="lgn__inpt--warn" />
                                )
                            }
                        </fieldset>
                        <fieldset className="lgn__flst">
                            <legend>
                                <FaLock />
                                senha
                            </legend>
                            <input type="password" className="lgn__inpt" placeholder="Digite sua senha" onChange={e => setPassword(e.target.value)} />
                            {
                                !passwordValid && (
                                    <FaInfoCircle className="lgn__inpt--warn" />
                                )
                            }
                        </fieldset>
                        <fieldset className="lgn__flst lgn__flst--optns">
                            <a href="/fasd" title="" className="lgn__rcvr" onClick={recoverClick}>
                                Esqueceu a senha?
                            </a>
                            <button className="lgn__snd" onClick={loginSubmit}>
                                Entrar
                            </button>
                        </fieldset>
                    </>
                }
            </form>
        </section>
    );
}

export default Login;
