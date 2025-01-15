import React from 'react'

export default function NewsLaterBlock() {
  return (
    <>
      <div className='w-100 newsBlock '>
        <div className='contentNews'>
           <img src="/image11.png" alt="Fruits background"  className='newsLaterImage'/>
        <div className=''>
        <h3 className='newsLaterHeading roboto-800'>
        Subscribe to <br />
       our Newsletter
        </h3>
        <form action="email" className='newsForm '>
            
        <input type="amail" id='amail'value="Your Email Address" className='emailInput mx-3'/>
        <input type="submit" value="Subscribe!" className='newsSubmit'/>
        </form>

        </div>
        </div>
      </div>
    </>
  )
}
