import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/home/Home'
import About from './pages/about/About'
import Blog from './pages/blog/Blog'
import Login from './pages/login/Login'
import Panel from './pages/panel/Panel'
import Course from './pages/course/Course'



function App(){
    return(
        <BrowserRouter>
           <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/blog" element={<Blog />} />
               <Route path="/login" element={<Login />} />
               <Route path="/panel" element={<Panel />} />
               <Route path="/course" element={<Course />} />

                   
               
           </Routes>
        </BrowserRouter>
    )
}
export default App