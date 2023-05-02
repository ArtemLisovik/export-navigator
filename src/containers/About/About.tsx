import { LinkButton, H2 } from 'ui'

import './About.scss'

export const About = () => {
    return (
        <section className="about">
            <div className="about__container container">
                <H2>
                    Export Navigator is a business consulting firm. We aim to help New York-based companies achieve their long-term growth.
                </H2>
                <LinkButton to='/about'>About Us</LinkButton>
            </div>
        </section>
    )
}