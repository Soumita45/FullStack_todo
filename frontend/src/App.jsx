import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import UpdateModal from "./coompontes/UpdateModal"


function App() {

  return (
    <>
    <BrowserRouter>
   <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/update/:id" element={<UpdateModal/>}/>
   </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
