import { H2, Button } from 'ui'
import './Promo.scss'

export const Promo = () => {
    return (
        <section className="promo">
            <div className="promo__container container">
                <div className="promo__title">
                    <H2>Quality business consultancy for growth.</H2>
                    <Button>Contact Us</Button>
                </div>
            </div>
        </section>
    )
}
