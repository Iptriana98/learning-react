import React from 'react'
import { GifCardItem } from './GifCardItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifCardItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
