import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Matter from "../matter/Matter";
import Edit from "./components/CreateUpdateMatter";

/**
 * 
 * @returns 
 */

function Content () {

    const {action} = useParams();
    const {id} = useParams();
    const {contentid} = useParams();

    console.log(action, id, contentid)

 
    return (
        <div>

            

        </div>
    );
}

export default Content;