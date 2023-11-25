import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'
import './page1.css'


function Page1() {
    const arr = ['12 500 тг', '12 500 тг', '12 500 тг', '12 500 тг', '12 500 тг']
  return (
    <div>
        <Navbar/>
        <div className='main'>
            {arr.map((item, i) => (
            <div>
                <img src="./images/img.png" alt="" />
                <p className='title'>{item}</p>
                <p className='text'>RENAULT Корпус фильтра масляного (с радиатором)</p>
            </div>
            ))}
        </div>
        <Footer/>
    </div>
  )
}

export default Page1