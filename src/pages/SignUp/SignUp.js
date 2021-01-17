import React from 'react'
import { Form, Container, Col, Row, Button } from 'react-bootstrap'

import './SignUp.scss'

class SignUp extends React.Component {
  constructor () {
    super()

    this.state = {
      password: '',
      passwordConfirmation: '',
      username: ''
    }
  }

  handleChange = event => {
    console.log(event.target.value)
    this.setState({
    [event.target.name]: event.target.value
  })
}

  handleSubmit = () => {
    if (this.state.username === 'dan') {
      console.log('Yeehaw!!')
    }
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
              <Form.Group controlId="passwordConfirmation" className="mt-4">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  autoComplete='off'
                  className="account-info input"
                  type="password"
                  name="passwordConfirmation"
                  placeholder="Password Confirmation"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button href='#home' type='submit'>Submit</Button>
            </Form>
          </Col>

        </Row>
      </Container>
    )
  }
}

export default SignUp
