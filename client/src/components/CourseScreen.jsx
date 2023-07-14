import React from 'react'
import { Button, Card, CardGroup, Carousel, Figure } from 'react-bootstrap'
import Img4 from '../img/tc1.jpeg'
import { Link } from 'react-router-dom'

const CourseScreen = (course) => {
  return (
    <div >       
        <CardGroup>
        <div style={{paddingLeft:"50px"}}>
        <a href="#" style={{textDecoration: 'none'}}>
        <Card style={{ width: '17rem'}}>
        <Link to={`/course/${course._id}`}>
      <Card.Img variant="top" src={course.imageUrl} height={200} width={200} />
      </Link>
      <Card.Body className='font'>
        <Link to={`/course/${course._id}`}>
        <Card.Title>{course.title}</Card.Title>
        </Link>
        <Card.Text style = {{textAlign:"left"}}>
          {course.description}
        </Card.Text>
      </Card.Body> 
      </Card>
      </a>
        </div>
        <br />  
        
        </CardGroup>
        <br/>
    </div >
  )
}

export default CourseScreen