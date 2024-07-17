import React from 'react'
import { getGifs } from '../helpers/getGifs'
import { useEffect, useState } from 'react'

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
            <ol>
                {
                    images.map(image => (
                        <li key={image.id}>
                            {/* <img src={image.url} alt={image.title} /> */}
                            <p>{image.title}</p>
                        </li>
                    ))
                }
            </ol>
        </>
    )
}
