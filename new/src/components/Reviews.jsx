import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';
import { Navigation } from 'swiper/modules';

export default function Reviews() {
  const customers = [
    {
      id: 11,
      imgSrc: '/user1.jpg',
      altText: 'User image',
      description: 'Simply dummy text of the printing and typesetting industry.',
      rating: 5,
      name: 'Sara Taylor',
      category: 'Consumer',
      link: '#',
    },
    {
      id: 12,
      imgSrc: '/user1.jpg',
      altText: 'Another user image',
      description: 'Great service and quality products. Highly recommended!',
      rating: 4,
      name: 'John Doe',
      category: 'Consumer',
      link: '#',
    },
    
  ];

  return (
    <div className="revBack position-relative w-100">
      <img src="/background3.png" alt="Background organic image" className="w-100 py-5" />
      <div className="textRev">
        <h3 className="textTop text-center">Testimonial</h3>
        <h4 className="roboto-800 text-primary-emphasis">What Our Customer Saying?</h4>
      </div>
      <div className="reviewsSlide border-bottom ">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {customers.map((customer) => (
            <SwiperSlide key={customer.id}>
              <div className="customerSlide">
                <img src={customer.imgSrc} alt={customer.altText} className="customerImage my-5 py-1" />
            {Array.from({ length: customer.rating }).map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className="text-warning py-2" />
              ))}
    
                <p className="customerDescription open-sans-400 simpleText ">{customer.description}</p>
                <p className="customerName roboto-800 text-primary-emphasis py-2">{customer.name}</p>
                <p className="customerCategory text-secondary">{customer.category}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="advantages conteiner w-50 d-flex flex-row py-3 my-5
      ">
<div className=" circle  bg-light p-5 m-2">
    <h3 className='text-center p-1 roboto-800 text-primary-emphasis '>100%</h3>
    <p className='text-center open-sans-600 text-primary-emphasis'>Organic</p>
</div>
<div className=" circle  bg-light p-5 m-2">
    <h3 className='text-center p-1 roboto-800 text-primary-emphasis '>285</h3>
    <p className='text-center open-sans-600 text-primary-emphasis'>Active Product</p>
</div>
<div className=" circle  bg-light p-5 m-2">
    <h3 className='text-center p-1 roboto-800 text-primary-emphasis '>350+</h3>
    <p className='text-center open-sans-600 text-primary-emphasis'>Organic Orchads</p>
</div>
<div className=" circle  bg-light p-5 m-2">
    <h3 className='text-center p-1 roboto-800 text-primary-emphasis '>25+</h3>
    <p className='text-center open-sans-600 text-primary-emphasis'>Years of Farming</p>
</div>
      </div>
    </div>
  );
}
