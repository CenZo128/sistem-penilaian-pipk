import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Home from '../pages/HomePage'
import Users from '../pages/User/User'
import AddUser from '../pages/User/AddUser'

const MainPage = () => {
    return (
        <div className="col-md-10">
            <div className="w-100 main-navbar">
                <nav className="navbar navbar-
                expand-lg navbar-light bg-light">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <p>Sistem Penilaian PIPK</p>
                                </li>
                            </ul>
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        User's Name
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item" href="#">Account</a></li>
                                        <li><a className="dropdown-item" href="#">Log Out</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </nav>
            </div>
            <div className="w-100 main-page">
                <Routes>
                    <Route exact path='/' element={<Home></Home>}></Route>
                    <Route exact path='/users' element={<Users></Users>}></Route>
                    <Route exact path='/users/add' element={<AddUser></AddUser>}></Route>
                </Routes>

            </div>
        </div>
    )
}

export default MainPage