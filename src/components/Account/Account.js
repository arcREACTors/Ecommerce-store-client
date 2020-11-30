import React from 'react'
import { Button, Row } from 'react-bootstrap'
import { Container } from 'react-bootstrap/lib/Tab'
import { Link } from 'react-router-dom'

const Account = ({ user }) => {
  return (
    <Container>
      <Row>
        <h2 className="col-12">{user.email}&apos;s account</h2>
        <Link to="/purchases"><Button variant="secondary">See purchases</Button></Link>
      </Row>
    </Container>
  )
}

export default Account
