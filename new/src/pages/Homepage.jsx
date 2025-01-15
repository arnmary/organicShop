import React from 'react'
import Description from '../components/Description'
import AboutUsSection from '../components/AboutUsSection'
import Categories from '../components/Categories'
import Reviews from '../components/Reviews'
import VegitableSection from '../components/VegitableSection'
import Galery from '../components/Galery'
import Blog from '../components/Blog'
import NewsLaterBlock from '../components/NewsLaterBlock'

export default function Homepage() {
  return (
    <div>
      <Description></Description>
    <AboutUsSection></AboutUsSection>
    <Categories></Categories>
    <Reviews></Reviews>
    <VegitableSection></VegitableSection>
    <Galery></Galery>
    <Blog></Blog>
    <NewsLaterBlock></NewsLaterBlock>
    </div>
  )
}

