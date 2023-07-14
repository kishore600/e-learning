import React, { useEffect } from 'react'
import {Nav, Navbar, Container, NavDropdown, Form, Button} from 'react-bootstrap';
import { getCategory,getCategoryCourses } from '../features/category/CategorySlice';
import { useDispatch, useSelector } from 'react-redux';

const Category = (category) => {
  const dispatch = useDispatch()
  
  // useEffect(()=>{
  //   dispatch(getCategoryCourses(category.title))
  // },[])
  const link = `/categorycourses/${category.title}`
  
  return (
    <div>
        <NavDropdown.Item href="/">
          <Nav.Link href={link} style={{marginLeft:"25px"}}>
           {category.title}
          </Nav.Link>
         </NavDropdown.Item>
    </div>
  )
}

export default Category