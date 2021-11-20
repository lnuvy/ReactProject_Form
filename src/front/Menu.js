import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

export default function Menu() {
    return (
        <>
            <Link to="/" className="menu-item">HOME</Link><br/>
            <Link to="/about" className="menu-item">ABOUT</Link>
        </>
    )
}