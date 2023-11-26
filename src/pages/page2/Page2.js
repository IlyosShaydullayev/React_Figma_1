import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'
import Catalog from '../../component/catalog/catalog'
import './page2.css'
function Page2() {
  const cards = <div className='card'>
                  <img src="./images/Rectangle 69.png" alt="" className='img' />
                  <h2>Колодки тормозные дисковые</h2>
                  <p>Toyota Camry</p>
                  <h4>99 999 тг.</h4>
                  <img src="./images/Frame.png" alt="" className='icon' />
                </div>
  return (
    <div>
        <Navbar/>
        <div className='page-two'>
            <Catalog/>
            <div className='container1'>
              <div className='weekly'>
                <p>Главная / Запчасти / Колодки тормозные дисковые</p>
                <h2>Колодки тормозные дисковые</h2>
                <h3>🔥 Горящие предложения недели</h3>
                <div className='cards'>
                  {cards}
                  {cards}
                  {cards}
                  {cards}
                </div>
              </div>
              <div className='line'></div>
              <div className='item-cards'>
                  {cards}
                  {cards}
                  {cards}
                  {cards}
                  {cards}
                  {cards}
                  {cards}
                  {cards}
                  {cards}
                  {cards}
                  {cards}
                  {cards}
                  {cards}
                  {cards}
                  {cards}
                  {cards}
              </div>

            </div>
        </div>

        <Footer/>
    </div>

  )
}

export default Page2