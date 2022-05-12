import React from 'react'
import { Row, Button, Col } from 'react-bootstrap'
const Options = ({handleCorrect}) => {
  return (
    <Row className="w-50 mx-auto">
        <Col>
            <Button onClick={handleCorrect} className="answer" variant="light" as="input" type="button" value="Phishing" />{' '}
        </Col>
        <Col>
            <Button onClick={handleCorrect} className="answer" variant="light" as="input" type="button" value="Legitimate" />{' '}
        </Col>
    </Row>
  )
}
export default Options