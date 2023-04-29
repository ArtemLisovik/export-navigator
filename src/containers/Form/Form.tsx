import { Button, H3 } from 'ui'
import './Form.scss'

export const Form = () => {
    return (
        <form className='form'>
            <H3 color='rgb(17, 17, 17)'>
                Let's Connect
            </H3>
            <div className="form__section">
                <div className="form__section-inner">
                    <label htmlFor='name'>First name</label>
                    <input type="text" name='name' />
                </div>

                <div className="form__section-inner">
                    <label htmlFor='name'>Last name</label>
                    <input type="text" name='name' />
                </div>
            </div>
            <label htmlFor='email'>Email</label>
            <input type="text" name='email' />

            <label htmlFor='phone'>Phone number</label>
            <input type="number" name='phone' />

            <label htmlFor='message'>Enter your message</label>
            <textarea name='message' />

            <button className='form__button'>Send Message</button>

        </form>
    )
}
