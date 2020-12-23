import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'

import { family } from '../../helpers/families/Family'

import './Home.scss'

class Home extends React.Component {
  constructor () {
    super()

    this.state = {
      option1: false,
    }
  }

  handleClick = (prevState) => {
    this.setState({ option: prevState })
  }

  render () {
    const imgJsx = family.map(image => (
      <Col lg={7} key={image.id}>
        {
          <div>
            <Button
              className='image-div'
              href={`#option/${image.id}`}
              props={image}
            >
              <img className='image' src={image.src} alt={image.family} />
            </Button>
          </div>
        }
      </Col>
    ))

    return (
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
  }
}

export default Home
