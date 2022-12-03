import React from "react";

import { FaOptinMonster } from 'react-icons/fa';
import MainTitle from "../../../components/title/MainTitle";
import Emoji from 'a11y-react-emoji';

/**
 *
 * @returns
 */

function CreateActions () {

    return (

        <section className="actns actns--create">
            <a className="emoji--title emoji--title--noback"  href="/criar">
                <Emoji className="emoji--navigation" symbol={"🆕"} label="love" />
                <MainTitle description="Criar" descriptionUnder="" isCarousel={false} icon={<FaOptinMonster />} />
            </a>
            <Emoji className="emoji--create" symbol={"➕"} label="love" />
        </section>
    );
};

export default CreateActions;
