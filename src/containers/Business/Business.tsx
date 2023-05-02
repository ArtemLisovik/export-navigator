import { H2 } from 'ui'

import './Business.scss'

import image1 from 'assets/img/item1.jpg'
import image2 from 'assets/img/about_promo.webp'

export const Business = () => {
  return (
    <section className="business">
        <div className="business__container container">
            <H2 color={{color: 'rgb(17, 17, 17)'}}>
                Business consultancy done right.
            </H2>
            <div className="business__collages">
                <div className="business__collages-item">
                    <img src={image1} alt="" className="business__collages-image" />
                </div>
                <div className="business__collages-item">
                    <img src={image2} alt="" className="business__collages-image" />
                </div>
            </div>
        </div>
    </section>
  )
}