import React from 'react'
import { Form, Container, Col, Row, Button } from 'react-bootstrap'

import './SignIn.scss'

class SignIn extends React.Component {
  constructor () {
    super()

    this.state = {
      password: '',
      username: ''
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
              <Form.Group controlId="username" className="mt-4">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  autoComplete='off'
                  className="account-info input"
                  type="username"
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="password" className="mt-4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  autoComplete='off'
                  className="account-info input"
                  type="password"
                  name="password"
                  placeholder="Password"
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
