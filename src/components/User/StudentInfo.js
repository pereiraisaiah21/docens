import React from "react";

import "./User.scss";

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
                <div className="stdnt__inf__img">
                    {
                        userInfo.avatar !== null
                        ?
                        <img src={userInfo.avatar} alt="Ícone do usuário" className="" />
                        :
                        ""
                    }
                </div>
                <div className="stdnt__inf__abt">
                    <div className="stdnt__inf__idntfctn">
                        <p>
                            {userInfo.name}
                        </p>
                        <p>
                            {userInfo.occupation}
                        </p>
                    </div>
                    <div className="stdnt__inf__emblm">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default StudentInfo;