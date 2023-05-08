import './TeamItem.scss'

import noAvatar from 'assets/img/avatar.jpg'


type TeamItemProps = {
    name: string,
    info: string,
    delay?: number,
    avatar?: string
}
export const TeamItem = ({ name, info, delay, avatar }: TeamItemProps) => {
    return (
        <li className="team-member"
            style={{
                animation: `menuReveal 0.3s ease ${delay}s`,
                animationFillMode: 'forwards'

            }}>
            <div className="team-member__photo">
                <img loading='lazy' src={avatar ? avatar : noAvatar} alt="Member's avatar" />
            </div>
            <div className="team-member__info">
                <h4 className="team-member__name">{name}</h4>
                <p className="team-member__descr">{info}</p>
            </div>
        </li>
    )
}
