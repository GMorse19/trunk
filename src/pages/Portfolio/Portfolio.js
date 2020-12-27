import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'

import './Portfolio.scss'

import { family } from '../../helpers/families/Family'

class Portfolio extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            id: JSON.parse(props.props.match.params.id) + 1,
            gallery: family.find(x => x.id === JSON.parse(props.props.match.params.id)+1).gallery,
        }
    }

        render () {
        const { gallery, id } = this.state
        let galleryJsx = []

        if (gallery) { galleryJsx = gallery.map(gallery => (
        <Col className='' key={gallery.id}>
            {
                <div className='image-div'>
                    <img className='image' src={gallery.src} alt={gallery.id} />
                </div>
            }
        </Col>
        ))}
            return (
                <Container>
                    <Row className='justify-content-center'>
                        <p> The ID is: {id}</p>
                    </Row>
                    <Row className='justify-content-center'>
                        {galleryJsx}
                    </Row>
                    <Row><Button href='#home'>Home</Button></Row>
                </Container>
            )
        }
    }

export default Portfolio
