import React from "react";

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function UserDataMobile ({
    userData
}) {

    return (
        <section className="hdr--mbl__usr">
            <div className="hdr--mbl__prfl">
                <div className="hdr--mbl__icon">
                    <img className="hdr--mbl__icn" src={"https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_man_boy_male_profile_smiley_happy_people_icon_181657.png"} alt="Ícone do usuário" />
                </div>
                <div className="hdr--mbl__inf">
                    <span className="hdr--mbl__nm">{userData.name}</span>
                    <span className="hdr--mbl__ocptn">{userData.email}</span>
                </div>
            </div>
        </section>
    );
}

export default UserDataMobile;