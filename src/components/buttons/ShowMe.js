import React from 'react'
import { Row, Button, Col } from 'react-bootstrap'
const ShowMe = ({handleStep, step}) => {
  return (
    <Row className="">
        <Col xs={12}>
            <Button onClick={(step===1) ? handleStep : undefined} className="text-primary px-5" variant="light" as="input" type="button" value="Show Me" />{' '}
        </Col>
    </Row>
  )
}

export default ShowMe