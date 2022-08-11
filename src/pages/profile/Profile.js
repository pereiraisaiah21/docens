import React from "react";

import ProfileCard from "./components/ProfileCard";

import "./Profile.scss";

/**
 * 
 * @returns 
 */

function Profile () {


    return (
        <section className="prfl">
            <div className="prfl__wrpp">
                <div className="prfl__bg">
                    <img src="https://thumbs.dreamstime.com/b/fb-cover-facebook-watercolor-style-isolated-set-elements-wild-flowers-aquarelle-image-could-be-used-profile-78323435.jpg" alt="" className=""/>
                    <div className="prfl__dt">
                        <ProfileCard data={{
                            fullname        : "Wilson Wilson",
                            username        : "@Wilsoon_943289",  
                            email           : "Student@ronald.com",
                            birthdayDate    : "02/01/1996",
                            age             : 40,  
                            city            : "São Paulo",
                            avatar          : "https://static.vecteezy.com/ti/vetor-gratis/p1/2275847-avatar-masculino-perfil-icone-de-homem-caucasiano-sorridente-vetor.jpg",
                            occupation      : "Student",
                            xp              : 100,
                            level           : 17
                        }} /> 
                    </div>
                </div>
                <div className="prfl__updts">
                    
                </div>
            </div>
        </section>
    );
}

export default Profile;