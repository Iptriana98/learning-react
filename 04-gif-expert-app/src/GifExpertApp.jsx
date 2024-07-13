import { useState } from 'react'
export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

    const handleAdd = () => {
        setCategories([...categories, 'HunterXHunter'])
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            <button onClick={handleAdd}>Add</button>
            <ol>
                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    )
}
