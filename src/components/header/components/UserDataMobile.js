import React from "react";

/**
 * 
 * @returns 
 */

function UserDataMobile () {

    const userStorage = JSON.parse(localStorage.getItem( "user" ));

    return (

        <section className="hdr--mbl__usr">
            <div className="hdr--mbl__prfl">
                {

                    !!userStorage && (
                        <>
                            <div className="hdr--mbl__icon">
                                <img className="hdr--mbl__icn" src={"https://cdn.pixabay.com/photo/2017/01/30/23/52/female-2022387_960_720.png"} alt="Ícone do usuário" />
                            </div>
                            <div className="hdr--mbl__inf">
                                <span className="hdr--mbl__nm">{userStorage.name}</span>
                                <span className="hdr--mbl__ocptn">{userStorage.email}</span>
                            </div>
                        </>
                    )
                }
            </div>
        </section>
    );
}

export default UserDataMobile;