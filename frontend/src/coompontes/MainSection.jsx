import React from 'react'
import Card from './Card'


const MainSection = ({ todo, handleDelete,handleEdit }) => {
    return (
        <div>
            {todo.map((item) => {
                return <Card key={item._id} title={item.title}  id={item._id} handleDelete={handleDelete} handleEdit={handleEdit} ></Card>
            })}
        </div>
    )
}

export default MainSection
