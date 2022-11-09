import React, { useState, useEffect } from "react";

import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import UserData from "../../UserData";

import MainTitle from "../../components/title/MainTitle";
import { FaUserGraduate, FaLock, FaUserCircle, FaInfoCircle } from 'react-icons/fa';
import api from "../../services/api";

/**
 *
 * @returns
 */

function Login () {

    const [userDataValues, setUserDataValues] = useState({
        data  : [],
        isLogged : true,
        typeUser : "default",
        error : ""
      });

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
        // const loggedInUser = localStorage.getItem( "user" );
        // console.log(loggedInUser)
        // if ( loggedInUser ) {
        //   // const foundUser = JSON.parse( loggedInUser );
        //   setUser( loggedInUser );
        // }
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

        // const user = ;

       
        try {   

            console.log(username, password)
           const resp = await axios.post(  "https://tccunipcci.herokuapp.com/api/login", {email : username, password : password}, {
            headers : {
                'content-type': 'application/json'
            }
           });

           console.log(")))))))", resp);
           setUser( resp.data );
           localStorage.setItem( "user", resp.data )
           console.log(resp.data)


           if (resp.data) {
               // return navigate("/home");
               console.log("pass")
               setUserDataValues({
                    data  : resp.data.data,
                    isLogged : !!resp.data[1].id,
                    typeUser : (resp.data[1].occupation == "student") ?"default" : "teacher",
                    error : ""
                });
            }
        } catch ( err ) {
            // Handle Error Here
            console.error(err);
        }
        console.log(userDataValues)
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

        <UserData.Provider value={{userDataValues}}>
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
        </UserData.Provider>
    
    );
}

export default Login;
