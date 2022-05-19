import React from 'react'
import { Container } from 'react-bootstrap'
import { Navbar, Dropdown, DropdownButton, Row, Col, Button } from 'react-bootstrap'
import hand from "../images/intro.gif"

const FirstPage = ({handleNext}) => {
  return (
    <Container fluid className="Container1">
        <Navbar className="Navbar p-4" >
            <Container>
            <DropdownButton bg="light" id="dropdown-basic-button" title="Language">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            </Container>
        </Navbar>
        <Container fluid="md" className="">
            <Row className="justify-content-center mt-5">
                <Col xs={12} lg={6}>
                    <h2 className="text-white">Can you spot when you’re being phished?</h2>
                    <p>
                    Identifying phishing can be harder than you think. Phishing is an attempt to trick you into giving up your personal information by pretending to be someone you know. Can you tell what's fake?
                    </p>
                    <Button variant="primary" onClick={handleNext} size="lg">
                        Take The quiz
                    </Button>
                </Col>
                <Col xs={12} lg={6} className="">
                    <img className='mx-auto d-block fluid'  src={hand} alt="hand holding hook" />
                </Col>
            </Row>
        </Container>
    </Container>
  )
}

export default FirstPage