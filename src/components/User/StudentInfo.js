import React from "react";

import StudentEmblems from "./components/StudentEmblems";

import { FaPencilAlt } from 'react-icons/fa';

/**
 * 
 * @returns 
 */

function StudentInfo () {

    let userStorage = JSON.parse(localStorage.getItem("user"));

    return (

        <section className="stdnt">
            <section className="stdnt__inf">
                <div className="stdnt__inf__bx">
                    <div className="stdnt__grtns">
                        Olá, seja bem vindo.
                    </div>
                    <div className="stdnt__inf__img">
                        <img src="https://static.vecteezy.com/ti/vetor-gratis/p3/2275847-avatar-masculino-perfil-icone-de-homem-caucasiano-sorridente-vetor.jpg" alt="Ícone do usuário" className="" />
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
                        <StudentEmblems emblemId={userStorage.level} />
                        <div className="stdnt__inf__emblm__edt">
                            <FaPencilAlt /> Editar
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default StudentInfo;