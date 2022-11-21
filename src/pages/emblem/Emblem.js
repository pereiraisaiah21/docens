import React from "react";

import MainTitle from "../../components/title/MainTitle";
import { FaMedal, FaRegGem, FaRedhat, FaRocket } from 'react-icons/fa';
import Emoji from 'a11y-react-emoji';

/**
 *
 * @returns
 */

function Emblem () {

    const emblemsList = {
        data : [
            {
                name : "Inciante",
                xp : 150,
                icon : <FaRedhat className="stdnt__mdl stdnt__mdl--smth1" />
            },
            {
                name : "Prodigio",
                xp : 250,
                icon : <FaRedhat className="stdnt__mdl stdnt__mdl--smth2" />
            },
            {
                name : "Bronze",
                xp : 350,
                icon : <FaMedal className="stdnt__mdl stdnt__mdl--mdl3" />
            },
            {
                name : "Prata",
                xp : 45000,
                icon : <FaMedal className="stdnt__mdl stdnt__mdl--mdl2" />
            },
            {
                name : "Ouro",
                xp : 60000,
                icon : <FaMedal className="stdnt__mdl stdnt__mdl--mdl1" />
            },
            {
                name : "Diamante Rosa",
                xp : 75000,
                icon : <FaRegGem className="stdnt__mdl stdnt__mdl--dmnd4" />
            },
            {
                name : "Diamante Azul",
                xp : 76000,
                icon : <FaRegGem className="stdnt__mdl stdnt__mdl--dmnd6" />
            },
            {
                name : "Diamante Laranja",
                xp : 67000,
                icon : <FaRegGem className="stdnt__mdl stdnt__mdl--dmnd7" />
            },
            {
                name : "Rubi",
                xp : 69000,
                icon : <FaRegGem className="stdnt__mdl stdnt__mdl--dmnd8" />
            },
            {
                name : "Safira",
                xp : 90000,
                icon : <FaRegGem className="stdnt__mdl stdnt__mdl--dmnd9" />
            },
            {
                name : "Diamante Amarelo",
                xp : 150000,
                icon : <FaRegGem className="stdnt__mdl stdnt__mdl--dmnd11" />
            },
            {
                name : "Diamante Vermelho",
                xp : 212100,
                icon : <FaRegGem className="stdnt__mdl stdnt__mdl--dmnd12" />
            },
            {
                name : "Esmeralda",
                xp : 300000,
                icon : <FaRegGem className="stdnt__mdl stdnt__mdl--dmnd13" />
            },
            {
                name : "Espinela",
                xp : 390000,
                icon : <FaRegGem className="stdnt__mdl stdnt__mdl--dmnd14" />
            },
            {
                name : "Opala",
                xp : 600000,
                icon : <FaRegGem className="stdnt__mdl stdnt__mdl--dmnd15" />
            },
            {
                name : "Falcon",
                xp : 780000,
                icon : <FaRocket className="stdnt__mdl stdnt__mdl--rckt1" />
            },
            {
                name : "Saturn V",
                xp : 790000,
                icon : <FaRocket className="stdnt__mdl stdnt__mdl--rckt2" />
            },
            {
                name : "Starship",
                xp : 980100,
                icon : <FaRocket className="stdnt__mdl stdnt__mdl--rckt3" />
            }
        ]
    };

    return (

        <section className="emblm">
            <div className="emoji--title">
                <Emoji className="emoji--navigation" symbol={"🏅"} label="love" />
                <MainTitle description="Emblemas" descriptionUnder="Aqui estão todos os emblemas" isCarousel={false} />
            </div>
            <div className="emblm__wrp">
                <table className="emblm__tbl">
                    <thead>
                        <tr className="emblm__tbl__ttl">
                            <td>Emblema</td>
                            <td>XP</td>
                            <td>Ícone</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        emblemsList.data.map( ( emblem, key ) => {
                            return (
                                <tr className="emblm__tbl__rw" key={key}>
                                    <td>{emblem.name}</td>
                                    <td>{emblem.xp}</td>
                                    <td>{emblem.icon}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Emblem;