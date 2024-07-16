import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

    const handleAdd = (newCategory) => {
        setCategories([...categories, newCategory])
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onAdd={handleAdd}/>
            {/* <button onClick={handleAdd}>Add</button> */}
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
