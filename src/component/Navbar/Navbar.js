import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div>
        <header>
            <nav>
                <div className='nav-navbar'>
                    <img src="./images/city.png" alt="" />
                    <p className='p-title'>Бесплатная доставка заказов до конца декабря!</p>
                </div>
                <div className='nav-body'></div>
                <div className='nav-footer'></div>
            </nav>
        </header>
    </div>
  )
}

export default Navbar