import React from 'react'
import { useState } from 'react'

export const AddCategory = ({ onAdd }) => {
    const [inputValue, setInputValue] = useState('')

    const onSubmit = (event) => {
        event.preventDefault()
        onAdd( categories => [...categories, inputValue])
        if (inputValue.trim().length <= 1) return
        setInputValue('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder='Add Category'
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
            />

        </form>
    )
}
