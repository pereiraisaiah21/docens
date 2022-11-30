import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import StudentEmblems from "./components/StudentEmblems";
import { FaPencilAlt } from 'react-icons/fa';

/**
 * 
 * @returns 
 */

function StudentInfo () {

    let userStorage = JSON.parse(localStorage.getItem("user"));
    let navigate = useNavigate();

    useEffect( () => {

        if ( !userStorage ) {
            navigate( "/entrar" );
        }
    }, [] );

    return (

        <section className="stdnt">
            <section className="stdnt__inf">
                <div className="stdnt__inf__bx">
                    <div className="stdnt__grtns">
                        Olá, seja bem vindo.
                    </div>
                    {
                        userStorage
                        ?
                        <>
                            <div className="stdnt__inf__img">
                                <img src={`/avatar/${userStorage.avatar}.png`} alt="Ícone do usuário" className="" />
                                {/* {
                                    userInfo.imageAvatar !== null && (
                                        <img src={userInfo.imageAvatar} alt="Ícone do usuário" className="" />
                                    )
                                } */}
                            </div>
                            <div className="stdnt__inf__abt">
                                <div className="stdnt__inf__idntfctn">
                                    <p className="stdnt__inf__grtng">
                                        Olá! seja bem-vindo,
                                    </p>
                                    <p className="stdnt__inf__nm">
                                        {userStorage.username}
                                    </p>
                                    <p className="stdnt__inf__nm stdnt__inf__nm--mobile">
                                        Olá, {userStorage.username}
                                    </p>
                                    <p className="stdnt__inf__b">
                                        "{userStorage.bio}"
                                    </p>
                                </div>
                            </div>
                            <div className="stdnt__inf__emblm">
                                <div className="stdnt__inf__emblm__edt">
                                    <FaPencilAlt /> Editar
                                </div>
                                <StudentEmblems emblemId={userStorage.level} />
                            </div>
                        </>
                        :
                        null
                    }
                </div>
            </section>
        </section>
    );
}

export default StudentInfo;
