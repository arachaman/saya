import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './Navigation';
import style from '../css/main.module.css'
import profile from '../assets/profile.JPG'
import { Container, Row, Col } from 'react-bootstrap';

const Main = () => {
  return (
    
      <div className='relative d-flex item-center '>
        <Navigation/>
        <section id='home'>
            <div className={`${style.banner} w-100 vh-100`}/>
            <Container className={`${style.container}`}>
              <div className={`position-absolute top-50 start-50 translate-middle text-center ${style.text}`}>
                <h1>Allifya Rachman Prasetyo</h1>
              </div>
            </Container>
        </section>
  
        <section id='background' className={`${style.banner} w-100 vh-100 relative d-flex item-center `}>
          <br />
          <br />
          <br />
          <Container className='my-5'>
            <Row>
              <Col md={{ span: 3, offset: 2 }}> <img src={profile} className='fluid' alt="profile" width='240' height='307' /> </Col>
              <Col md={{ span: 5, offset: 1 }} className='text-white'> <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius itaque ea quo laborum. Adipisci quaerat officia rerum vel necessitatibus ad harum est obcaecati consequuntur perspiciatis odit tenetur, veniam nulla ut doloribus laudantium sit. Laudantium vero quas omnis voluptatem magnam dolor nesciunt consequuntur dignissimos rerum nulla, illo similique eius. Dolores, labore.</h5> </Col>
            </Row>
          </Container>
        </section>
      </div>
    
  )
}

export default Main
