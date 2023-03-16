import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './Navigation'
import style from '../css/learning.module.css'
import { Container, Table, Row, Col, Button } from 'react-bootstrap'

export const Learning = () => {
  return (
    <div className={`${style.background}`}>
      <Navigation/>
      <Container>
        <section id='learningHome' className={`${style.padBanner} `}>
          <div className={`${style.banner} `}>
            Learning
          </div>
        </section>
        <Row>
          <Col>
          <div className='mt-5'>
            <Button variant='secondary' className='d-flex px-4'>Add</Button>
            <Table striped variant='dark' className='mt-2'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </Table>
          </div>
          </Col>
        </Row>

      </Container>
    </div>
  )
}
