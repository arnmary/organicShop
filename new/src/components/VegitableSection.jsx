import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function VegitableSection() {
  const products=[
    {
  id: 9,
  tag: 'Vegetable',
  imgSrc: '/product9.png',
  altText: 'Broccoli',
  description: 'Broccoli',
  priceDisabled: 20,
  price: 11,
  rating: 5,
  link: '#',  
    },
    {
 id: 10,
 tag: 'Vegetable',
imgSrc: '/product10.png',
altText: 'Zucchini',
description: 'Green zucchini',
priceDisabled: 20,
price: 12,
rating: 5,
link: '#',  
 },
 {
  id: 11,
  tag: 'Vegetable',
 imgSrc: '/product11.png',
 altText: 'Onion',
 description: 'White onion',
 priceDisabled: 20,
 price: 17,
 rating: 5,
 link: '#',  
  },
  {
    id: 12,
    tag: 'Vegetable',
   imgSrc: '/product12.png',
   altText: 'Cabbage',
   description: 'White cabbage',
   priceDisabled: 20,
   price: 17,
   rating: 5,
   link: '#',  
    }
  ]
  return (
    <>
     <div className=" vegitables conteiner w-100 bg-opacity-50 position-relative py-5">
        <div>
            <div className=" vegContent w-50  d-flex justify-content-between">
              <div>
                <h3 className='textTop'>
            Offer
            </h3>
            <h3 className='vegHeading roboto-800 text-light'>
            We Offer Organic For You
            </h3> 
              </div>
           
              <div>
        <button className='vegBtn rounded rounded-3 text-primary-emphasis   border-1 d-flex align-items-center'>
            View All Product
            <span className='iconWrap bg-opacity-150 rounded rounded-5 mx-2'>
              <FontAwesomeIcon icon={faArrowRight} className='text-light bg-opacity-150 p-1' />
            </span>
          </button>
            </div> 
        </div>
     <div className="cardBlock product-list w-50 d-flex flex-row  justify-content-between py-5">
      {products.map(product => (
      <div key={product.id} className="productVegan card rounded rounded-2 p-2 m-1">
      <button className=' w-75  text-light vegBtnTag  rounded rounded-2'>{product.tag}</button>
      <img src={product.imgSrc} alt={product.altText} className="product-image w-100 my-5" />
      <h3 className="product-description vegCardDeck roboto-600 border-bottom w-75  mx-3 my-1 text-center text-primary-emphasis ">{product.description}</h3>
      <div className=' cardVegBot  d-flex flex-row justify-content-between text-end'>
      <p className="product-price vegPrice text-body-emphasis"><span className='text-secondary disabledText vegPrice p-1'>{product.priceDisabled} $ </span>{product.price} $.</p>
      <div className="rating  vegPrice mx-2">
      {Array.from({ length: product.rating }).map((_, index) => (
      <FontAwesomeIcon key={index} icon={faStar} className="text-warning" />
   ))}
   </div>
      </div>
    </div>
  ))}        
    </div>  
    </div>
    </div> 
    <div className='w-100 position-relative'>
<img src="/image5.png" alt="landscape image"className='w-50' />
<div className="textSection">
  <h3 className="textTop py-1">
  Eco Friendly
  </h3>
  <h4 className='roboto-800 text-primary-emphasis py-1'>
  Econis is a Friendly
  Organic Store
  </h4>
  <p className='roboto-500 text-primary-emphasis secondTitle py-0 m-0'>Start with Our Company First</p>
<p className='simpleText open-sans-400 my-1'> 
Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium <br />doloremque laudantium. Sed ut perspiciatis.
</p>
<p className='roboto-500 text-primary-emphasis secondTitle py-0 m-0'>Learn How to Grow Yourself</p>
<p className='simpleText open-sans-400 my-1'> 
Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium <br />doloremque laudantium. Sed ut perspiciatis.
</p>
<p className='roboto-500 text-primary-emphasis secondTitle py-0 m-0'>Farming Strategies of Today</p>
<p className='simpleText open-sans-400 my-1'> 
Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium <br />doloremque laudantium. Sed ut perspiciatis.
</p>
</div>
    </div>
    </>
  )
}
