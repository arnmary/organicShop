import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function AboutContent() {
  return (
    <>
       <div className='secondBlock container-fluid d-flex flex-row'>
      <div className='conteiner w-50 ms-0'>
          <img src="/image12.png" alt="Vegitables image" className='secondImage'/>
      </div>
      <div className="secondText text-start conteiner w-50  ms-5">
      <h3 className="textTop">About Us</h3>
      <h4 className='mainText roboto-800 text-primary-emphasis mb-3'>
      We do Creative <br />
      Things for Success</h4>
      <p className="simpleText text-start mb-4"
      >Simply dummy text of the printing and typesetting industry. Lorem had ceased  <br />
      to been the industry's standard dummy text ever since the 1500s, when an <br />
       unknown printer took a galley.
      </p>
      <p className='simpleText text-start'>
      Simply dummy text of the printing and typesetting industry. Lorem had ceased <br />
       to been the industry's standard dummy text ever since the 1500s, when an <br />
        unknown printer took a galley.
      </p>
      <div className='d-flex flex-row justify-content-start mt-5'>
      <div className='d-flex flex-row me-3'>
          <img src="/icon3.png" alt="Tractor icon" />
          <h4 className='Roboto-500 text-primary-emphasis text-start'>
              Modern Agriculture <br />
              Equipment
      </h4>
      </div>
      <div className='d-flex flex-row '>
          <img src="/icon4.png" alt="Fabric icon" />
          <h4 className='Roboto-500 text-primary-emphasis text-start'>
          No growth <br />
          hormones are used    
      </h4>
      </div>
      </div>
      <div className="py-5">
           <button className='abovBtn rounded rounded-3 roboto-700 text-light my-5 p-3 d-flex align-items-center'>
                Explore More
              <span className='iconWrap bg-opacity-150 rounded rounded-5 mx-2'>
                   <FontAwesomeIcon icon={faArrowRight} className='text-light bg-opacity-150 p-1' />
                </span>
          </button>
      </div>
      </div>
            </div>
            <div className='thirdBlock conteiner-fluide'>
          <div className="thirdContent">
            <div className="thirdTop d-flex flex-row">
                <div className="textThirdSection w-50">
                    <h3 className="textTop text-start">
                    Why Choose us?
                    </h3>
                    <h4 className="mainText roboto-800 text-primary-emphasis text-start mb-3">
                    We do not buy from the <br />
                    open market & traders.
                    </h4>
                    <p className="simpleText">
                    Simply dummy text of the printing and typesetting industry. Lorem had ceased <br />to been the industry's standard  the 1500s, when an unknown
                    </p>
                    <div className='d-flex flex-row thirdBtn w-75 rounded rounded-5 '>
                    <FontAwesomeIcon icon={faCircleDot} className=' p-1 ms-2 dotIcon'  />
                    <p className='roboto-500 ms-2 my-0'>100% Natural Product</p>
                    </div>
                    <p className="simpletext ms-5">
                    Simply dummy text of the printing and typesetting <br />
                    industry Lorem Ipsum
                    </p>
                    <div className='d-flex flex-row thirdBtn w-75 rounded rounded-5 '>
                    <FontAwesomeIcon icon={faCircleDot} className=' p-1 ms-2 dotIcon'  />
                    <p className='roboto-500 ms-2 my-0'> Increases resistance</p>
                    </div>
                    <p className="simpletext ms-5">
                    Filling, and temptingly healthy, our Biona Organic <br />
                    Granola with Wild Berries is just the thing 
                    </p>
                </div>
                <div className='w-50'>
                    <img src="/image13.jpg" alt="Vegitables image" className='w-100 py-3 ms-2 h-100'/>
                </div>
            </div>
<div className="thirdBottom d-flex flex-row gap-3">
    <div className="specification d-flex flex-column justify-content-center align-content-center px-3 py-5 bg-white w-25">
        <img src="/icon5.png" alt="Cart icon" className='p-1 bg-white w-50 mx-auto' />
        <h5 className="bolt text-center">Return Policy</h5>
        <p className='text-center simpleText'>
            Simply dummy text of <br />
            the printintypesetting <br />
             industry.</p>

    </div>
    <div className="specification d-flex flex-column justify-content-center align-content-center px-3 py-5 bg-white w-25">
        <img src="/icon6.png" alt="Cart icon" className='p-1 bg-white w-50 mx-auto' />
        <h5 className="bolt text-center">100% Fresh</h5>
        <p className='text-center simpleText'>
            Simply dummy text of <br />
            the printintypesetting <br />
             industry.</p>

    </div>
    <div className="specification d-flex flex-column justify-content-center align-content-center px-3 py-5 bg-white w-25">
        <img src="/icon7.png" alt="Cart icon" className='p-1 bg-white w-50 mx-auto' />
        <h5 className="bolt text-center">Support 24/7</h5>
        <p className='text-center simpleText'>
            Simply dummy text of <br />
            the printintypesetting <br />
             industry.</p>

    </div>
    <div className="specification d-flex flex-column justify-content-center align-content-center px-3 py-5 bg-white w-25">
        <img src="/icon8.png" alt="Cart icon" className='p-1 bg-white w-50 mx-auto' />
        <h5 className="bolt text-center">Secured Payment
        </h5>
        <p className='text-center simpleText'>
            Simply dummy text of <br />
            the printintypesetting <br />
             industry.</p>

    </div>
</div>
          </div>
          <div className="fouthBlock container-fluid W-100">
<div className="fourthContent">
    <h5 className="textTop text-center">Team</h5>
    <h4 className='mainText roboto-800 text-primary-emphasis text-center mb-3'>Our Organic Experts</h4>
    <p className='simpleText text-center'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's <br />
     standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

    <div className="fourthBottom d-flex flex-row gap-2 justify-content-center w-100 ">
        <div className="teamersCard rounded-5 bg-light ">
          <img src="/image14.png" alt="Man photo" />
          <div className='d-flex flex-row justify-content-between my-5 mx-5'>
          <div>
              <h4 className='mainText'> Giovani Bacardo</h4>
              <h5 className='textTop'>Farmer</h5>  
         </div>

         <div className='text-end mt-5'>
               <a href="https://facebook.com" target='blank' className=' text-primary-emphasis p-1'>
                     <FontAwesomeIcon icon={faFacebook} />
                </a>
                 <a href="https://twitter.com" target='blank' className=' text-primary-emphasis p-1 ' >
                     <FontAwesomeIcon icon={faTwitter} />
                 </a>
         </div>
  </div>
 </div>
  <div className="teamersCard rounded-5 bg-light ">
      <img src="/image15.png" alt="Woman photo" />
     <div className='d-flex flex-row justify-content-between my-5 mx-5'>
      <div>
         <h4 className='mainText'>Marianne Loreno</h4>
         <h5 className='textTop'>Designer</h5>  
      </div>

       <div className='text-end mt-5'>
            <a href="https://instagram.com"target='blank' className=' text-primary-emphasis '>
                 <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://facebook.com" target='blank' className=' text-primary-emphasis p-1'>
                  <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com" target='blank' className=' text-primary-emphasis p-1 ' >
                 <FontAwesomeIcon icon={faTwitter} />
            </a>
     </div>
     </div>
</div>
<div className="teamersCard rounded-5 bg-light ">
      <img src="/image16.png" alt="Woman photo" />
     <div className='d-flex flex-row justify-content-between my-5 mx-5'>
      <div>
         <h4 className='mainText'>Riga Pelore</h4>
         <h5 className='textTop'>Farmer</h5>  
      </div>

       <div className='text-end mt-5'>
            <a href="https://instagram.com"target='blank' className=' text-primary-emphasis '>
                 <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://facebook.com" target='blank' className=' text-primary-emphasis p-1'>
                  <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com" target='blank' className=' text-primary-emphasis p-1 ' >
                 <FontAwesomeIcon icon={faTwitter} />
            </a>
     </div>
     </div>
</div>
 </div>
</div>
    </div>
    <div className="fifthBlock conteiner-fluid w-100">
        <div className="fifthContent ">
        <h5 className="textTop text-center">About Us</h5>
        <h4 className='mainText roboto-800 text-light text-center mb-5'>What We Offer for You</h4>
            <div className="cardWraper d-flex flex-row justify-content-center d-sm-row gap-2 w-75 mt-2">
<div className="fifthCard rounded-5 ">
<img src="/image17.png" alt="Spasy image" className='fifthImage'/>
<p className='text-light roboto-500 text-center pt-3' >
Spicy
</p>
</div>
<div className="fifthCard rounded-5">
<img src="/image18.png" alt="Spasy image" className='fifthImage'/>
<p className='text-light roboto-500 text-center pt-3' >
Nuts & Feesd
</p>
</div>
<div className="fifthCard rounded-5">
<img src="/image19.png" alt="Spasy image" className='fifthImage'/>
<p className='text-light roboto-500 text-center pt-3' >
Fruits
</p>
</div>
<div className="fifthCard rounded-5">
<img src="/image20.png" alt="Spasy image" className='fifthImage'/>
<p className='text-light roboto-500 text-center pt-3' >
Vegetable
</p>
</div>

            </div> 
        </div>
    </div>
</div>
    </>
  )
}
