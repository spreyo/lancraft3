import React from 'react'
import { ATeamList } from '../components/ATeam/ATeamList'
import { Header } from '../components/ATeam/Header'
import { Spacer } from '../components/Spacer'

export const ATeam = () => {
    return (
        <>
            <Spacer px="9vw" />
            <Header />
            <ATeamList />
            <Spacer px="9vw" />
        </>
    )
}
