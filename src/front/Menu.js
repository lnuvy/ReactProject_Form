import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/Menu.css'

export default function Menu() {
    return (
        <>
            <Link to="/" className="menu-item">HOME</Link><br/>
            <Link to="/foods" className="menu-item">휴게소 메뉴</Link>
        </>
    )
}