import { H3, P } from 'ui'
import './Contacts.scss'
import { Form } from 'containers'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'


export const Contacts = () => {
    const { t } = useTranslation()

    return (
        <div className='contactsPage__wrapper'>
            <section className="contacts">
                <div className="contacts__container container">
                    <div className="contacts__title">
                        <H3>
                            {t('main.pages.contacts.title')}
                        </H3>
                    </div>
                    <motion.div
                        className="contacts__form"
                        initial={{ y: '30vh', opacity: 0 }}
                        transition={{ duration: 0.7 }}
                        animate={{ y: '0', opacity: 1 }}
                    >
                        <Form />
                    </motion.div>
                </div>
            </section>

            <section className="location">
                <div className="location__container container">
                    <div className="location__info">
                        <H3 color='rgb(17,17,17)'>
                            {t('main.pages.contacts.subtitle')}
                        </H3>
                        <P className="location__info-item">
                            <a href="tel:+380954220414">+380954220414</a>
                        </P>
                        <P className="location__info-item">123 address st.</P>
                        <P className="location__info-item">
                            <a href="mailto:export.navigator.org@gmail.com">e-mail:<br />export.navigator.org@gmail.com</a>
                        </P>
                        <P className="location__info-item">
                            <a target='_blank' href="exportnavigator.org">www.exportnavigator.org.com</a>
                        </P>
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
