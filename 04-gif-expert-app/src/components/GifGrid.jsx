import React from 'react'
import { getGifs } from '../helpers/getGifs'
import { useEffect } from 'react'

export const GifGrid = ({ category }) => {
    
    useEffect(() => {
      getGifs(category)

    }, [])
    
    return (
        <div>{category}</div>
    )
}
