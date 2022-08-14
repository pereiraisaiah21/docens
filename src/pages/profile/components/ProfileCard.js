import React from "react";

import { FaRegEnvelope, FaMap, FaCalendarWeek, FaGenderless } from 'react-icons/fa';

import "../Profile.scss";

/**
 * 
 * @returns 
 */

function ProfileCard ({
    data,
    setUpdateUserData
}) {

    const handleEditUserData = function( event ) {
        event.preventDefault();
        setUpdateUserData( true );
    };

    return (
        <>
            <div className="prfl__img">
                <img src={data.avatar} alt="Avatar do usuário" /> 
            </div>
            <div className="prfl__inf">
                <ul className="prfl__inf__lst">
                    <li className="prfl__inf__itm prfl__inf__itm--nm">{data.name}</li>
                    <li className="prfl__inf__itm prfl__inf__itm--usrnm">{data.username}</li>
                    <li className="prfl__inf__itm prfl__inf__itm--occptn">{data.name}</li>
                    <li className="prfl__inf__itm"><FaRegEnvelope />{data.email}</li>
                    <li className="prfl__inf__itm"><FaMap />{data.username}</li>
                    <li className="prfl__inf__itm"><FaGenderless />{data.website}</li>
                    <li className="prfl__inf__itm"><FaCalendarWeek />{data.phone}</li>
                    <li className="prfl__inf__edtr">
                        <a href="/ds" title="Editar perfil" onClick={handleEditUserData}>
                            Editar Perfil
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default ProfileCard;