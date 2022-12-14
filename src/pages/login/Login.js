import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserData from "../../UserData";

import MainTitle from "../../components/title/MainTitle";
import { FaUserGraduate, FaLock, FaUserCircle, FaInfoCircle, FaTimes } from 'react-icons/fa';
import Emoji from 'a11y-react-emoji';

/**
 *
 * @returns
 */

function Login () {

    const [ user, setUser ] = useState( {} );
    const [ username, setUsername ] = useState( null );
    const [ password, setPassword ] = useState( null );
    const [ showFormRecover, setShowFormRecover ] = useState( false );
    const [ showFormRegister, setShowFormRegister ] = useState( false );

    const [ emailRecover, setEmailRecover ] = useState( null );
    const [ usernameValid, setUsernameValid ] = useState( true );
    const [ passwordValid, setPasswordValid ] = useState( true );
    const [ emailRecoverValid, setEmailRecoverValid ] = useState( true );
    const [ isEmailRecoverSent, setIsEmailRecoverSent ] = useState( false );

    const { userDataValues, setUserDataValues } = useContext(UserData)
    let navigate = useNavigate();

    const loginSubmit = async ( event ) => {
        event.preventDefault();

        if ( username !== null && username !== undefined && username !== "" ) {
            setUsernameValid( true );
        } else {
            setUsernameValid( false );
        };

        if ( password !== null && password !== undefined && password !== "" && password.length > 5 ) {
            setPasswordValid( true );
        } else {
            setPasswordValid( false );
        };

        if ( !usernameValid || !passwordValid ) {
          return;
        };

        try {
            const resp = await axios.post(  "https://tccunipcci.herokuapp.com/api/login", {email : username, password : password}, {
            headers : {
                'content-type': 'application/json'
            }
           });

           if (resp.data) {
               setUserDataValues({
                    data  : resp.data[1],
                    isLogged : true,
                    typeUser : resp.data[1].occupation,
                    token: resp.data[0],
                    error : ""
                });

                localStorage.setItem("user", JSON.stringify(resp.data[1]));
                
                if (username === "Adm@docens.com") {
                    localStorage.setItem("adm", "true");
                }
                return navigate("/home");
            }
        } catch ( err ) {
            console.error(err);
        };
    };
    const registerForm = function ( event ) {
        event.preventDefault();
        setShowFormRegister( !showFormRegister );
    }
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
        console.log("M??todo de recupera????o de senha. Retornar confirma????o.", emailRecover);
        setIsEmailRecoverSent( true );
    };
    const directToRegister = function( event ) {
        event.preventDefault();
        return navigate("/cadastro");
    };

    useEffect( () => {
        if (JSON.parse(localStorage.getItem("user"))) {
            return navigate("/home");
        }
    }, []);

    return (

        // <UserData.Provider value={{userDataValues}}>
            <section className="lgn">
                <div className="lgn__image">
                    <div className="lgn__imageBox">
                        <h1 className="lgn__image__title">
                            Bem-vindo
                        </h1>
                        <Emoji className="lgn__image__lock" symbol={"????????????????????"} label="love" />
                    </div>
                </div>
                <form className="lgn__frm">
                    <div className="lgn__frmBox">
                        <MainTitle description="informe os dados" isCarousel={false} icon={<FaUserCircle />} />
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
                                        nome de usu??rio
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
                                    <button className="lgn__rgs" onClick={directToRegister}>
                                        Registre-se
                                    </button>
                                </fieldset>
                                {
                                    !passwordValid || !usernameValid
                                    ?
                                    <fieldset className="lgn__invalid" data-wr="bool">
                                        <button>
                                            Verifique os campos inseridos
                                        </button>
                                    </fieldset>
                                    :
                                    null
                                }
                            </>
                        }
                    </div>
                </form>
            </section>    
        // </UserData.Provider>
    );
}

export default Login;
