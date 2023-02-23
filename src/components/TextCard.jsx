import React from 'react'

export const TextCard = ({ text, heading }) => {
    return (
        <div className="text-card-wrap">
            <div className="text-card" >
                <h1 className="text-card-heading">{heading}</h1>
                <p className="text-card-text">{text}</p>
            </div>
        </div>
    )
}
