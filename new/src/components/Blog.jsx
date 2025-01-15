import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Blog() {
  return (
    <>
    <div className="blogBlock ">
      <div className='blogContent '>
         <div className=' blogHeading d-flex flex-row justify-content-between'> 
        <div>
             <h3 className="textTop">
            News
        </h3>
        <h3 className='roboto-800 text-primary-emphasis py-1'>
        Discover weekly content about organic food, & more
        </h3>
        </div>
             <div>
               <button className='vegBtn rounded rounded-3 roboto-700 text-primary-emphasis bg-light p-3 border-1 d-flex align-items-center'>
               More News
                   <span className='iconWrap bg-opacity-150 rounded rounded-5 mx-2'>
                     <FontAwesomeIcon icon={faArrowRight} className='text-light bg-opacity-150 p-1' />
                   </span>
                 </button>
                   </div>    
      </div>
        <div className='cardBlogWrap  d-flex flex-row justify-content-center'>
        <div className='cardBlog p-3'>
            <img src="/image9.png" alt="Spinache image" className='blogImage rounded rounded-5'/>
            <span className=' blogTag1  text-center bg-light roboto-800 m-3'>
            25 <br />
            Nov
            </span>
                <div className="textBlockBlog1 bg-light rounded rounded-5 ">
         <span className='d-flex flex-row'>
     <FontAwesomeIcon icon={faUser} className='text-warning  p-1' /> 
    <p>By Rachi Card</p>
        </span>
        <h5 className='roboto-800 text-primary-emphasis py-'>
            The Benefits of Vitamin D & How to Get It
        </h5>
  <p className='simpleText open-sans-400'>
  Simply dummy text of the printing and typesetting <br />
   industry. Lorem Ipsum
 </p>
  <button className='vegBtn rounded rounded-3  roboto-500text-primary-emphasis  p-2 border-1 d-flex align-items-center'>
         Read More
             <span className='iconWrap bg-opacity-150 rounded rounded-5 mx-2'>
               <FontAwesomeIcon icon={faArrowRight} className='text-light bg-opacity-150 p-1' />
             </span>
           </button>
        </div>
        </div>
    
        <div className='cardBlog p-3'>
            <img src="/image10.png" alt="Tomatos image" className='blogImage rounded rounded-5'/>
            <span className=' blogTag2  text-center bg-light  m-3'>
            25 <br />
            Nov
            </span>
            <div className="textBlockBlog2 bg-light rounded rounded-5">
         <span className='d-flex flex-row'>
     <FontAwesomeIcon icon={faUser} className='text-warning  p-1' /> 
    <p>By Rachi Card</p>
        </span>
        <h5 className='roboto-800 text-primary-emphasis py-'>
        Our Favourite Summertime Tommeto
        </h5>
  <p className='simpleText  open-sans-400'>
  Simply dummy text of the printing and typesetting <br />
   industry. Lorem Ipsum
 </p>
  <button className='vegBtn rounded rounded-3 text-primary-emphasis  p-2 border-1 d-flex align-items-center'>
         Read More
             <span className='iconWrap bg-opacity-150 rounded rounded-5 mx-2'>
               <FontAwesomeIcon icon={faArrowRight} className='text-light bg-opacity-150 p-1' />
             </span>
           </button>
        </div>
        </div>
  
      </div>
      </div>
     
    </div>
      
    </>
  )
}
