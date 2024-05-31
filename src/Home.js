import React from 'react'
import Product from './Product.js'
import './Home.css'

function Home() {
  return (
    <div className='home'>
        <img
         className='home-image'
         src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
         alt='' />

         {/* Product id, title, price, rating, image */}
        <div className='home-row'>
         <Product 
         id='21345'
         title='The Lean Startup: How Constant Innovation Creates Radically Successfully Buisenesses Paperback'
         price={115.205}
         rating={5}
         image='https://images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg'
         />
         <Product 
         id='25464'
         title='Campus OG-D4 White Sneakers for Men | Trendy Casual Sneaker Shoes from Water-Resistant Upper | Super-Soft Insole | Secure and Supportive Lace-Up Closure'
         price={70}
         rating={5}
         image='https://m.media-amazon.com/images/I/517DzpVlsEL._SY500_.jpg'
         />
        </div>
        <div className='home-row'>
        <Product 
         id='54685'
         title='Titan White Dial Black Band Analog Stainless Steel Watch for Men -NR1595NM01'
         price={105}
         rating={5}
         image='https://m.media-amazon.com/images/I/61bMavETkyL._SX522_.jpg'
         />
         <Product 
         id='23432'
         title='Luxurious Wall Lamp with Adjustable Colour Changing Function (Black Square - 053)'
         price={55}
         rating={5}
         image='https://m.media-amazon.com/images/I/51t5ZLgkVbL._SY445_SX342_QL70_FMwebp_.jpg'
         />
         <Product 
         id='12464'
         title='Peacock Wall Mounted LED Night Lamp Antique Wall Light Lamp for Living Room and Bedroom(Yellow)'
         price={95}
         rating={5}
         image='https://m.media-amazon.com/images/I/51lHmSNQWaL._SY445_SX342_QL70_FMwebp_.jpg'
         />
        </div>
        <div className='home-row'>
        <Product 
         id='45647'
         title='LG 139 cm (55 inches) 4K Ultra HD Smart LED TV 55UR7500PSC (Dark Iron Gray)'
         price={165}
         rating={5}
         image='https://m.media-amazon.com/images/I/51VHE19B6hL._SY300_SX300_QL70_FMwebp_.jpg'
         />
        </div>
         
    </div>
  )
}

export default Home


