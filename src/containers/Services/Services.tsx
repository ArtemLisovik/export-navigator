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
                    <h3 className="services__title">Strategic business planning</h3>
                    <p className="services__text">Our professional consultants will assess your current situation and help you redefine your vision. Subsequently, they will create and execute a strategic plan on how to achieve the vision.</p>
                </Li>
                <Li className="services__item">
                    <h3 className="services__title">Strategic business planning</h3>
                    <p className="services__text">Our professional consultants will assess your current situation and help you redefine your vision. Subsequently, they will create and execute a strategic plan on how to achieve the vision.</p>
                </Li>
                <Li className="services__item">
                    <h3 className="services__title">Strategic business planning</h3>
                    <p className="services__text">Our professional consultants will assess your current situation and help you redefine your vision. Subsequently, they will create and execute a strategic plan on how to achieve the vision.</p>
                </Li>
            </ul>

            <LinkButton to='/services' type='dark'>Our Offering</LinkButton>
        </div>
    </section>
  )
}
