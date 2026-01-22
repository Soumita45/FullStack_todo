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
                <MainSection todo={todo} getAll={getAll}/>
                <Footer />
            </div>
        </div>
    )
}

export default Home
