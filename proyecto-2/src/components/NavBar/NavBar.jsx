import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <>
    <header>
    <h1>Watch Mit</h1>
        <nav>
            <ul>
                <li>Home</li>
                <li>For Him</li>
                <li>For Her</li>
                <li>Contact Us</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
    <div className='line'></div>
    </>
  )
}

export default NavBar