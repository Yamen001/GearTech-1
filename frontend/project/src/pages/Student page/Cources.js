import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../ThemeContext"
// Componets
import StudentCources from "../../Compoents/Cards/StudentCources"
import Toolbar from "../../Compoents/Toolbar/Toobar"
import "../../pages/Home pages/home.css"


function Courses() {
    let Theme = useContext(ThemeContext).Theme
    useEffect(()=>{
        let buttonActive = document.querySelector("button.active")
        buttonActive.style.backgroundColor = Theme.iconBackground
    },[])
    return (
        <div className="courses-container bg-white d-flex flex-column px-lg-0">
            <StudentCources />
            <Toolbar />
        </div>
    )
}
export default Courses