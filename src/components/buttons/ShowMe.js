import React from 'react'
import { Row, Button, Col } from 'react-bootstrap'
const ShowMe = ({handleStep, step}) => {
  return (
    <Row className="w-50 mx-auto">
        <Col>
            <Button onClick={(step===1) && handleStep} className="answer" variant="light" as="input" type="button" value="Show Me" />{' '}
        </Col>
    </Row>
  )
}

export default ShowMe