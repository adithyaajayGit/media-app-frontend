import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="mb-4">
      <Container>
        <Navbar.Brand  className="d-flex align-items-center">
          <Link style={{textDecoration:'none', color:'white'}} to={'/'}>
        <i class="fa-brands fa-medium m-2"></i> 
          <span className="fs-4">Media-Player</span> 
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
