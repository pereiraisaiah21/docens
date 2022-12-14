import React, { useState, useEffect } from "react";
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
    isLogged : false,
    typeUser : "default",
    token: "",
    error : ""
  });

  const changeBodyIdentifier = function ( userType ) {
    userType !== "teacher" ? document.querySelector("body").classList.add("df-t") : document.querySelector("body").classList.add("df-u");
    return;
  };

  useEffect(() => {

    // api
    //   .get( "https://jsonplaceholder.typicode.com/users/1" )
    //   .then( response => {

    //       setUserDataValues({
    //           ...userDataValues,
    //           data : response.data
    //       });
    //       changeBodyIdentifier(response.data.name);
    //   })
    //   .catch( err =>
    //       setUserDataValues({
    //           ...userDataValues,
    //           error : err
    //       })
    //   );
    }, []);

  return (

    <div className="App">
        <UserData.Provider value={{userDataValues, setUserDataValues}}>
          <SiteRoutes />
          {changeBodyIdentifier(userDataValues.data)}
        </UserData.Provider>
    </div>
  );
}

export default App;
