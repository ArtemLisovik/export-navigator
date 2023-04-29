import { Link } from "react-router-dom"

import './ServicesItem.scss'
import { Img } from "ui"

type ServicesItemProps = {
    image: string,
    title: string,
    descr: string,
    extraClass?: null | 'reversed'
}

export const ServicesItem = ({image, title, descr, extraClass}: ServicesItemProps) => {
  return (
    <li className={`services-item ${extraClass}`}>
        <Img className='services-item__img' src={image} alt="image" />
        <div className="services-item__descr">
            <h4 className="services-item__title">{title}</h4>
            <p className="services-item__text">{descr}</p>
            <Link to='/contacts'>Contact Us</Link>
        </div>
    </li>
  )
}
