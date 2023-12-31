import React, { useState } from "react";

import "./page4.css";
import Navbar from "./../../component/Navbar/Navbar";
import Footer from "./../../component/Footer/Footer";

function Page4() {
  const arr = [
    {
      url: './images/download.jpg'
    },
    {
      url: './images/download (1).jpg'
    },
    {
      url: './images/download (2).jpg'
    },
    {
      url: './images/thumb__600_0_0_0_crop.jpg'
    }, 
    {
      url: './images/images.jpg'
    }
  ];
  const btnArr = ["Продавцы", "Отзывы", "Характеристики"];
  const obj = [
    {
      name: "Happy store",
      cost: "16 385 ₸",
      star: "/images/stars.png",
    },
    {
      name: "TechnoSklad",
      cost: "18 385 ₸",
      star: "/images/stars (1).png",
    },
    {
      name: "Ecomi-kz",
      cost: "20 385 ₸",
      star: "/images/stars (1).png",
    },
    {
      name: "Smart-buyer kz",
      cost: "21 000 ₸",
      star: "/images/stars (1).png",
    },
    {
      name: "Michelle Digital",
      cost: "21 500 ₸",
      star: "/images/stars (2).png",
    },
  ];
  const btn1 = obj.map((item, i) => (
    <div className="data-div">
      <div className="div-1">
        <p className="title">{item.name}</p>
        <img src={item.star} alt="" />
        <span className="span">130 отзывов</span>
      </div>
      <div className="div-2">
        <div className="text1">
          Доставка из: Срок доставки: В наличии: Состояние:
        </div>
        <div className="text2">г. Алматы од заказ, до 10 дней 1 шт. Новый</div>
      </div>
      <div className="div-3">
        <p>{item.cost}</p>
      </div>
      <div className="div-4">
        <button>СЕРВИС</button>
        <button>ВЫБРАТЬ</button>
      </div>
      <hr />
    </div>
  ));

  const btn2 = <div className="btn2-data">Войдите, чтобы оставить отзыв</div>;

  const btn3 = (
    <div className="btn3-data">
      <p>
        Масло SGAZPROMNEFT Super 10W-40 для самых современных малотоксичных
        двигателей, соответствующих требованиям Евро 5, 4, 3, 2, и US 2002 по
        выбросам.
      </p>
      <div>
        <div style={{ display: "flex", margin: "50px auto" }}>
          <div>
            <p style={{ fontSize: "14px" }}>Производитель</p>
            <br />
            <p style={{ fontSize: "14px" }}>Наименование</p>
          </div>
          <div style={{ marginLeft: "-215px" }}>
            <p style={{ fontSize: "14px" }}>GAZPROMNEFT</p>
            <br />
            <p style={{ fontSize: "14px" }}>Моторное масло</p>
          </div>
        </div>
        <bold className="total-character">Общие характеристики</bold>
        <div className="characters">
          <div>
            Ширина (мм) <br /> Толщина (мм)
            <br /> Сторона установки <br /> Дополнительный артикул / Доп.
            информация 2 <br /> Высота (мм) 64.1 мм <br /> Датчик износа
          </div>
          <div>
            193.1 мм <br /> 19.1 мм <br /> передний мост <br /> с прижимной
            пластиной <br /> 64.1 мм <br />
            подготовлено для датчика износа колодок
          </div>
        </div>
      </div>
    </div>
  );
  

  const [productInfoPage, setproductInfoPage] = useState(1);
  function handleClick(id) {
    if (id === 1) {
      setproductInfoPage(1);
    } else if (id === 2) {
      setproductInfoPage(2);
    } else if (id === 3) {
      setproductInfoPage(3);
    }
  }


  const [handleImg, setHandleImg] = useState(0)

  return (
    <div>
      <Navbar />

      <div className="main2">
        <p className="title">
          Главная / Моторные масла / GAZPROMNEFT Super 10W-40
        </p>
        <div className="main-top">
          <div>
            <img src={arr[handleImg].url} alt="" className="img" />
            <div>
              {arr.map((item, i) => (
                <img src={item.url} alt="" onClick={() => setHandleImg(i)} className={(i) === handleImg ?  "active-img imgs " : 'imgs'} />
              ))}
            </div>
          </div>
          <div>
            <p className="title">Моторное масло GAZPROMNEFT Super 10W-40 5л</p>
            <div>
              <div>
                <img src="./images/stars.png" alt="" />
                <span>5.0</span>
              </div>
              <div>
                <span>130 отзывов</span>
              </div>
              <div>
                <span>288 заказов </span>
              </div>
            </div>
            <p className="sum">Цена</p>
            <p className="money">16 385 ₸</p>
            <div className="btns">
              <button>ВЫБРАТЬ ПРОДАВЦА</button>
              <button>ЗАПИСАТЬСЯ НА СЕРВИС</button>
            </div>
            <p className="last-p">Комплектация</p>
            <ul className="ul">
              <li>объем: 5 л</li>
            </ul>
          </div>
        </div>
        <div className="katta-main">
          <div className="main-body">
            <div className="body-btns">
              {btnArr.map((item, i) => (
                <button onClick={() => handleClick(i + 1)} className={ (i+1) === productInfoPage ?  "active btn " : "btn"}>
                  {item}
                </button>
              ))}
            </div>
            {productInfoPage === 1 && btn1}
            {productInfoPage === 2 && btn2}
            {productInfoPage === 3 && btn3}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Page4;
