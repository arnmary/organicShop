import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
export default function AboutUsSection() {
  return (
    <>
    <div className=" container-fluide aboutBlock w-100">
    <img src="/image4.png" alt="Background fruits image" className='aboutBackgr'/>
    <div className='conteiner textBlock  text-start w-50'>
        <h3 className='textTop mx-2'>About Us</h3>
        <h4 className='mainText roboto-800 text-primary-emphasis mx-2'>
         We Believe in Working <br />
          Accredited Farmers
          </h4>
          <p className='simpleText text-secondary mx-2'>
          Simply dummy text of the printing and typesetting industry. Lorem had ceased to <br />
          been the industry's standard dummy text ever since the 1500s, when an unknown <br />printer took a galley.
          </p>
          <div className='d-flex flex-row'>
          <img src="/icon1.png" alt="Plate leave image" className='m-2'/>
          <div className='m-2'>
         <h4 className='roboto-800 text-primary-emphasis'>Organic Foods Only</h4>
         <p className='simpleText text-secondary'>
            Simply dummy text of the printing and typesetting <br />
             industry. Lorem Ipsum</p>
          </div>
          </div>
          <div className='d-flex flex-row'>
          <img src="/icon2.png" alt="Plate leave image" className='m-2'/>
          <div className='m-2'>
         <h4 className='roboto-800 text-primary-emphasis'>Quality Standards</h4>
         <p className='simpleText text-secondary'>
            Simply dummy text of the printing and typesetting <br />
             industry. Lorem Ipsum</p>
          </div>
          </div>
        <button className='abovBtn rounded rounded-3 text-light bg-opacity-150 p-2 border-1 d-flex align-items-center  mx-1 my-3'>
                      Shop Now
        <span className=' iconWrap bg-opacity-150 rounded rounded-5 mx-2'>
         <FontAwesomeIcon icon={faArrowRight} className='text-light bg-opacity-150 p-1' />
        </span>
        </button>
    </div>
    </div>  
    </>
  )
}
