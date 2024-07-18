import React from 'react'

export const GifCardItem = ({title, url}) => {
    return (
        <div className="card-grid">
            <image src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
