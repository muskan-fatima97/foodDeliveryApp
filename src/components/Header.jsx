import React from 'react'
import { NavLink } from 'react-router-dom'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'

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
        },
        {
            path:'/signUp',
            name: "SignUp"
        },
        {
            path:'/signIn',
            name: "SignIn"
        }
    ];
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand  as={NavLink} to="/Home" className='brand'>
            <img src={logo} alt="Logo" width="150" height="150" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {
                menuData.map((item)=>(
                    <NavLink to={item.path} key={item.name}>
                        <div className="list_item">{item.name}</div>
                    </NavLink>
                ))
            }
          </Nav>
          <Nav className='ms-auto'>
            <button className="btn btn-success">SignUp</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header
