import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
    <nav className='navbar navbar-dark navbar-expand-lg bg-primary'>
        <div className="navbar-brand">
            Note app
        </div>

        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/" exact>Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>
            </li>
        </ul>

    </nav>
)