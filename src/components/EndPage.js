import React from 'react'
import { Container} from 'react-bootstrap';
import { Navbar, Dropdown, DropdownButton, Row, Col, Button } from 'react-bootstrap'
import fail from "../images/result-fail.gif"

const EndPage = ({handleNext, score, name}) => {
  return (
    <Container fluid className="Container h-full vh-100">
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
                <Col xs={12}>
                    <h2 className="text-white">Good Effort, {name} <br/> You got {score}/8 correct.</h2>
                    <p>
                    Practice makes perfect and the more you understand what to look for, the safer you are from phishing attacks.
                    </p>
                    <p>You can also take a few simple steps to protect your online accounts better. Learn more at g.co/2SV.</p>
                    <h4>Share the quiz:</h4>
                    <Button variant="primary" onClick={handleNext} size="lg">
                        Take The quiz again
                    </Button>
                </Col>
                <Col xs={12}  className="">
                    <img className='mx-auto luck-img d-block fluid'  src={fail} alt="hand holding hook" />
                </Col>
            </Row>
        </Container>
    </Container>
  )
}

export default EndPage