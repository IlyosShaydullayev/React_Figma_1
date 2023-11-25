import React from 'react'
import './Navbar.css'

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
              <p >О нас</p>
              <p >Помощь</p>
              <p >Продавцу</p>
              <p >Покупателю</p>
              <p >Контакты</p>
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