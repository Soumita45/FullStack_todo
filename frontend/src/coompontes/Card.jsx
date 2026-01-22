import React, { useState } from 'react'
import DeleteModal from './DeleteModal'
import { useNavigate } from 'react-router-dom'

const Card = ({ title, getAll, id }) => {

  const [delModel, setDelModel] = useState(false)
  const [todoId, setTodoId] = useState()
  const navigate = useNavigate()
  return (
    <>
      <div className="flex justify-center">
        <div className="bg-white shadow-md rounded-xl p-1 m-1 w-[350px] border hover:shadow-lg transition">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">
              {title}
            </h2>
            <div className="flex gap-3">
              <button onClick={() => navigate(`update/${id}`, { state: { title } })}
                className="bg-green-500 text-white px-1 py-1 rounded-lg hover:bg-green-600 transition">
                Edit
              </button>
              <button onClick={() => { setDelModel(true); setTodoId(id) }}
                className="bg-red-500 text-white px-1 py-1 rounded-lg hover:bg-red-600 transition ">
                Delete
              </button>
            </div>
          </div>
        </div>
        {delModel && <DeleteModal setDelModel={setDelModel} todoId={todoId} getAll={getAll} />}
      </div>
    </>
  )
}

export default Card
