import React from 'react'
import { Row, Button, Col } from 'react-bootstrap'
const Options = ({handleCorrect}) => {
  return (
    <Row className="w-50 mx-auto gy-3 text-center">
        <Col xs={12} lg={6}>
            <Button onClick={handleCorrect} className="answer" variant="light" as="input" type="button" value="Phishing" />{' '}
        </Col>
        <Col xs={12} lg={6} >
            <Button onClick={handleCorrect} className="answer" variant="light" as="input" type="button" value="Legitimate" />{' '}
        </Col>
    </Row>
  )
}
export default Options