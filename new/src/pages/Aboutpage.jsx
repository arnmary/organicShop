import React from 'react'
import NewsLaterBlock from '../components/NewsLaterBlock';
import AboutContent from '../components/AboutContent';

export default function Aboutpage() {
  return (
    <>
      <div className='conteiner-fluide'>
        <img src="/banner1.png" alt="banner organic shop" className='aboutBanner w-100'/>
      </div>
      <AboutContent></AboutContent>
    
      <NewsLaterBlock></NewsLaterBlock>
    </>
  )
}
