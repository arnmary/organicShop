import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import{ faPinterest} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const nowYear = new Date().getFullYear();
  const dataInfo = `© ${nowYear}`;
  const menuItems = [
    { name: 'Home', to: '/home' },
    { name: 'Licence', to: '/licence' },
    { name: 'Service', to: '/service' },
    { name: 'FAQ', to: '/faq' },
    { name: 'About us', to: '/about' },
  ];

  return (
    <div className="footerContainer container-fluid  bg-light" id="footer">
      <div className="d-flex flex-row justify-content-between border-bottom pb-3 mb-3 mx-5">
       
        <div className="contacts border-end  text-end p-5">
          <h5 className='text-primary-emphasis Roboto-700'>Contact Us</h5>
          <ul>
            <li>
              <p className='Open-sans-700 my-1'>Email</p>
              <a href="mailto:needhelp@Organia.com">needhelp@Organia.com</a>
            </li>
            <li>
              <p className='Open-sans-700 my-1'>Phone</p>
              <a href="tel:666888888">666 888 888</a>
            </li>
            <li>
              <p className='Open-sans-700 my-1'>Address</p>
              <address>88 road, borklyn street, USA</address>
            </li>
          </ul>
        </div>
        {/* Company Info */}
        <div className="d-flex flex-column">
            <div className="d-flex flex-row justify-content-center footerBrend">
                    <Link className="navbar-brand my-1 mx-3" to="/home">
            <img src="/logo.png" alt="logo img" id="logo" className="logoImg" />
          </Link>
          <h1 className="display-4 fw-bold text-primary-emphasis mb-2">Organic</h1>
            </div>
      
          <p>
            Simply dummy text of the printing and typesetting industry. <br />
            Lorem Ipsum simply dummy text of the printing.
          </p>
          <div className="icons d-flex flex-row justify-content-center">
            <ul className="list-unstyled d-flex">
              <li key="instagram-icon" className='iconBack'>
                <a href="https://instagram.com"target='blank' className=' text-primary-emphasis '>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li key="facebook-icon" className='iconBack'>
                <a href="https://facebook.com" target='blank' className=' text-primary-emphasis '>
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li key="twitter-icon"className='iconBack'>
                <a href="https://twitter.com" target='blank' className=' text-primary-emphasis ' >
                <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li key="pinterest-icon" className='iconBack'>
                <a href="https://pinterest.com" target='blank' className=' text-primary-emphasis '>
                <FontAwesomeIcon icon={faPinterest} />
                </a>
              </li>

            </ul>
          </div>
        </div>
        {/* Utility Pages */}
        <div className="d-flex flex-column border-start text-start p-5">
          <h5 className='text-primary-emphasis roboto-700'>Utility Pages</h5>
          <ul className="nav flex-column">
            {menuItems.map((item, index) => (
              <li className="nav-item " key={index}>
                <Link className=" footLink nav-link Open-sans-400 text-secondary px-1 py-3" to={item.to}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="footerText text-center ">{dataInfo} <span className='boltText'>Organic.</span> </p>
    </div>
  );
}
