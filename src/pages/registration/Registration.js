import React, { useState } from "react";
import api from "../../services/api";
import ImageUploading from 'react-images-uploading';
import Select from 'react-select'
import DatePicker from "react-datepicker";

import { FaInfoCircle, FaFileImport, FaCaretSquareUp } from 'react-icons/fa';
import MainTitle from "../../components/title/MainTitle";

import "react-datepicker/dist/react-datepicker.css";

function Registration () {

    const [images, setImages] = useState([]);
    const maxNumber = 1;
    const [avatar, setAvatar] = useState( "" );
    const [bio, setBio] = useState( "" );
    const [fullname, setFullname] = useState( "" );
    const [username, setUsername] = useState( "" );
    const [email, setEmail] = useState( "" );
    const [city, setCity] = useState( "" );
    const [gender, setGender] = useState( "" );
    const [birthdayDate, setBirthdayDate] = useState( new Date() );
    const genderOptions = [
        { value: "feminino", label: "Feminino" },
        { value: "masculino", label: "Masculino" },
        { value: "naoinformar", label: "Prefiro não dizer" }
    ];

    const handleUpdateData = function( event ) {
        event.preventDefault();
        let url = "/user/create";

        api
            .post( url, {
                avatar : avatar === "" ? "" : avatar,
                fullname : fullname === "" ? "" : fullname,
                username : username === "" ? "" : username,
                email : email === "" ? "" : email,
                city : city === "" ? "" : city,
                gender : gender === "" ? "" : gender,
                birthdayDate: birthdayDate === "" ? "" : birthdayDate,
            })
            .then( response => {
                //setUpdateOpen( true );
            })
            .catch( err =>  {
                console.log( err );
            });
    };
    const onChange = function( imageList, addUpdateIndex ) {
        console.log( imageList, addUpdateIndex );
        setImages( imageList );
    };

    return (
        <section className="rgsttn">
            <MainTitle description="contato" descriptionUnder="Preencha o formulário abaixo" />
            <form onSubmit={( e ) => e.preventDefault()}>
                <div className="prfl__inf">
                    <ul className="prfl__inf__lst">
                        <li className="prfl__inf__itm prfl__inf__itm--upld">

                        </li>
                        <li className="prfl__inf__itm">
                            <input className="prfl__inpt" value={fullname} placeholder={"Digite seu nome"} onChange={(e) => setFullname(e.target.value)} />
                        </li>
                        <li className="prfl__inf__itm">
                            <input className="prfl__inpt" value={bio} placeholder={"Digite sua biografia"} onChange={(e) => setBio(e.target.value)} />
                        </li>
                        <li className="prfl__inf__itm">
                            <input className="prfl__inpt" value={username} placeholder={"Digite seu nome de usuário"} onChange={(e) => setUsername(e.target.value)} />
                        </li>
                        <li className="prfl__inf__itm">
                            <input className="prfl__inpt" value={email} placeholder={"Digite seu e-mail"} onChange={(e) => setEmail(e.target.value)} />
                        </li>
                        <li className="prfl__inf__itm">
                            <input className="prfl__inpt" value={city} placeholder={"Digite sua cidade"} onChange={(e) => setCity(e.target.value)} />
                        </li>
                        <li className="prfl__inf__itm prfl__inf__itm--slct">
                            <Select className="" options={genderOptions} onChange={(e) => setGender(e.value)}/>
                        </li>
                        <li className="prfl__inf__itm">
                            <DatePicker className="prfl__inpt" selected={birthdayDate} onChange={(birthdayDate) => setBirthdayDate(birthdayDate)} />
                        </li>
                        <li className="prfl__inf__edtr">
                            <a href="/ds" title="Editar perfil" onClick={handleUpdateData}>
                                Salvar
                            </a>
                        </li>
                        <li className="prfl__inf__flr">
                            <span>
                                <FaInfoCircle />Estamos com problemas para atualizar seu cadastro. Tente novamente mais tarde.
                            </span>
                        </li>
                    </ul>
                </div>
            </form>
        </section>
    );
}

export default Registration;
