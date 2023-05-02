import { H3, H4, Img, P } from 'ui'
import { SectionPromo } from 'containers'

import poster from 'assets/img/about_decor.webp'
import promo from 'assets/img/about_promo.webp'

import './AboutCompany.scss'

export const AboutCompany = () => {
    return (
        <>

            <section className="aboutCompany">
                <SectionPromo title='Export Navigator Consulting Agency' img={promo} />
                <div className="aboutCompany__container container">
                    <div className="aboutCompany__descr">
                        <H3>
                            About company
                        </H3>
                        <P className="aboutCompany__text">
                            The EXPORT NAVIGATOR Consulting Agency team is a group of highly qualified specialists in the field of international trade, business digitalization and development of new business lines. Our main task is to promote the development of your business, open up new prospects in foreign markets, help you look at things from a new angle!
                        </P>
                        <P className="aboutCompany__text">
                            Working with us today is your global business tomorrow.
                        </P>
                        <P className="aboutCompany__text">
                            The company began its work in 2019, providing comprehensive assistance to entrepreneurs/manufacturers in carrying out export activities: searching for buyers abroad, analyzing foreign markets, building an export strategy, preparing for participation in international exhibitions, supporting export contracts, foreign economic transactions, etc.
                        </P>
                        <P className="aboutCompany__text">
                            Thanks to the extensive practical experience of our specialists in the field of export (10 years or more), the team has a wide base of foreign importers, traders interested in Ukrainian products, and has developed its own methods for the effective entry of enterprises into foreign markets.
                        </P>
                        <P className="aboutCompany__text">EXPORT NAVIGATOR is your reliable partner in export consulting.</P>
                    </div>
                    <div className="aboutCompany__poster">
                        <Img src={poster} alt="poster" className="aboutCompany__poster-img" />
                    </div>

                </div>
            </section>

            <section className="advantages">
                <div className="advantages__container container">
                    <H3>
                        Mission and Values
                    </H3>
                    <P className="aboutCompany__text">
                        Our mission is to help our clients maximize their export potential by developing their knowledge and skills in international trade. We strive to encourage our clients to be successful in the international arena and provide them with access to programs that will help them in this.
                    </P>
                    <P className="aboutCompany__text">
                        We believe in strategic partnerships and strengthening relationships with our clients in order to share the opportunities of international trade and ensure their business success abroad.
                    </P>
                    <P className="aboutCompany__text">
                        Our value is the accumulated experience in the development of international relations, which we use for the benefit of our clients. We are dedicated to providing them with expert assistance in resolving any issues related to international operations and achieve success in exports.
                    </P>

                </div>
            </section>

            <section className="benefits">
                <div className="benefits__container container">
                    <H3>
                        Benefits of working with us
                    </H3>
                    <H4>Experience and expertise</H4>
                    <P className="aboutCompany__text">
                        The experience of our specialists is based on the practical application of the basic principles of international trade. Often, our experts are involved in various projects and have already brought our clients' products to the markets of more than 30 countries around the world. Due to the fact that our team is on the foreign trade market at the moment, we will lead you down a road "without pitfalls", which will allow you to avoid a lot of unnecessary routine and inefficient work.
                        Our experts are highly qualified foreign trade specialists with experience of 10 years and more.
                    </P>
                    <P className="aboutCompany__text">
                        We believe that the success of our clients is our success, so we strive to provide high quality services and an individual approach to each project. We are focused on cooperation with clients who share our values and are aimed at the successful development of their business abroad.
                    </P>
                    <P className="aboutCompany__text">
                        We evaluate different points of view (size, dynamics, conditions, competitors) using cabinet research, statistical analysis, expert interviews, and other market research tools. In most countries, we have research unit partners, interviewer networks, and focus group partners.
                        With us, you can be sure that you will receive expert assistance in resolving all issues related to international operations and achieving success in exporting.
                    </P>

                </div>
            </section>
        </>
    )
}
