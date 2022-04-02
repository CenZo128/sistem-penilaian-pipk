import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Home from '../pages/HomePage'
import Users from '../pages/User'

const MainPage = () => {
    return (
        <div className="col-md-10">
            <div className="w-100 main-navbar">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav me-auto">
                                <li class="nav-item">
                                    <p>Sistem Penilaian PIPK</p>
                                </li>
                            </ul>
                            <ul className="navbar-nav ms-auto">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        User's Name
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a class="dropdown-item" href="#">Account</a></li>
                                        <li><a class="dropdown-item" href="#">Log Out</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                </nav>
            </div>
            <div className="w-100 main-page">
                <Routes>
                    <Route exact path='/' element={<Home></Home>}></Route>
                    <Route exact path ='/users' element={<Users></Users>}></Route>
                </Routes>

            </div>
        </div>
    )
}

export default MainPage