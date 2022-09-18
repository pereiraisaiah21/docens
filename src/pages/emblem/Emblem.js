import React from "react";

import MainTitle from "../../components/title/MainTitle";
import { FaMedal, FaTrophy, FaRegGem, FaRedhat, FaRocket } from 'react-icons/fa';

/**
 *
 * @returns
 */

function Emblem () {

    const emblemsList = {
        data : [
            {
                name : "Emblem",
                xp : 150,
                icon : <FaRedhat className="stdnt__mdl stdnt__mdl--smth1" />
            },
            {
                name : "Emblem",
                xp : 200,
                icon : <FaRedhat className="stdnt__mdl stdnt__mdl--smth2" />
            },
            {
                name : "Emblem",
                xp : 200,
                icon : <FaMedal className="stdnt__mdl stdnt__mdl--mdl1" />
            },
            {
                name : "Emblem",
                xp : 200,
                icon : <FaMedal className="stdnt__mdl stdnt__mdl--mdl2" />
            },
            {
                name : "Emblem",
                xp : 200,
                icon : <FaMedal className="stdnt__mdl stdnt__mdl--mdl3" />
            },
            {
                name : "Emblem",
                xp : 200,
                icon : <FaRegGem className="stdnt__mdl stdnt__mdl--dmnd1" />
            },
            {
                name : "Emblem",
                xp : 200,
                icon : <FaRegGem className="stdnt__mdl stdnt__mdl--dmnd2" />
            },
            {
                name : "Emblem",
                xp : 200,
                icon : <FaRegGem className="stdnt__mdl stdnt__mdl--dmnd3" />
            },
            {
                name : "Emblem",
                xp : 200,
                icon : <FaRegGem className="stdnt__mdl stdnt__mdl--dmnd4" />
            },
            {
                name : "Emblem",
                xp : 200,
                icon : <FaRegGem className="stdnt__mdl stdnt__mdl--dmnd5" />
            },
            {
                name : "Emblem",
                xp : 200,
                icon : <FaRegGem className="stdnt__mdl stdnt__mdl--dmnd6" />
            },
            {
                name : "Emblem",
                xp : 200,
                icon : <FaTrophy className="stdnt__mdl stdnt__mdl--trphy1" />
            },
            {
                name : "Emblem",
                xp : 200,
                icon : <FaTrophy className="stdnt__mdl stdnt__mdl--trphy2" />
            },
            {
                name : "Emblem",
                xp : 200,
                icon : <FaTrophy className="stdnt__mdl stdnt__mdl--trphy3" />
            },
            {
                name : "Emblem",
                xp : 200,
                icon : <FaRocket className="stdnt__mdl stdnt__mdl--rckt1" />
            },
            {
                name : "Emblem",
                xp : 200,
                icon : <FaRocket className="stdnt__mdl stdnt__mdl--rckt2" />
            },
            {
                name : "Emblem",
                xp : 200,
                icon : <FaRocket className="stdnt__mdl stdnt__mdl--rckt3" />
            }
        ]
    };

    return (

        <section className="emblm">
            <MainTitle description="Emblemas" descriptionUnder="Aqui estão todos os emblemas" isCarousel={false} />
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