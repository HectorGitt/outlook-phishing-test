import React from 'react'
import { Row, Button, Col } from 'react-bootstrap'
const ShowMe = ({handleStep}) => {
  return (
    <Row className="w-50 mx-auto">
        <Col>
            <Button onClick={handleStep} className="answer" variant="light" as="input" type="button" value="Show Me" />{' '}
        </Col>
    </Row>
  )
}

export default ShowMe