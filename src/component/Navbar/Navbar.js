import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom' 

function Navbar() {
  return (
    <div>
        <header>
          <div className="top">
            <img src="images/city.png" alt="" className="rasm" />
            <h2>Бесплатная доставка заказов до конца декабря!</h2>
          </div>
          <div className="navbar">
            <img src="images/ezy.svg" alt="" />
            <div className="items">
              <Link to={'/'}><p>О нас</p> </Link>
              <Link to={'/page2'}><p>Помощь</p> </Link>
              <Link to={'/page3'}><p>Продавцу</p> </Link>
              <Link to={'/page4'}><p>Покупателю</p> </Link>
              <Link to={'*'}><p>Контакты</p></Link>
            </div>
            <div className="search-part">
              <input type="text" placeholder="Введите номер детали, название или VIN" />
                <i className="fa-solid fa-clock-rotate-left"></i>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="user-part">
              <div>
                <img src="images/Group 159.svg" alt="" className="icon" />
              </div>
              <div>
                <img src="images/Group (2).svg" alt="" className="icon" />
              </div>
            </div>
          </div>
          <div className="categories">
            <p>Каталог</p>
            <p>ТО  / фильтра</p>
            <p>Тормозная система</p>
            <p>Двигатель  / выхлоп</p>
            <p>Коробка передач</p>
            <p>Охлождение  / отопление</p>
            <p>Электрика  /освещение</p>
            <p>Кузов  /элементы</p>
            
          </div>
        </header>
    </div>
  )
}

export default Navbar