import React from "react";

import { FaRegEnvelope, FaMap, FaCalendarWeek } from 'react-icons/fa';

import "../Profile.scss";

/**
 * 
 * @returns 
 */

function ProfileCard ({
    data
}) {

    return (
        <>
            <div className="prfl__img">
                <img src={data.avatar} alt="Avatar do usuário"/> 
            </div>
            <div className="prfl__inf">
                <ul className="prfl__inf__lst">
                    <li className="prfl__inf__itm prfl__inf__itm--nm">{data.fullname}</li>
                    <li className="prfl__inf__itm prfl__inf__itm--usrnm">{data.username}</li>
                    <li className="prfl__inf__itm prfl__inf__itm--occptn">{data.occupation}</li>
                    <li className="prfl__inf__itm"><FaRegEnvelope />{data.email}</li>
                    <li className="prfl__inf__itm"><FaMap />{data.city}</li>
                    <li className="prfl__inf__itm"><FaCalendarWeek />{data.birthdayDate}</li>
                    <li className="prfl__inf__edtr">
                        <a href="/ds" title="Editar perfil">
                            Editar Perfil
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default ProfileCard;