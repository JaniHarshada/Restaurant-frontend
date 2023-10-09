import { useEffect, useState } from 'react';

import axios from 'axios'
import RestCard from '../Restcard/RestCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function Allrest() {

  // To hold all Restaurants details as in the form of array
  const [allRestaurents,setAllRestaurents]=useState([])

  const fetchData=async()=>{
    const response = await axios.get('http://localhost:3001/restaurants')
    console.log(response.data);
    setAllRestaurents(response.data)
  }

  console.log(allRestaurents);
  
  useEffect(()=>{
    fetchData()//function call
  },[])
  return (
    <div>
      <Row>
        {
          allRestaurents.map((item)=>(
            <Col>
                <RestCard restaurents={item}/>
            </Col>
          
          ))
          }
          </Row>
      
      
    </div>
  )
}

export default Allrest