import React from 'react'
import { Link } from 'react-router-dom'
import imglogo from '../../imgs/logo.png'

function HoemNav() {
    return (
        <nav class="navbar navbarHome navbar-expand-lg position-fixed top-0 w-100">
            <div class="container">
                <Link to="/" ><img src={imglogo} width='40' alt="img logo" /></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <Link to={'/login'} class="nav-link" aria-current="page">login</Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/about'} class="nav-link" >About Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/courses'} class="nav-link">Courses</Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/blog'} class="nav-link">Blog</Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/contact'} class="nav-link">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default HoemNav