import React, { useEffect, useState } from 'react'
import Header from '../coompontes/Header'
import Footer from '../coompontes/Footer'
import axios from 'axios'
import MainSection from '../coompontes/MainSection'
import DeleteModal from '../coompontes/DeleteModal'
import UpdateModal from '../coompontes/UpdateModal'

const Home = () => {
    const [todo, setTodo] = useState([])
    const [text, setText] = useState("")
    const [flag, setFlag] = useState(false)

    const [showDelTodo, setShowDelTodo] = useState(false)
    const [todoToDelete, setTodoToDelete] = useState(null)

    const [showEditTodo, setShowEditTodo] = useState(false)
    const [todoToEdit, setTodoToEdit] = useState(null)

    const getAll = async () => {
        try {
            const res = await axios.get(`http://localhost:8001/todo/getAll`)
            console.log(res.data.data)
            setTodo(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleTodo = async (text) => {
        const data = {
            "title": text
        }
        try {
            setFlag(false)
            const res = await axios.post(`http://localhost:8001/todo/create`, data)
            console.log(res)
            setFlag(true)
            setText('')

        } catch (error) {
            console.log(error)
        }

    }

    const handleDelete = (id) => {
        setShowDelTodo(true)
        setTodoToDelete(id)

    }

    const onConfirm = async (id) => {
        try {
            setFlag(false)
            await axios.delete(`http://localhost:8001/todo/delete/${id}`)
            setFlag(true)
            setShowDelTodo(false)
            setTodoToDelete(null)
        } catch (error) {
            console.log(error)
        }
    }

    const onCancel = async () => {
        setShowDelTodo(false)
        setTodoToDelete(null)

    }

    
    const handleEdit = async (todo) => {
        setShowEditTodo(true)
        setTodoToEdit(todo)
    }

    const onSave = async (id, newText) => {
        const data = {
            "title": newText
        }
        try {
            setFlag(false)
            await axios.put(`http://localhost:8001/todo/update/${id}`, data)
            setFlag(true)
            setShowEditTodo(false)
            setTodoToEdit(null)
        } catch (error) {
            console.log(error)
        }
    }

    const onCancelEdit = async () => {
        setShowEditTodo(false)
        setTodoToEdit(null)
    }

    useEffect(() => {
        getAll()
    }, [flag])

    return (
        <div>
            <div>
                <Header />
                <div className='flex  gap-2 justify-center m-2' >
                    <input type='text' placeholder='Enter text' onChange={(e) => setText(e.target.value)} value={text}
                        className='border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-400' />
                    <button onClick={() => handleTodo(text)} className='bg-blue-500 p-2 text-white'>Add</button>

                </div>
                <MainSection todo={todo} handleDelete={handleDelete} handleEdit={handleEdit} />
                <Footer />
            </div>
            {showDelTodo && <DeleteModal onConfirm={() => onConfirm(todoToDelete)} onCancel={onCancel} />}
            {showEditTodo && <UpdateModal onCancleEdit={onCancelEdit} onSave={onSave}  currentText={todoToEdit.title}  id={todoToEdit._id}/>}
        </div>
    )
}

export default Home
