import React, { useState } from "react";

import "../Profile.scss";

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function FormUpdateUserData ({
    data
}) {

    const [avatar, setAvatar]               = useState("");
    const [fullname, setFullname]           = useState("");
    const [username, setUsername]           = useState("");
    const [email, setEmail]                 = useState("");
    const [city, setCity]                   = useState("");
    const [gender, setGender]               = useState("");
    const [birthdayDate, setBirthdayDate]   = useState("");

    const [avatarValid, setAvatarValid]               = useState(true);
    const [fullnameValid, setFullnameValid]           = useState(true);
    const [usernameValid, setUsernameValid]           = useState(true);
    const [emailValid, setEmailValid]                 = useState(true);
    const [cityValid, setCityValid]                   = useState(true);
    const [genderValid, setGenderValid]               = useState(true);
    const [birthdayDateValid, setBirthdayDateValid]   = useState(true);

    const handleUpdateData = function (event) {
        event.preventDefault();

        if (avatar !== null && avatar !== undefined && avatar !== "") {
            setAvatarValid(true);
        } else {
            setAvatarValid(false);
        }
        if (fullname !== null && fullname !== undefined && fullname !== "") {
            setFullnameValid(true);
        } else {
            setFullnameValid(false);
        }
        if (username !== null && username !== undefined && username !== "") {
            setUsernameValid(true);
        } else {
            setUsernameValid(false);
        }
        if (email !== null && email !== undefined && email !== "") {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
        if (city !== null && city !== undefined && city !== "") {
            setCityValid(true);
        } else {
            setCityValid(false);
        }
        if (gender !== null && gender !== undefined && gender !== "") {
            setGenderValid(true);
        } else {
            setGenderValid(false);
        }
        if (birthdayDate !== null && birthdayDate !== undefined && birthdayDate !== "") {
            setBirthdayDateValid(true);
        } else {
            setBirthdayDateValid(false);
        }

        if (avatarValid, fullnameValid, usernameValid, emailValid, cityValid, genderValid, birthdayDateValid) {
            FormUpdateUserData(avatar, fullname, username, email, city, gender, birthdayDate);
        }
    };

    const FormUpdateUserData = function (avatar, fullname, username, email, city, gender, birthdayDate) {
        console.log("Atualizar dados do usuário");
    }

    return (
        <form>
            <div className="prfl__inf">
                <ul className="prfl__inf__lst">
                    <li className="prfl__inf__itm">
                        <input className="prfl__inpt" value={avatar} placeholder={data.avatar} onChange={(e) => setAvatar(e.target.value)}/>
                    </li>
                    <li className="prfl__inf__itm">
                        <input className="prfl__inpt" value={fullname} placeholder={data.fullname} onChange={(e) => setFullname(e.target.value)}/>
                    </li>
                    <li className="prfl__inf__itm">
                        <input className="prfl__inpt" value={username} placeholder={data.username} onChange={(e) => setUsername(e.target.value)}/>
                    </li>
                    <li className="prfl__inf__itm">
                        <input className="prfl__inpt" value={email} placeholder={data.email} onChange={(e) => setEmail(e.target.value)}/>
                    </li>
                    <li className="prfl__inf__itm">
                        <input className="prfl__inpt" value={city} placeholder={data.city} onChange={(e) => setCity(e.target.value)}/>
                    </li>
                    <li className="prfl__inf__itm">
                        <input className="prfl__inpt" value={gender} placeholder={data.gender} onChange={(e) => setGender(e.target.value)}/>
                    </li>
                    <li className="prfl__inf__itm">
                        <input className="prfl__inpt" value={birthdayDate} placeholder={data.birthdayDate} onChange={(e) => setBirthdayDate(e.target.value)}/>
                    </li>
                    <li className="prfl__inf__edtr">
                        <a href="/ds" title="Editar perfil" onClick={handleUpdateData}>
                            Salvar
                        </a>
                    </li>
                </ul>
            </div>
        </form>
    )
}

export default FormUpdateUserData;