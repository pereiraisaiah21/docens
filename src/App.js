import React, { useState, useEffect } from "react";
import axios from "axios";

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
    typeUser : "teacher",
    error : ""
  });

  useEffect(() => {
    axios.get( "https://jsonplaceholder.typicode.com/users/1" )
    .then( response => {
      setUserDataValues({
        ...userDataValues,
        data : response.data
      });
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
