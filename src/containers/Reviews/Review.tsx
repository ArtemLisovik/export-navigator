import './Review.scss'

import avatar from 'assets/img/comment_1.webp'

export const Review = () => {
    return (
        <div className="feedback">
            <div className="feedback__avatar">
                <img src={avatar} alt="avatar" className="feedback__img" />
            </div>
            <div className="feedback__decor">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1664 1792" id="1255327425" className="svg u_1255327425" data-icon-name="fa-quote-right"> <path fill="inherit" d="M768 320v704q0 104-40.5 198.5t-109.5 163.5-163.5 109.5-198.5 40.5h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64q106 0 181-75t75-181v-32q0-40-28-68t-68-28h-224q-80 0-136-56t-56-136v-384q0-80 56-136t136-56h384q80 0 136 56t56 136zM1664 320v704q0 104-40.5 198.5t-109.5 163.5-163.5 109.5-198.5 40.5h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64q106 0 181-75t75-181v-32q0-40-28-68t-68-28h-224q-80 0-136-56t-56-136v-384q0-80 56-136t136-56h384q80 0 136 56t56 136z" id="1851842656"></path>
                </svg>
            </div>
            <p className="feedback__text">We partnered with Export Navigator a year ago; they were instrumental in my enterprise's growth.</p>
            <p className="feedback__title">Jane Faber</p>
        </div>
    )
}
