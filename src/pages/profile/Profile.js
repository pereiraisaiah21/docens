import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import ProfileCard from "./components/ProfileCard";
import NavigationMyProgress from "../home/components/NavigationMyProgress";
import FormUpdataUserData from "./components/FormUpdateUserData";

import "./Profile.scss";

/**
 * 
 * @returns 
 */

function Profile () {

    let {username} = useParams();
    const [updateUserData, setUpdateUserData] = useState(false);

    return (
        <section className="prfl">
            <div className="prfl__wrpp">
                <div className="prfl__bg">
                    <img src="https://thumbs.dreamstime.com/b/fb-cover-facebook-watercolor-style-isolated-set-elements-wild-flowers-aquarelle-image-could-be-used-profile-78323435.jpg" alt="" className=""/>
                    {
                        updateUserData
                        ?
                        <div className="prfl__dt prfl__dt--updt">
                            <FormUpdataUserData data={{
                                fullname        : "Wilson Wilson",
                                username        : "@Wilsoon_943289",  
                                email           : "Student@ronald.com",
                                birthdayDate    : "02/01/1996",
                                city            : "São Paulo",
                                avatar          : "https://static.vecteezy.com/ti/vetor-gratis/p1/2275847-avatar-masculino-perfil-icone-de-homem-caucasiano-sorridente-vetor.jpg",
                                xp              : 100,
                                level           : 17
                            }}/>
                        </div>
                        :
                        <>
                            <div className="prfl__dt">
                                <ProfileCard data={{
                                    fullname        : "Wilson Wilson",
                                    username        : "@Wilsoon_943289",  
                                    email           : "Student@ronald.com",
                                    birthdayDate    : "02/01/1996",
                                    gender          : "Não especificado",
                                    age             : 40,  
                                    city            : "São Paulo",
                                    avatar          : "https://static.vecteezy.com/ti/vetor-gratis/p1/2275847-avatar-masculino-perfil-icone-de-homem-caucasiano-sorridente-vetor.jpg",
                                    occupation      : "Student",
                                    xp              : 100,
                                    level           : 17
                                }} setUpdateUserData={setUpdateUserData} />
                            </div>
                        </>
                    }
                </div>
                <div className="prfl__updts">
                    <NavigationMyProgress slider={false} />
                </div>
            </div>
        </section>
    );
}

export default Profile;