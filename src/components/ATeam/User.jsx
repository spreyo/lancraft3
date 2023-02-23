import React, { useState, useEffect } from 'react'

export const User = ({ username, rank, skin }) => {
    const [userRank, setUserRank] = useState();
    useEffect(() => {
        switch (rank) {
            case "majitel":
                setUserRank(<><h1 style={{ "color": "#d00315", "fontSize": "22px" }}>MAJITEL</h1></>)
                break

            case "hlhelper":
                setUserRank(<><h1 style={{ "color": "#3dc473", "fontSize": "22px" }}>HL.HELPER</h1></>)
                break

            case "helper":
                setUserRank(<><h1 style={{ "color": "#3dc473", "fontSize": "22px" }}>HELPER</h1></>)
                break
            case "vedenie":
                setUserRank(<><h1 style={{ "color": "#a60713", "fontSize": "22px" }}>VEDENIE</h1></>)
                break
            case "hlbuilder":
                setUserRank(<><h1 style={{ "color": "#3c88c0", "fontSize": "22px" }}>HL.BUILDER</h1></>)
                break
            case "builder":
                setUserRank(<><h1 style={{ "color": "#3c88c0", "fontSize": "22px" }}>BUILDER</h1></>)
                break
            case "hlmoderator":
                setUserRank(<><h1 style={{ "color": "#286591", "fontSize": "22px" }}>HL.MODERATOR</h1></>)
                break
            case "moderator":
                setUserRank(<><h1 style={{ "color": "#286591", "fontSize": "22px" }}>MODERATOR</h1></>)
                break
            case "developer":
                setUserRank(<><h1 style={{ "color": "#e27e35", "fontSize": "22px" }}>DEVELOPER</h1></>)
                break

        }
    }, [])
    return (
        <div className='ateam-user'>
            {skin ? <img src={skin} className="ateam-user-img-custom"></img> :
                <img src={`https://api.mineatar.io/face/${username}`} className="ateam-user-img"></img>
            }
            {userRank}<h1 className="ateam-username" style={{ "fontSize": "20px" }}>{username}</h1>
        </div>
    )
}
