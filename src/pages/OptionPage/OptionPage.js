import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'

import './OptionPage.scss'

import { family } from '../../helpers/families/Family'

class OptionPage extends React.Component {

  render () {
    const id = (this.props.props.match.params.id) - 1
    return (

      <Container>
        <Row className='justify-content-center'><Col>
        <h1>{family[id].family}</h1>
        </Col></Row>
        <Row className='justify-content-center'>
        <Col lg={7}>
        <div>
          <div className='image-div'>
            <img className='image' src={family[id].src} alt={family[id].family} />
          </div>
            <Row className='image-text'>
              <Col lg={12}>
                <Button>Call</Button>
              </Col>

              <Col lg={12}>
                <Button>Message</Button>
              </Col>

              <Col lg={12}>
                <Button href={`#portfolio/${id}`}>Photos</Button>
              </Col>
            </Row>
        </div>
        </Col>
        </Row>
      </Container>
    )
  }
}

export default OptionPage
