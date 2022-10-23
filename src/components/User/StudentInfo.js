import React from "react";

import StudentEmblems from "./components/StudentEmblems";

import { FaPencilAlt } from 'react-icons/fa';

/**
 * 
 * @returns 
 */

function StudentInfo ({
    userInfo
}) {

    return (

        <section className="stdnt">
            <section className="stdnt__inf">
                <div className="stdnt__inf__bx">
                    <div className="stdnt__grtns">
                        Olá, seja bem vindo.
                    </div>
                    <div className="stdnt__inf__img">
                        {
                            userInfo.avatar !== null && (
                                <img src={userInfo.avatar} alt="Ícone do usuário" className="" />
                            )
                        }
                    </div>
                    <div className="stdnt__inf__abt">
                        <div className="stdnt__inf__idntfctn">
                            <p className="stdnt__inf__grtng">
                                Olá! seja bem-vindo,
                            </p>
                            <p className="stdnt__inf__nm">
                                {userInfo.name}
                            </p>
                            <p className="stdnt__inf__b">
                                "Nunca existiu uma grande inteligência sem uma veia de loucura."
                            </p>
                        </div>
                    </div>
                    <div className="stdnt__inf__emblm">
                        <StudentEmblems emblemId={userInfo.level} />
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