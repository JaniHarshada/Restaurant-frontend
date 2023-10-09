import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './RestCard.css'
import { Link } from 'react-router-dom';

function RestCard({restaurents}) {
    console.log(restaurents);
  return (
    <div> 
      <Link to={`/view/${restaurents.id}`} style={{textDecoration:'none'}}>
      <Card className='card'>
    <Card.Img className='image' variant="top" src={restaurents.photograph} />
    <Card.Body>
      <Card.Title>{restaurents.name}</Card.Title>
      <Card.Title style={{height:'100px'}}>
      Address:{restaurents.address}
      <br/>
       Neighborhood:{restaurents.neighborhood}
       <br/>
       Cuisine type:{restaurents.cuisine_type}
      </Card.Title>
     
    </Card.Body>
  </Card>
  </Link>
  </div>
  )
}

export default RestCard

