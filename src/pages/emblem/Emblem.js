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
                xp : 20000,
                icon : <FaRedhat className="stdnt__mdl stdnt__mdl--smth1" />
            },
            {
                name : "Prodigio",
                xp : 40000,
                icon : <FaRedhat className="stdnt__mdl stdnt__mdl--smth2" />
            },
            {
                name : "Bronze",
                xp : 60000,
                icon : <FaMedal className="stdnt__mdl stdnt__mdl--mdl3" />
            },
            {
                name : "Prata",
                xp : 80000,
                icon : <FaMedal className="stdnt__mdl stdnt__mdl--mdl2" />
            },
            {
                name : "Ouro",
                xp : 100000,
                icon : <FaMedal className="stdnt__mdl stdnt__mdl--mdl1" />
            },
            {
                name : "Diamante Rosa",
                xp : 160000,
                icon : <FaRegGem className="stdnt__mdl stdnt__mdl--dmnd4" />
            },
            {
                name : "Diamante Azul",
                xp : 180000,
                icon : <FaRegGem className="stdnt__mdl stdnt__mdl--dmnd6" />
            },
            {
                name : "Diamante Laranja",
                xp : 220000,
                icon : <FaRegGem className="stdnt__mdl stdnt__mdl--dmnd7" />
            },
            {
                name : "Rubi",
                xp : 280000,
                icon : <FaRegGem className="stdnt__mdl stdnt__mdl--dmnd8" />
            },
            {
                name : "Safira",
                xp : 320000,
                icon : <FaRegGem className="stdnt__mdl stdnt__mdl--dmnd9" />
            },
            {
                name : "Diamante Amarelo",
                xp : 360000,
                icon : <FaRegGem className="stdnt__mdl stdnt__mdl--dmnd11" />
            },
            {
                name : "Diamante Vermelho",
                xp : 500000,
                icon : <FaRegGem className="stdnt__mdl stdnt__mdl--dmnd12" />
            },
            {
                name : "Esmeralda",
                xp : 600000,
                icon : <FaRegGem className="stdnt__mdl stdnt__mdl--dmnd13" />
            },
            {
                name : "Espinela",
                xp : 900000,
                icon : <FaRegGem className="stdnt__mdl stdnt__mdl--dmnd14" />
            },
            {
                name : "Opala",
                xp : 1000000,
                icon : <FaRegGem className="stdnt__mdl stdnt__mdl--dmnd15" />
            },
            {
                name : "Falcon",
                xp : 1020000,
                icon : <FaRocket className="stdnt__mdl stdnt__mdl--rckt1" />
            },
            {
                name : "Saturn V",
                xp : 1500000,
                icon : <FaRocket className="stdnt__mdl stdnt__mdl--rckt2" />
            },
            {
                name : "Starship",
                xp : 2000000,
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
