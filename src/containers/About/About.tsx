import { LinkButton, H2 } from 'ui'

import './About.scss'

export const About = () => {
    return (
        <section className="about">
            <div className="about__container container">
                <H2>
                The EXPORT NAVIGATOR Consulting Agency team is a group of highly qualified specialists in the field of international trade. Our company helps to reformat your export or create it from scratch.
                </H2>
                <LinkButton to='/about'>About Us</LinkButton>
            </div>
        </section>
    )
}