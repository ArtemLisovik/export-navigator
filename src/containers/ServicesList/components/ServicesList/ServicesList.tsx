import { ServicesItem } from '../ServicesItem/ServicesItem'
import './ServicesList.scss'

import strategy from 'assets/img/strategy.jpg'
import trainig from 'assets/img/training.jpg'
import development from 'assets/img/development.jpg'

export const ServicesList = () => {
    return (
        <ul className="services-list">
            <ServicesItem
                image={strategy}
                title='Strategic business planning'
                descr='Our professional consultants will assess your current situation and help you redefine your vision. Subsequently, they will create and execute a strategic plan on how to achieve the vision.' />

            <ServicesItem
                extraClass='reversed'
                image={development}
                title='Business development'
                descr='Our business development solutions are designed to help you build long-term value and bring positive industrial disruptions that provide growth opportunities.' />

            <ServicesItem
                image={trainig}
                title='Business training services'
                descr='Our business training services provide a holistic approach that facilitates personal growth and transformations. It focuses on the physical as well as general wellbeing of the client.' />
        </ul>
    )
}
