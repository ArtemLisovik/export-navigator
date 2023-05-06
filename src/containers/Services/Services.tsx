import { LinkButton, H2 } from 'ui'

import './Services.scss'
import { Li } from 'ui/Li/Li'

export const Services = () => {
  return (
    <section className="services">
        <div className="services__container container">
            <H2 color={{color: 'rgb(17,17,17)'}}>
                Our business consulting services include:
            </H2>
            <ul className="services__list">
                <Li className="services__item">
                    <h3 className="services__title">Strategic business planning in export</h3>
                    <p className="services__text">Our professional consultants will assess your current situation and help you redefine your vision. Subsequently, they will create and execute a strategic plan for export direction.</p>
                </Li>
                <Li className="services__item">
                    <h3 className="services__title">Marketing analysis for export</h3>
                    <p className="services__text">Our team helps you to analyze sales markets, identify the company's advantages over foreign competitors, and determine optimal sales channels as well as the  methods of marketing communications.</p>
                </Li>
                <Li className="services__item">
                    <h3 className="services__title">Integrated management of the company's export project</h3>
                    <p className="services__text">We offer complete solutions, such as outsource your export department or parts of markets that are not covered by your export destination.</p>
                </Li>
            </ul>

            <LinkButton to='/services' type='dark'>Our Offering</LinkButton>
        </div>
    </section>
  )
}
