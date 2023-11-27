import React from 'react'
import './catalog.css'
function catalog() {
    const cities = ["Toshkent", "New York", "London", "Paris"];
    const initialBrands = [
        { id: 'denso', name: 'DENSO' },
        { id: 'febi', name: 'FEBI' },
        { id: 'ngk', name: 'NGK' },
        { id: 'nissan', name: 'NISSAN' },
        {id: 'renault', name: 'RENAULT' },
        { id: 'vag', name: 'VAG' },
      ];
  return (
    <div>
        <div className='container'>
            <div className='nav-menu'>
                <img src='images/Group 199.svg' alt='' className='catalog-element'/>
                <img src='images/Group 198.svg' alt='' className='catalog-element-child'/>
            </div>
            <div className='catalog'>
                <div className='region'>
                    <select id="cities" name="cities">
                    {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                    ))}
                    </select>
                    <form action='' className='one-form'>
                        <input type='checkbox' className='check' name="delivery" id='deliver'/>
                        <label for="deliver">Доставка из других регионов</label>
                    </form>
                    
                </div> 
                <div className='costs'>
                    <h2>Цена </h2>
                </div>  
                <div className='manufacturer'>
                    <h2>Производитель </h2>
                    <form action=''>
                        {initialBrands.map((brand) => (
                            <div key={brand.id} className='forms'>
                            <input
                                type='checkbox' className='check'
                                id={brand.id}
                                name={brand.name}
                            />
                            <label htmlFor={brand.id}>{brand.name}</label>
                            </div>
                        ))}
                    </form>
                </div> 
                <div className='holati'>
                    <h2>Состяние</h2>
                    <form action="">
                        <div className='forms'>
                            <input type="radio" id="all" name='condition'  value="all"/>
                            <label for="all">Все</label>
                        </div>
                        <div className='forms'>
                            <input type="radio" id="new" name='condition'  value="new"/>
                            <label for="new">Новые</label>
                        </div>
                        <div className='forms'>
                            <input type="radio" id="used" name='condition'  value="used"/>
                            <label for="used">Б/у</label>
                        </div>
                         
                         
                    </form>
                </div>
                <div className='sort'>
                    <h2>Сортировать</h2>
                    <form action="" >
                        <div className='forms'>
                            <input type="radio" id="date" name='sort'  value="date"/>
                            <label for="date">по дате объявления</label>
                        </div>
                        <div className='forms'>
                            <input type="radio" id="cost" name='sort'  value="cost"/>
                            <label for="cost">по цене</label>
                        </div>
                        <div className='forms'>
                            <input type="radio" id="rating" name='sort'  value="rating"/>
                            <label for="rating">по рейтингу</label>
                        </div>
                        <br/>
                        <div className='forms'>
                            <input type='checkbox' className='check' name="photo" id='photo'/>
                            <label for="photo">Только с фото</label>
                        </div>
                        <div className='forms'>
                            <input type='checkbox' className='check' name="delivery-box" id='delivery-box'/>
                            <label for="delivery-box">Доставка в бокс</label>
                        </div><br/>
                        <div className='forms'>
                            <input type="radio" id="cash" name='sort1'  value="cash"/>
                            <label for="cash">В наличии</label>
                        </div>
                        <div className='forms'>
                            <input type="radio" id="order" name='sort1'  value="order"/> 
                            <label for="order">На заказ</label>
                        </div>
                        <br/>
                        <p className='cancel-form'><img src='images/Vector (2).svg'/> Сбросить фильтры</p>
                    </form>
                </div>    

            </div>
        </div>
    </div>
  )
}

export default catalog