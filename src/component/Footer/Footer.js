import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
      <footer>
        <div className='footer-body'>
          <img src="./images/wheel 1.png" alt="" />
          <div>
            <p>Начните продавать на EZY Parts!</p>
            <button>СТАТЬ ПРОДАВЦОМ</button>
          </div>
          <img src="./images/Transmission.png" alt="" />
        </div>
        <div className='footer-main'>
          <img src="./images/banner.png" alt="" />
        </div>
        <div className='footer-footer'>
          <div className='div1 div'>
            <a href="#">Каталог автозапчастей</a>
            <a href="#">О компании</a>
            <a href="#">Помощь</a>
            <a href="#">Покупателю</a>
          </div>
          <div className='div2 div'>
            <a href="#">Продавцу</a>
            <a href="#">Реклама на сайте</a>
            <a href="#">Контакты</a>
          </div>
          <div className='div3 div'>
            <img src="./images/wiki.svg" alt="" />
            <img src="./images/facebook.svg" alt="" />
            <img src="./images/insta.svg" alt="" />
          </div>
          <div className='div4 div'>
            <img src="./images/ezyparts.svg" alt="" />
            <p>© 2021, EZY parts</p>
          </div>
        </div>
        <p className='out-p1'>Используя ezyparts.kz, вы принимаете условия использования сайта</p>
        <p className='out-p2'>Разработка: busnesscenter.kz</p>
      </footer>
    </div>
  )
}

export default Footer