import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'
import './page1.css'


function Page1() {
    const arr = ['12 500 тг', '12 500 тг', '12 500 тг', '12 500 тг', '12 500 тг']
  return (
    <div>
        <Navbar/>
        <div>
      <div className="detal-1">
      <div className="detal">
        <div className="detal-container">
          <h1 className='heading1'>подобрать детали</h1>
          <p className="paragraph">найдите недостающие детали именно на ваше транспортное стредство</p>
          <div className="input-box">
            <input type="text" id="" placeholder='Год выпуска'/>
            <input type="text" id="" placeholder='Марка'/>
            <input type="text" id="" placeholder='Модель'/>
            <input type="text" id="" placeholder='Тип кузова'/>
          </div>
          <button className='detal-btn'>НАЙТИ ДЕТАЛИ</button>
        </div>
        <div className="bottom">
            <div className="box">
              <img src='./images/Group (4).svg' alt="yozayotgan rasm" />
              <p>Выбирайте по цене, скорости доставки или расположению</p>
            </div>
            <div className="box">
              <img src='./images/Group.png' alt="coffee rasmi" />
              <h4>589 837</h4>
              <p>запчастей и масел в каталоге</p>
            </div>
            <div className="box">
              <img src='./images/Group 182.svg' alt="kop odamlar rasmi" />
              <p>Средний рейтинг продавцов 4.83 из 5</p>
            </div>
            <div className="box">
              <img src='./images/Group 182 (1).svg' alt="plus rasmi" />
              <p>Подать объявление</p>
            </div>
          </div>
      </div>
      </div>
    </div>
    <div>
      <h2 className='main-title'>Хиты продаж</h2>
      <div className='main'>
            
            {arr.map((item, i) => (
            <div>
                <img src="./images/img.png" alt="" />
                <p className='title'>{item}</p>
                <p className='text'>RENAULT Корпус фильтра масляного (с радиатором)</p>
            </div>
            ))}
        </div>
    </div>
       

        <div>
      <div className='sorted'>
        <h2 className='sorted-title'>Необходимое для каждого авто </h2>
        <div className='sorted-elements'>
          <div className="sorted-1">

          <div className='sort-product'>
            <div className='product-text'>
              <h2>Свечи</h2>
              <p>Свечи зажигания, свечи накала</p>
            </div>
            <img src='./images/Layer 0 1.png' alt="" className='product-img'/>
          </div>

          <div className="sort-product">
            <div className="product-text">
              <h2>Моторные масла</h2>
              <p>Свечи зажигания, свечи накала</p>
              <div className="product-litr">
                <div className="litr">
                  <h3>1 л</h3>
                </div>
                <div className="litr">
                  <h3>4 л</h3>
                </div>
                <div className="litr">
                  <h3>5 л</h3>
                </div>
              </div>
            </div>
            <img src='/images/Layer 0 1 (1).png' alt="" />
          </div>

          <div className="sort-product">
            <div className="product-text">
              <h2>Кузовные запчасти</h2>
              <p>Свечи зажигания, свечи накала</p>
            </div>
            <img src='/images/Layer 0 1 (2).png' alt="" />
          </div>
          </div>

          <div className="sorted-2">

            <div className="sort-product">
              <div className="product-text">
                <h2>Каталог ТО</h2>
                <p>Свечи зажигания, свечи накала</p>
              </div>
              <img src='/images/Layer 0 1 (3).png' alt="" />
            </div>

            <div className="sort-product">
              <div className="product-text">
                <h2>Каталог</h2>
                <p>Свечи зажигания, свечи накала</p>
              </div>
              <img src='/images/Layer 0 1 (4).png' alt="" />
            </div>

            <div className="sort-product">
              <div className="product-text">
                <h2>Коврики</h2>
                <p>Свечи зажигания, свечи накала</p>
              </div>
              <img src='/images/Layer 0 1 (5).png' alt="" />
            </div>

            <div className="sort-product">
              <div className="product-text">
                <h2>Трансмиссионные масла</h2>
                <p>Свечи зажигания, свечи накала</p>
              </div>
              <img src='/images/Layer 0 1 (6).png' alt="" />
            </div>

          </div>

          <div className="sorted-3">
            <div className="sort-product1">
              <div className="product-text1">
                <h2>Поиск запчастей по VIN номеру авто</h2>
                <div className="box-2">
                  <p>Введите номер детали, название или VIN</p>
                  <img src='' alt="" />
                </div>
              </div>
              <img src='/images/Layer 0 1 (7).png' alt="" />
            </div>

            <div className="sort-product">
              <div className="product-text">
                <h2>АКБ</h2>
                <p>Свечи зажигания, свечи накала</p>
                <div className="product-litr">
                  <div className="litr">
                    <h3>Прямая <br /> полярность</h3>
                  </div>
                  <div className="litr">
                    <h3>Обратная <br /> полярность</h3>
                  </div>
                </div>
              </div>
              <img src='/images/Layer 0 1 (8).png' alt="" />
            </div>
          </div>

        </div>
      </div>
    </div>

        
        <Footer/>
    </div>
  )
}

export default Page1