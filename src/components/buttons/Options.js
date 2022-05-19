import React from 'react'
import { Row, Button, Col } from 'react-bootstrap'
const Options = ({handleCorrect}) => {
  return (
    <Row className="gy-3 mx-auto  text-center text-lg-start align-items-center">
        <Col xs={12} lg={{span:3, offset:3}}>
            <Button onClick={handleCorrect} className="answer text-primary" variant="light" as="input" type="button" value="Phishing" />{' '}
        </Col>
        <Col xs={12} lg={{span:6, offset:0}} >
            <Button onClick={handleCorrect} className="answer text-primary" variant="light" as="input" type="button" value="Legitimate" />{' '}
        </Col>
    </Row>
  )
}
export default Options