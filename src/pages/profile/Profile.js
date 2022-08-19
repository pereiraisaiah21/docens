import React, { useState, useContext } from "react";
//import { useParams } from "react-router-dom";

import UserData from "../../UserData";

import ProfileCard from "./components/ProfileCard";
import NavigationMyProgress from "../home/components/NavigationMyProgress";
import FormUpdataUserData from "./components/FormUpdateUserData";

/**
 * 
 * @returns 
 */

function Profile () {

    const {userDataValues} = useContext( UserData );

    //let {username} = useParams();
    const [updateUserData, setUpdateUserData] = useState( false );

    return (
        <section className="prfl">
            <div className="prfl__wrpp">
                <div className="prfl__bg">
                    <img src="https://thumbs.dreamstime.com/b/fb-cover-facebook-watercolor-style-isolated-set-elements-wild-flowers-aquarelle-image-could-be-used-profile-78323435.jpg" alt="" className="" />
                    {
                        updateUserData
                        ?
                        <div className="prfl__dt prfl__dt--updt">
                            <FormUpdataUserData data={userDataValues.data} setUpdateOpen={setUpdateUserData} />
                        </div>
                        :
                        <>
                            <div className="prfl__dt">
                                <ProfileCard userData={userDataValues.data} setUpdateUserData={setUpdateUserData} />
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