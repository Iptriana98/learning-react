import React from 'react'
import { getGifs } from '../helpers/getGifs'
import { useEffect, useState } from 'react'
import { GifCardItem } from './GifCardItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category)
        setImages(newImages)
    }

    useEffect(() => {
        getImages()
    }, [])

    return (
        <>
            <h3>{category}</h3>
                {
                    images.map(image => (
                        <GifCardItem/>
                    ))
                }
        </>
    )
}
