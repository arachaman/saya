import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../css/navigation.module.css'
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar expand="lg" variant='dark' fixed='top' className={`${styles.navbar}`}>
        <Container>
          <Navbar.Brand href="#home">Allifya's Porto</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`${styles.navbar} ms-auto`}>
              <Nav.Link className='me-2' href="#home">Hello!</Nav.Link>
              <Nav.Link className='me-2' href="#background">Background</Nav.Link>
              <Nav.Link href="#link">CV</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation
