import React from 'react'

export default function Galery() {
  return (
    <>
      <div className='galeryBlock  w-100  d-flex flex-row justify-content-between'>
        <div className='cardWrap'>
            <img src="/image6.png" alt="Juice image" className='galeryImage'/>
            <button className='galeryBtn rounded rounded-2 bg-light py-3 px-5 roboto-500'>Organic Juice</button>
        </div>
        <div className='cardWrap'>
            <img src="/image7.png" alt="Vegitables image" className='galeryImage'/>
            <button className='galeryBtn rounded rounded-2 bg-light py-3 px-5 roboto-500'>Organic Food</button>
        </div>
        <div className='cardWrap'>
            <img src="/image8.png" alt="Coocies image" className='galeryImage'/>
            <button className='galeryBtn rounded rounded-2 bg-light py-3 px-5 roboto-500'>Nuts Cookis</button>
        </div>
      </div>
    </>
  )
}
