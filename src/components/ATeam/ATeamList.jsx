import React from 'react'
import { User } from './User'

export const ATeamList = () => {
    return (
        <div id="ateam-list-wrap">
            <div id="ateam-list">
                <User username="Profiikk" rank="majitel" skin="/src/three/images/Profiikk.png" />
                <User username="Slovakiaman22" rank="vedenie" skin="/src/three/images/Slovakiaman22.png" />
                <User username="Wallllleeee" rank="hlbuilder" />
                <User username="MaxAugustin" rank="builder" />
                <User username="Stepka2012" rank="builder" />
                <User username="DwEad0_" rank="builder" />
                <User username="Afteriq" rank="hlhelper" skin="/src/three/images/afteriq.png" />
                <User username="xXSuperHero007Xx" rank="helper" />
                <User username="vojtasw" rank="developer" />
                <User username="Cool_acc007" rank="hlmoderator" />
                <User username="mizerop" rank="moderator" />

            </div>

        </div>
    )
}
