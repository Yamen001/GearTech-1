import { Route, Routes } from "react-router-dom"
import About from "./About"
import Blog from "./Blog"
import Contact from "./Contact"
import Index from "./Index"
import './home.css'
import Courses from "./Courses"
import HoemNav from "../../Compoents/Navs/HoemNav"
import Footer from "../../Compoents/footer/footer"



function Home() {
    return (
        <>
        <HoemNav />
            <div>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/courses' element={<Courses />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </div>
        <Footer />
        </>
    )
}
export default Home