import React, { useContext, useState, useEffect } from "react";

import UserData from "../../UserData";

import ProfileCard from "./components/ProfileCard";
import NavigationMyStats from "./components/NavigationMyStats";
import NavigationMyProgress from "../home/components/default/NavigationMyProgress";
import FormUpdataUserData from "./components/FormUpdateUserData";

/**
 * 
 * @returns 
 */

function Profile () {

    const { userDataValues } = useContext( UserData );
    const [ typeUser, setTypeUser ] = useState( null );
    const [updateUserData, setUpdateUserData] = useState( false );

    useEffect(() => {
        setTypeUser( userDataValues.typeUser )
    }, [userDataValues]);

    const navTabsHandler = function( event ) {
        event.preventDefault();
        
        let buttonActive = document.querySelector( ".prfl__nav__button--active" );
        let sectionActive = document.querySelector( `div[vop='${event.target.getAttribute("vop")}']` );
        let sectionWillActive = document.querySelector( "div.prfl__nav__section--active" );

        buttonActive.classList.remove( "prfl__nav__button--active" );
        sectionWillActive.classList.remove( "prfl__nav__section--active" );
 
        event.target.classList.add( "prfl__nav__button--active" );
        sectionActive.classList.add( "prfl__nav__section--active" );
    }

    return (
        <section className="prfl">
            <div className="prfl__wrpp">
                <div className="prfl__bg">
                    <img src="https://placehold.jp/1500x550.png" alt="" className="" />
                    {
                        updateUserData
                        ?
                        <div className="prfl__dt prfl__dt--updt">
                            <FormUpdataUserData data={userDataValues.data} setUpdateOpen={setUpdateUserData} action="update" />
                        </div>
                        :
                        <>
                            <div className="prfl__dt">
                                <ProfileCard userData={userDataValues.data} setUpdateUserData={setUpdateUserData} />
                            </div>
                        </>
                    }
                </div>
                {
                    typeUser === "default"
                    ?
                    <div className="prfl__updts">
                        <nav className="prfl__nav">
                            <ul className="prfl__nav__list">
                                <li className="prfl__nav__item">
                                    <button onClick={navTabsHandler} vop="#stats" className="prfl__nav__button prfl__nav__button--active">
                                        Minha estatística
                                    </button>
                                </li>
                                <li className="prfl__nav__item">
                                    <button onClick={navTabsHandler} vop="#matter" className="prfl__nav__button">
                                        Minhas matérias
                                    </button>
                                </li>
                            </ul>
                        </nav>
                        <div className="prfl__nav__section prfl__nav__section--active" vop="#stats">
                            <NavigationMyStats className="chrt__myStts" slider={true} siderTitle={false} />
                        </div>
                        <div className="prfl__nav__section" vop="#matter">
                            <NavigationMyProgress slider={false} />
                        </div>
                    </div>
                    :
                    ""
                }
            </div>
        </section>
    );
}

export default Profile;