import { ServicesItem } from '../ServicesItem/ServicesItem'
import './ServicesList.scss'

import strategy from 'assets/img/strategy.webp'
import trainig from 'assets/img/training.webp'
import development from 'assets/img/development.webp'

export const ServicesList = () => {
    return (
        <ul className="services-list">
            {/* <ServicesItem
                image={strategy}
                title='Strategic business planning'
                descr='Our professional consultants will assess your current situation and help you redefine your vision. Subsequently, they will create and execute a strategic plan on how to achieve the vision.' /> */}

            <ServicesItem
                extraClass='reversed'
                image={development}
                title='Integrated company export project managment'
                descr={
                    [
                        "- analysis of sales markets;",
                        "- identification of the company's advantages over foreign competitors;",
                        "- determination of optimal sales channels, methods of marketing communications;",
                        "- substantiation of marketing decisions;",
                        "- determination of the competitiveness of companies in a particular market.",
                        "- benchmarking.",
                        "- Product management."
                    ]
                }

            />
            <ServicesItem
                image={trainig}
                title='Marketing analysis for export'
                descr={[
                    "- analysis of sales markets;",
                    "- identification of the company's advantages over foreign competitors;",
                    "- determination of optimal sales channels, methods of marketing communications;",
                    "- substantiation of marketing decisions;",
                    "- determination of the competitiveness of companies in a particular market.",
                    "- benchmarking.",
                    "- Product management."
                ]} />
        </ul>
    )
}
