import { doc, getDocs, collection } from 'firebase/firestore'

import { H2 } from 'ui'
import { TeamItem } from '../TeamItem/TeamItem'
import { db } from 'config/firebase'

import './TeamList.scss'
import { useEffect, useState } from 'react'
import { Loader } from 'ui/Loader/Loader'

export const TeamList = () => {
    const [teammates, setTeammates] = useState<[]>()

    useEffect(() => {
        const getTeammates = async () => {
            let result: any = []
            const teammatesRef = collection(db, 'team')
            const teammatesList = await getDocs(teammatesRef)
            teammatesList.forEach(item => result.push(item.data()))
            setTeammates(result)
        }
        getTeammates()
    }, [])

    const view = teammates?.map((teammate: any, index: number) => {
        return <TeamItem
            delay={index/15}
            key={teammate.name}
            name={teammate.name}
            info={teammate.info} />
    })

    return (
        <div className="team-list">
            <H2 color={{ color: 'var(--color-text2)' }}>Export Navigator team of professional</H2>
            <ul className="team-list__list">
                {view ? view : <Loader/>}
            </ul>
        </div>
    )
}
