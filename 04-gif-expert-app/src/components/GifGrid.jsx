import React from 'react'
import { GifCardItem } from './GifCardItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { LoadingMessage } from './LoadingMessage';

export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>
            <LoadingMessage isLoading={isLoading} />
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
