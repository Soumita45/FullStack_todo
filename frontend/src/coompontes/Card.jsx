import React from 'react'

const Card = ({ title, handleDelete,id,handleEdit }) => {
  
const handleEditClick = () => {
    handleEdit({
      _id: id,
      title: title
    })
  }
  return (
    <>
      <div className="flex justify-center">
        <div className="bg-white shadow-md rounded-xl p-1 m-1 w-[350px] border hover:shadow-lg transition">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">
              {title}
            </h2>
            <div className="flex gap-3">
              <button onClick={handleEditClick}
              className="bg-green-500 text-white px-1 py-1 rounded-lg hover:bg-green-600 transition">
                Edit
              </button>
              <button onClick={() => handleDelete(id)}
                className="bg-red-500 text-white px-1 py-1 rounded-lg hover:bg-red-600 transition ">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
