import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './Navigation';
import style from '../css/main.module.css'
import profile from '../assets/profile.JPG'
import { Container, Row, Col, Stack } from 'react-bootstrap';





const Main = () => {
  return (
    
      <div>
        <Navigation/>
        <section id='home'>
            <div className={`${style.banner} w-100 vh-100`}/>
            <Container className={`${style.container}`}>
              <div className={`position-absolute top-50 start-50 translate-middle text-center border-bottom border-5 ${style.text}`}>
                <h1>Allifya Rachman Prasetyo</h1>
              </div>
            </Container>
        </section>
  
        <section id='background' className={`${style.banner} w-100 vh-100 relative d-flex item-center text-white align-items-center `}>
          <br />
          <br />
          <br />
          <Container className='my-auto'>
            <div className='backg text-justify'>           
              <Row className='p3'>
                <Col md={{ span: 3, offset: 2 }}> <img src={profile} className='fluid' alt="profile" width='240' height='307' /> </Col>
                <Col md={{ span: 5, offset: 1 }} className='d-flex align-items-center '>
                  <h5>
                  Hi there! Meet Allifya Rachman Prasetyo, an undergraduate student currently studying at Asia e University in Malaysia. My passion for web development, specifically front-end, has been a driving force in my academic pursuits. With a strong desire to improve my skills and knowledge, I am committed to exploring the latest trends and technologies in the field.
                  </h5>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
          <div>
            
     
            
          </div>
      </div>
    
  )
}

export default Main
