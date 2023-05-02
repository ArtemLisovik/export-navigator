import { H3 } from 'ui'
import { schema } from './helpers/schema'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { FormInput} from './components/FormInput/FormInput'
import { FormTextArea} from './components/FormTextArea/FormTextArea'

import './Form.scss'
import { IData, sendMessageTelegram } from './helpers/telegram'


export const Form = () => {

    const methods = useForm<IData>({
        resolver: yupResolver(schema),
        reValidateMode: 'onChange',
    })

    const { handleSubmit, formState: { errors } } = methods

    const onHandleSubmit: SubmitHandler<IData> = async (data) => {
        console.log('done')
        sendMessageTelegram(data)
    }

    return (
        <FormProvider {...methods}>
            <form className='form' onSubmit={handleSubmit(onHandleSubmit)}>
                <H3 color='rgb(17, 17, 17)'>
                    Let's Connect
                </H3>
                <div className="form__section">
                    <div className="form__section-inner">
                        <FormInput inputName='firstName' placeholder='First name' />
                    </div>
                    <div className="form__section-inner">
                        <FormInput inputName='lastName' placeholder='Last name' />

                    </div>
                </div>
                <FormInput inputName='email' placeholder='Email' />
                <FormInput inputName='phone' type='number' placeholder='Phone number' />

                <FormTextArea inputName='message' placeholder='Enter your message' />

                <button className='form__button'>Send Message</button>

            </form>
        </FormProvider>
    )
}
