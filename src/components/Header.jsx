import React from 'react'
import { NavLink } from 'react-router-dom'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import AddToCart from './AddToCart';



const Header = () => {

    const menuData = [
        {
            path:'/home',
            name: "Home"
        },
        {
            path:'/about',
            name: "About"
        },
        {
            path: '/contact',
            name: "Contact"
        }
    ];
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
      { name: 'LogIn', value: '1' },
      { name: 'SignUp', value: '2' },
    ];
  
    const navigate = useNavigate();
  const location = useLocation();

  const handleAuthToggle = (route) => {
    navigate(`/${route}`, { state: { backgroundLocation: location } });
  };
  
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand  as={NavLink} to="/" className='brand'>
            <img src={logo} alt="Logo" width="100" height="100" />
            <span className='LogoName'>Foodeez.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="footer-links">
            {
                menuData.map((item)=>(
                    <NavLink to={item.path} key={item.name}>
                        <div className="list_item">{item.name}</div>
                    </NavLink>
                ))
            }
          </Nav>
          <Nav className='sign-buttons'>
          <button className='cart-icon' onClick={() => navigate('/addtocart')}>
  <FontAwesomeIcon icon={faCartShopping} />
</button>

            <ButtonGroup className="auth-toggle-group">
      <ToggleButton
        type="radio"
        variant="outline-none"
        value="1"
        className="auth-toggle-btn"
        onClick={() => handleAuthToggle('signin')}
      >
        LogIn
      </ToggleButton>
      <ToggleButton
        type="radio"
        variant="outline-none"
        value="2"
        className="auth-toggle-btn"
        onClick={() => handleAuthToggle('signup')}
      >
        SignUp
      </ToggleButton>
    </ButtonGroup>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header
