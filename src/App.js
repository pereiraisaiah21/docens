import React, { useState, useEffect } from "react";
import api from "./services/api";

import UserData from "./UserData";
import SiteRoutes from "./routes";

import './App.scss';

/**
 *
 * @returns
 */

function App() {

  const [userDataValues, setUserDataValues] = useState({
    data  : [],
    isLogged : true,
    typeUser : "default",
    error : ""
  });

  const changeBodyIdentifier = function ( userType ) {
    userType !== "default" ? document.querySelector("body").classList.add("df-t") : document.querySelector("body").classList.add("df-u");
    return;
  }

  useEffect(() => {

    api
      .get( "https://jsonplaceholder.typicode.com/users/1" )
      .then( response => {

          setUserDataValues({
              ...userDataValues,
              data : response.data
          });
          changeBodyIdentifier(response.data.name);
      })
      .catch( err =>
          setUserDataValues({
              ...userDataValues,
              error : err
          })
      );
    }, []);

  return (

    <div className="App">
        <UserData.Provider value={{userDataValues}}>
            <SiteRoutes />
        </UserData.Provider>
    </div>
  );
}

export default App;
