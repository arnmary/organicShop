import React from 'react'
import { Link } from 'react-router-dom';
import {FontAwesomeIcon}from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  
  return (
    <>
     <div className="d-flex align-items-center justify-content-center justify-content-between px-5 my-5 border-bottom">
     <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light w-100" aria-label="Main navigation">
          <div className="container-fluid d-flex flex-row align-items-center justify-content-between mx-5">
            <div className="brand  d-flex flex-row align-items-center py-2">
              <Link className="navbar-brand" to="/home">
                <img src="/logo.png" alt="logo img" id="logo" className='logoImg'/>
              </Link>
              <h1 id="mainTitle" className="display-4 fw-bold roboto-700 text-primary-emphasis">
          Organic
              </h1>
            </div>

            <button
              className="navbar-toggler p-0 border-0"
              type="button"
              id="navbarSideCollapse"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExampleDefault"
              aria-controls="navbarsExampleDefault"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse  offcanvas-collapse" id="navbarsExampleDefault">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                  <Link className="nav-link active roboto-500 text-primary-emphasis px-4" aria-current="page" to="/home" id="homePage">
                       Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active roboto-500 text-primary-emphasis px-4" aria-current="page" to="/about" id="about">
                 About us
                  </Link>
                  
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-primary-emphasis px-4" to="/contacts">
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link roboto-500 text-primary-emphasis px-4" to="/delivery">
                   Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link roboto-500 text-primary-emphasis px-4" to="/delivery">
                    News
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle roboto-500 text-primary-emphasis px-4"
                    to="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item roboto-400 text-primary-emphasis" to="/home">Home</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item inter-400 text-primary-emphasis" to="/about">About</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item inter-400 text-primary-emphasis" to="/shop">Shop</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item roboto-400 text-primary-emphasis" to="/service">Service</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item inter-400 text-primary-emphasis" to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item inter-400 text-primary-emphasis" to="/team">Team</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item roboto-400 text-primary-emphasis" to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item roboto-400 text-primary-emphasis" to="/contact">Contact</Link>
                    </li>
                  </ul>
                </li>
               
              </ul>
            
              
            </div>
           
                 <form className="d-flex" role="search">
                <input className=" form-control rounded rounded-5 py-3 me-2 text-primary-emphasis
                " type="search" placeholder="Search" aria-label="Search" />
                <button className='searchBtn rounded rounded-5 bg-success bg-opacity-50'>
                          <FontAwesomeIcon icon={faMagnifyingGlass}className='text-light py-1' />
                </button>
        
              </form>
             
             
              <button className='rounded rounded-5  ms-3 bg-opacity-150 border-0 py-1 mx-3 ' id='basket'>
            
              <Link className="nav-link" to="/cart">
              <FontAwesomeIcon icon={faCartShopping}className='text-light' />
                  </Link>
                  
              </button>
          </div>
        </nav>
    
    </div>
    </>
   
  )
}
