import './reset.css'
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import AboutUsSection from './components/AboutUsSection';
import Categories from './components/Categories';
import Reviews from './components/Reviews';
import VegitableSection from './components/VegitableSection';
import Galery from './components/Galery';
import Blog from './components/Blog';
import NewsLaterBlock from './components/NewsLaterBlock';
import Aboutpage from './pages/Aboutpage';
import AboutContent from './components/AboutContent';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>} ></Route>
         <Route path="/home" element={<Homepage/>} />
         <Route path="/about" element={<Aboutpage/>}></Route>
         <Route >
         </Route>
    
       </Routes>
         <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
