import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Categories() {
    const products=[
        {
      id: 1,
      tag: 'Vegetable',
      imgSrc: '/product1.png',
      altText: 'Broccoli',
      description: 'Calabrese Broccoli',
      priceDisabled: 20,
      price: 13,
      rating: 5,
      link: '#',  
        },
        {
     id: 2,
     tag: 'Fresh',
    imgSrc: '/product2.png',
    altText: 'Bananas',
    description: 'Fresh Banana Fruites',
    priceDisabled: 20,
    price: 14,
    rating: 5,
    link: '#',  
     },
     {
      id: 3,
      tag: 'Millets',
     imgSrc: '/product3.png',
     altText: 'Pistachios',
     description: 'White Nuts',
     priceDisabled: 20,
     price: 15,
     rating: 5,
     link: '#',  
      },
      {
        id: 4,
        tag: 'Vegetable',
       imgSrc: '/product4.png',
       altText: 'Red tomato',
       description: 'Vegan Red Tomato',
       priceDisabled: 20,
       price: 17,
       rating: 5,
       link: '#',  
        },
        {
          id: 5,
          tag: 'Health',
         imgSrc: '/product5.png',
         altText: 'Beang',
         description: 'Mung Bean',
         priceDisabled: 20,
         price: 11,
         rating: 5,
         link: '#',  
          },
          {
            id: 6,
            tag: 'Nuts',
           imgSrc: '/product6.png',
           altText: 'Nuts image',
           description: 'Brown Hazelnut',
           priceDisabled: 20,
           price: 12,
           rating: 5,
           link: '#',  
            },
            {
              id: 7,
              tag: 'Fresh',
             imgSrc: '/product7.png',
             altText: 'Eggs image',
             description: 'Eggs',
             priceDisabled: 20,
             price: 15,
             rating: 5,
             link: '#',  
              }, {
                id: 8,
                tag: 'Fresh',
               imgSrc: '/product8.png',
               altText: 'Bread image',
               description: 'Zelco Suji Elaichi Rusk',
               priceDisabled: 20,
               price: 15,
               rating: 5,
               link: '#',  
                }
    ]
  return (
    <>
      <div className="conteiner my-3 prodBlock">
         <div className="text">
        <h3 className='textTop text text-center'>Categories </h3>
        <h4 className=' roboto-800 text-primary-emphasis text-center mx-2'>Our Products</h4>
      </div>
      <div className="productList d-flex flex-row flex-wrap justify-content-center gap-1" id='prodList'>
  {products.map(product => (
    <div key={product.id} className="product card  rounded rounded-5 p-3 ">
        <button className=' w-50  text-light abovBtn rounded rounded-2'>{product.tag}</button>
      <img src={product.imgSrc} alt={product.altText} className="product-image w-100" />
      <h3 className="product-description border-bottom w-75  mx-3 my-5 text-center text-primary-emphasis ">{product.description}</h3>
      <div className=' cardBot d-flex flex-row justify-content-between'>
        <p className="product-price text-body-emphasis my-5"><span className='text-secondary disabledText p-1'>{product.priceDisabled} $ </span>{product.price} $.</p>
      <div className="rating p-5">
      {Array.from({ length: product.rating }).map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className="text-warning" />
              ))}
      </div>
      </div>
    </div>
  ))}

</div>
     <button className='abovBtn  categBtn rounded rounded-3 text-light bg-opacity-150 p-2 border-1 d-flex align-items-center  mx-3 my-3'>
           Load More
          <span className=' iconWrap bg-opacity-150 rounded rounded-5 mx-2'>
           <FontAwesomeIcon icon={faArrowRight} className='text-light bg-opacity-150 p-1' />
          </span>
          </button>

      </div>
     

    </>
  )
}
