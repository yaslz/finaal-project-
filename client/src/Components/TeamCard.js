import React from 'react'
import { Button, Card } from 'react-bootstrap'

const TeamCard = ({team}) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{team.name}</Card.Title>
        <Card.Text>{team.lastName}</Card.Text>
        <Card.Text>{team.poste}</Card.Text>
        <Button variant="primary">Show more..</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default TeamCard