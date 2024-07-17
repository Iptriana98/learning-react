import React from 'react'
import { getGifs } from '../helpers/getGifs'

export const GifGrid = ({ category }) => {
    getGifs(category)

    return (
        <div>GifGrid</div>
    )
}
