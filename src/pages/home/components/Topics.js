import React from "react";

import MainTitle from "../../../components/title/MainTitle";
import { FaOptinMonster } from 'react-icons/fa';

function Topics () {

    return (

        <section className="actns actns--bg-01">
            <MainTitle description="Saba mais" icon={<FaOptinMonster />} />
            <div className="actns__tpcs">
                <div className="actns__tpcs__srvc">
                    <img alt="" className="actns__tpcs__srvc__img" src="https://newtrade.com.br/wp-content/uploads/2017/01/tecnologia-12-01.jpg" />
                </div>
                <div className="actns__tpcs__dscrptn">
                    <p>
                        Somos a Docens. Sua plataforma de ensino. Com muita disposição, estamos aqui para lhe ajudar a absorver a maior quantidade de matérias, de maneira ligeira.
                    </p>
                    <p></p>
                </div>
            </div>
        </section>
    );
}

export default Topics;