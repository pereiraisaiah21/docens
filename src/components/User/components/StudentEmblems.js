import React from "react";

import { FaMedal, FaTrophy, FaRegGem, FaRedhat, FaRocket } from 'react-icons/fa';

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function studentEmblems ({
    emblemId
}) {

    return (

        <>
            <span className="stdnt__inf__emblm__xp">
                268 xp
            </span>
            <div className="stdnt__inf__emblm__bx">
                <span>Level </span>
                {emblemId ? <FaRedhat className="stdnt__mdl stdnt__mdl--smth1" /> : "" }
                {emblemId >= 2 ? <FaRedhat className="stdnt__mdl stdnt__mdl--smth2" /> : "" }
                {emblemId >= 3 ? <FaMedal className="stdnt__mdl stdnt__mdl--mdl1" /> : "" }
                {emblemId >= 4 ? <FaMedal className="stdnt__mdl stdnt__mdl--mdl2" /> : "" }
                {emblemId >= 5 ? <FaMedal className="stdnt__mdl stdnt__mdl--mdl3" /> : "" }
                {emblemId >= 6 ? <FaRegGem className="stdnt__mdl stdnt__mdl--dmnd1" /> : "" }
                {emblemId >= 7 ? <FaRegGem className="stdnt__mdl stdnt__mdl--dmnd2" /> : "" }
                {emblemId >= 8 ? <FaRegGem className="stdnt__mdl stdnt__mdl--dmnd3" /> : "" }
                {emblemId >= 9 ? <FaRegGem className="stdnt__mdl stdnt__mdl--dmnd4" /> : "" }
                {emblemId >= 10 ? <FaRegGem className="stdnt__mdl stdnt__mdl--dmnd5" /> : "" }
                {emblemId >= 11 ? <FaRegGem className="stdnt__mdl stdnt__mdl--dmnd6" /> : "" }
                {emblemId >= 12 ? <FaTrophy className="stdnt__mdl stdnt__mdl--trphy1" /> : "" }
                {emblemId >= 13 ? <FaTrophy className="stdnt__mdl stdnt__mdl--trphy2" /> : "" }
                {emblemId >= 14 ? <FaTrophy className="stdnt__mdl stdnt__mdl--trphy3" /> : "" }
                {emblemId >= 15 ? <FaRocket className="stdnt__mdl stdnt__mdl--rckt1" /> : "" }
                {emblemId >= 16 ? <FaRocket className="stdnt__mdl stdnt__mdl--rckt2" /> : "" }
                {emblemId >= 17 ? <FaRocket className="stdnt__mdl stdnt__mdl--rckt3" /> : "" }
            </div>   
        </>
    );
}

export default studentEmblems;