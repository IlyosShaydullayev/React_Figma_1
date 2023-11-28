import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'
import Catalog from '../../component/catalog/catalog'
import './page3.css'

function Page3() {
    const product = <div className='product'>
        <img src="./images/Rectangle 69 (1).png" alt="" className='img'/>
        <div className='infor'>
                <h2>Шины зимние</h2>
                <h4 className='cost'>99 999 тг.</h4>
            <h3>б/у, 265/65/R17 <br/> Зимние шипованные  265/65/R17 состояние новых шин </h3>
            <div>
                <p>Алматы</p>
                <p>22 сентября</p>
                <p>22 просмотра</p>
            </div>
            <img src="./images/Frame.png" alt="" className='icon'/>
        </div>
    </div>
    const lastProduct = <div className='lastProduct'> 
        <img src="./images/Rectangle 69.png" alt="" />
        <div>
            <h2>Колодки тормозные дисковые</h2>
            <p>Toyota Camry</p>
            <h4>99 999 тг.</h4>
        </div>
    </div>
  return (
    <div>
        <Navbar/>
            <div className='page-three'>
                <Catalog/>
                <div className='weekl'>
                    <p className='weekl-par'>Главная / Запчасти / Колодки тормозные дисковые</p>
                    <h2 className='weekl-title'>Колодки тормозные дисковые</h2>
                    <div className='products'>
                        {product}
                        {product}
                        {product}
                        {product}
                        {product}
                        {product}
                        {product}
                    </div>
                </div>
                <div className='lasts'>
                    <h3>🔥 Горящие предложения недели</h3>
                    <div className='last-products'>
                        {lastProduct}
                        {lastProduct}
                        {lastProduct}
                        {lastProduct}
                        {lastProduct}
                        {lastProduct}
                    </div>
                </div>
            </div>
        <Footer/>
    </div>
  )
}

export default Page3