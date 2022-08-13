import React, { useState } from "react";

import axios from "axios";

import { FaInfoCircle } from 'react-icons/fa';

import "../Profile.scss";

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function FormUpdateUserData ({
    data,
    setUpdateOpen
}) {

    const [avatar, setAvatar]               = useState("");
    const [fullname, setFullname]           = useState("");
    const [username, setUsername]           = useState("");
    const [email, setEmail]                 = useState("");
    const [city, setCity]                   = useState("");
    const [gender, setGender]               = useState("");
    const [birthdayDate, setBirthdayDate]   = useState("");

    const handleUpdateData = function (event) {
        event.preventDefault();

        console.log("Atualizar dados do usuário");

        axios.post("/user", {
            avatar      : avatar        === "" ? "" : avatar,
            fullname    : fullname      === "" ? "" : fullname,
            username    : username      === "" ? "" : username,
            email       : email         === "" ? "" : email,
            city        : city          === "" ? "" : city,
            gender      : gender        === "" ? "" : gender,
            birthdayDate: birthdayDate  === "" ? "" : birthdayDate,
        })
        .then(function (response) {
            setUpdateOpen(false);
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    return (
        <form>
            <div className="prfl__inf">
                <ul className="prfl__inf__lst">
                    <li className="prfl__inf__itm">
                        <input className="prfl__inpt" value={avatar} placeholder={data.avatar} onChange={(e) => setAvatar(e.target.value)}/>
                    </li>
                    <li className="prfl__inf__itm">
                        <input className="prfl__inpt" value={fullname} placeholder={data.name} onChange={(e) => setFullname(e.target.value)}/>
                    </li>
                    <li className="prfl__inf__itm">
                        <input className="prfl__inpt" value={username} placeholder={data.username} onChange={(e) => setUsername(e.target.value)}/>
                    </li>
                    <li className="prfl__inf__itm">
                        <input className="prfl__inpt" value={email} placeholder={data.email} onChange={(e) => setEmail(e.target.value)}/>
                    </li>
                    <li className="prfl__inf__itm">
                        <input className="prfl__inpt" value={city} placeholder={data.address.city} onChange={(e) => setCity(e.target.value)}/>
                    </li>
                    <li className="prfl__inf__itm">
                        <input className="prfl__inpt" value={gender} placeholder={data.city} onChange={(e) => setGender(e.target.value)}/>
                    </li>
                    <li className="prfl__inf__itm">
                        <input className="prfl__inpt" value={birthdayDate} placeholder={data.phone} onChange={(e) => setBirthdayDate(e.target.value)}/>
                    </li>
                    <li className="prfl__inf__edtr">
                        <a href="/ds" title="Editar perfil" onClick={handleUpdateData}>
                            Salvar
                        </a>
                    </li>
                    <li  className="prfl__inf__flr">
                        <span>
                            <FaInfoCircle />Estamos com problemas para atualizar seu cadastro. Tente novamente mais tarde.
                        </span>
                    </li>
                </ul>
            </div>
        </form>
    )
}

export default FormUpdateUserData;