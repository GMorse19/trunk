import React from 'react'
import { Form, Container, Col, Row, Button } from 'react-bootstrap'

import './SignIn.scss'

class SignIn extends React.Component {
  constructor () {
    super()

    this.state = {
      identifier: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  handleSubmit = () => {
    console.log('Handle Submit!')
    
  }


  render () {
    return (
      <Container>
        <Row className='justify-content-center'>
        <Col lg={12}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="identifier" className="mt-4">
                <Form.Label>use email or username</Form.Label>
                <Form.Control
                  autoComplete='off'
                  className="account-info input"
                  type="identifier"
                  name="identifier"
                  placeholder="Login"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Button href='#home'>Submit</Button>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default SignIn
