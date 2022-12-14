import React from "react";

import { FaRegEnvelope, FaMap, FaCalendarWeek, FaGenderless } from 'react-icons/fa';

/**
 * 
 * @returns 
 */

function ProfileCard ({
    userData,
    setUpdateUserData
}) {

    const handleEditUseruserData = function( event ) {
        event.preventDefault();
        setUpdateUserData( true );
    };

    return (

        <>
            <div className="prfl__img">
                <img src={`/avatar/${userData.avatar}.png`} alt="Avatar do usuário" /> 
            </div>
            <div className="prfl__inf">
                <ul className="prfl__inf__lst">
                    <li className="prfl__inf__itm prfl__inf__itm--nm">{userData.name}</li>
                    <li className="prfl__inf__itm prfl__inf__itm--usrnm">{userData.username}</li>
                    <li className="prfl__inf__itm prfl__inf__itm--occptn">{userData.occupation}</li>
                    <li className="prfl__inf__itm"><FaRegEnvelope />{userData.email}</li>
                    <li className="prfl__inf__itm"><FaMap />{userData.username}</li>
                    <li className="prfl__inf__itm"><FaGenderless />{userData.city}</li>
                    <li className="prfl__inf__itm"><FaCalendarWeek />{userData.bitrh}</li>
                    <li className="prfl__inf__edtr">
                        <a href="/ds" title="Editar perfil" onClick={handleEditUseruserData}>
                            Editar Perfil
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default ProfileCard;
