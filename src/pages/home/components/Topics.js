import React from "react";

import MainTitle from "../../../components/title/MainTitle";

import { FaOptinMonster } from 'react-icons/fa';

function Topics () {
    return (
        <section className="actns">
            <MainTitle description="meu progresso" icon={<FaOptinMonster />} />
            <div className="actns__tpcs">
                <div className="actns__tpcs__srvc">
                    <img alt="" className="actns__tpcs__srvc__img" src="https://newtrade.com.br/wp-content/uploads/2017/01/tecnologia-12-01.jpg" />
                </div>
                <div className="actns__tpcs__dscrptn">
                    Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor 
                </div>
            </div>    
        </section>
    );
}

export default Topics;