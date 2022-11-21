import React from 'react';

import MainTitle from '../../components/title/MainTitle';
import Emoji from 'a11y-react-emoji';

/**
 * 
 * @returns 
 */

function Greetings () {

    return (

        <section className="insttcnl">
            <div className="emoji--title">
                <Emoji className="emoji--navigation" symbol={"🧏"} label="love" />
                <MainTitle description="agradecimentos" descriptionUnder="" isCarousel={false} />
            </div>
            <main className="insttcnl__txt">
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                </p>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                </p>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                </p>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                </p>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                </p>
            </main>
        </section>
    );
}

export default Greetings;