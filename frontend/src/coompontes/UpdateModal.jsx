import React, { useState } from 'react'

const UpdateModal = ({onSave,onCancleEdit,currentText,id}) => {
     const [newText, setNewText] =useState(currentText)
    const handleSubmit = (e) => {
        e.preventDefault()
        onSave(id,newText)
    }
  return (
    <div>
       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white rounded-xl shadow-lg p-5 w-50">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                    Edit Todo
                </h2>
                <form onSubmit={handleSubmit} >
                    <input
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                        className="w-full p-1 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <div className="flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onCancleEdit}
                            className="px-4 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default UpdateModal
