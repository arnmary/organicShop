import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Description() {
  return (
    <>
      <div className='descBlock container-fluide m-0'>
        
        <div className='titleHeading w-50 d-flex flex-column'> 
          <h2 className='descTitle descTitleYellowtail Yellowtail-500 text-success'>
            100% Natural Food <br />
               </h2>
            <h2 className='descTitle descSecondTitle text-primary-emphasis roboto-800 text-start'>
              Choose the best <br />
              healthier way <br />
              of life
            </h2>
       
          <button className='descBtn rounded rounded-3 text-primary-emphasis  p-2 border-1 d-flex align-items-center'>
            Explore Now
            <span className='iconWrap bg-opacity-150 rounded rounded-5 mx-2'>
              <FontAwesomeIcon icon={faArrowRight} className='text-light bg-opacity-150 p-1' />
            </span>
          </button>
        </div>
        <img src="/vector1.png" alt="Garlic vector" className='descVector1' />
        <img src="/vector2.png" alt="Vector image" className='descVector2' />
        <img src="/vector3.png" alt="Leaves vector" className='descVector3' />
        <img src="/vector4.png" alt="Strawberry vector" className='descVector4' />
        <img src="/vector5.png" alt="Beans vector" className='descVector5' />
        <img src="/vector6.png" alt="Leave vector" className='descVector6' />
        <img src="/vector7.png" alt="Leave vector" className='descVector7' />
        <img src="/vector8.png" alt="Additional vector" className='descVector8' />
        <img src="/image1.png" alt="Background image" className='descImage ' />
      </div>
      <div className='container position-relative imagesBlock d-flex flex-row justify-content-center align-items-center w-100'>
      <div className="leftPart w-50 text-end">
          <img src="/image2.png" alt="Background fruits image" className='leftPartImage p-3 w-75 ' />
          <h3 className='leftPartText Yellowtail-400 text-light m-0'>
          Natural!!
          </h3>
          <p className='text-light roboto-800 m-0'>
            Get Garden <br />
             Fresh Fruits
          </p>
        </div>
        <div className="rightPart w-50 ">
          <img src="/image3.png" alt="Background fruits image" className='rightPartImage p-3 w-75' />
          <h3 className='rightPartText m-0'>Offer!!</h3>
          <p className='roboto-800 m-0'>
          Get 10% off <br />
          on Vegetables</p>
        </div>
        </div>
    </>
  );
}

