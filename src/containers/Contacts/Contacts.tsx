import { H3 } from 'ui'
import './Contacts.scss'
import { Form } from 'containers'
import { motion } from 'framer-motion'

export const Contacts = () => {
    return (
        <div className='contactsPage__wrapper'>
            <section className="contacts">
                <div className="contacts__container container">
                    <div className="contacts__title">
                        <H3>
                            Looking for professional business consultants? Contact Export Navigator to set up a meeting with our experienced experts.
                        </H3>
                    </div>
                    <motion.div 
                    className="contacts__form"
                    // initial={{transform: 'translateY(50px)'}}
                    initial={{y: '100vh'}}
                    transition={{duration: 1.1}}
                    // animate={{transform: 'translateY(0)'}}
                    animate={{y: '0'}}
                    >
                        <Form />
                    </motion.div>
                </div>
            </section>

            <section className="location">
                <div className="location__container container">
                    <div className="location__info">
                        <H3 color='rgb(17,17,17)'>
                            Our Contact Info
                        </H3>
                        <p className="location__info-item">
                            <a href="tel:+416 887 5555">416 887 5555</a>
                        </p>
                        <p className="location__info-item">123 address st.</p>
                        <p className="location__info-item">
                            <a href="mailto:email@example.com">email@example.com</a>
                        </p>
                        <p className="location__info-item">
                            <a href="yourwebsite.com">yourwebsite.com</a>
                        </p>
                    </div>
                    <div className="location__map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d81197.32878438228!2d30.428224519988266!3d50.50781628990351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x40d4d213a46b9971%3A0xd43b0c9ed64a4a97!2z0J7QsdC-0LvQvtC90YHRjNC60LjQuSDQv9GA0L7RgdC_0LXQutGCLCAx0JEsINCa0LjRl9CyLCDQo9C60YDQsNGX0L3QsCwgMDQyMDU!3m2!1d50.5078373!2d30.4982641!5e0!3m2!1suk!2suk!4v1682761858295!5m2!1suk!2suk" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </section>
        </div>
    )
}
