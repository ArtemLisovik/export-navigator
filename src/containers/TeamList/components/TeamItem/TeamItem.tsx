import './TeamItem.scss'

import avatar from 'assets/img/avatar.jpg'


type TeamItemProps = {
    name: string,
    info: string,
    delay?: number
}
export const TeamItem = ({ name, info, delay }: TeamItemProps) => {
    return (
        <li className="team-member"
            style={{
                animation: `menuReveal 0.3s ease ${delay}s`,
                animationFillMode: 'forwards'

            }}>
            <div className="team-member__photo">
                <img src={avatar} alt="Member's avatar" />
            </div>
            <div className="team-member__info">
                <h4 className="team-member__name">{name}</h4>
                <p className="team-member__descr">{info}</p>
            </div>
        </li>
    )
}
