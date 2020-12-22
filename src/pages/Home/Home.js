import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import { family } from '../../helpers/families/Family'

import './Home.scss'

const imgJsx = family.map(image => (
  <Col lg={7} key={image.id}>
    {
      <a href='/'>
      <div className='image-div'>
        <img className='image' src={image.src} alt={image.family} />
        </div>
      </a>
    }
  </Col>
))

const Home = () => (
  <Container>
    <Row className='justify-content-center'>
      <Col>
        <p>Home Page</p>
      </Col>
    </Row>
    <Row className='justify-content-center'>
      {imgJsx}
    </Row>
  </Container>
)

export default Home
