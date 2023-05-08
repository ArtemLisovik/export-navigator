import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

import { AppDispatch, RootState } from 'store/store'
import { getTeam } from '../store/teamThunk'
import { H2, Loader } from 'ui'
import { TeamItem } from '../TeamItem/TeamItem'


import './TeamList.scss'


export const TeamList = () => {
    const {t} = useTranslation()
 
    const {team, loading} = useSelector((state: RootState) => state.team)

    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(getTeam())
    }, [])

    const view = team?.map((teammate: any, index: number) => {
        return <TeamItem
            delay={index/15}
            key={teammate.name}
            name={teammate.name}
            info={teammate.info} 
            avatar={teammate.avatar}/>
    })

    return (
        <div className="team-list">
            <H2 color={{ color: 'var(--color-text2)' }}>{t("main.pages.team.subtitle")}</H2>
            <ul className="team-list__list">
                {loading ? <Loader/> : view}
            </ul>
        </div>
    )
}
