import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../css/navigation.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar expand="lg" variant='dark' fixed='top' className={`${styles.navbar}`}>
        <Container>
          <Navbar.Brand href="/#home">Allifya's Porto</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`${styles.navbar} ms-auto`}>
              <Nav.Link className='me-2' href="/#home">Hello!</Nav.Link>
              <Nav.Link className='me-2' href="/#background">Background</Nav.Link>
              <Nav.Link as={Link} className='me-2' to="/Learning">Learning</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar expand="lg" variant='dark' fixed='bottom' className={`${styles.navbar} `}>
        <Container>
            <Nav className={`${styles.navbar} mx-auto`}>
              <Nav.Link className='me-2' href="https://www.instagram.com/arachaman/"><FontAwesomeIcon icon={faInstagram} size='1x'/></Nav.Link>
              <Nav.Link className='me-2' href="https://github.com/arachaman"><FontAwesomeIcon icon={faGithub} size='1x'/></Nav.Link>
              <Nav.Link className='me-2' href="https://gitlab.com/arachman912"><FontAwesomeIcon icon={faGitlab} size='1x'/></Nav.Link>
              <Nav.Link href="https://drive.google.com/file/d/1WuHiWE3fh4K-mEI_t1J91h1dvUwn8oX0/view?usp=share_link"><FontAwesomeIcon icon={faFile} /></Nav.Link>
              {/* <Nav.Link href="#link"><FontAwesomeIcon icon={faFile} size='1x'/></Nav.Link> */}
            </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation
