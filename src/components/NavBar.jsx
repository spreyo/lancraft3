import React from 'react'

export const NavBar = () => {
    return (
        <div id="navbar">
            <img id="nav-logo" src="/src/three/images/logo.png"></img>

            <ul id="navbar-links">
                <li>
                    <a href="/home"> HOME</a>
                </li>

                <li>
                    <a href="/ateam"> ADMIN TEAM</a>
                </li>
            </ul>
        </div>
    )
}
