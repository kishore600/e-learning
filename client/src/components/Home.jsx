import React, { useEffect } from 'react'
import { Button, Card, CardGroup, Carousel, Figure, Row } from 'react-bootstrap'
import Img1 from '../img/banner1.png'
import Img2 from '../img/banner21.png'
import Img3 from '../img/banner3.png'
import Img4 from '../img/tc1.jpeg'
import Img5 from '../img/tc2.jpeg'
import Img6 from '../img/tc3.jpeg'
import Img7 from '../img/tc4.jpeg'
import DM from '../img/DigiMark.png'
import CC from '../img/ContCreat.png'
import PS from '../img/PubSpeak.png'
import SE from '../img/SpokEng.png'
import Ec from '../img/ecom.png'
import Business from '../img/business.png'
import PT from '../img/PlaceTrain.png'
import Testimonials from '../components/testimonial'
import { getCourse } from '../features/course/CourseSlice'
import { useSelector,useDispatch } from 'react-redux'
import { useState } from 'react'
import CourseScreen from './CourseScreen'
import Loading from './Loading'
import { Grid } from '@mui/material'
import { getUserDetails } from '../features/user/UserSlice'
import { getCategory } from '../features/category/CategorySlice'

const Home = () => {
  const dispatch = useDispatch()
  const {courses,error,loading} = useSelector((store)=>store.course)
  const {user} = useSelector((store)=>store.user)

 useEffect(()=>{
  dispatch(getCourse())
  dispatch(getCategory())
 },[])
  return (
    <div>
      {/* BANNERS SECTION */}
    <Carousel fade>
      <Carousel.Item>
        <a href='#'>
        <img
          className="d-block w-100"
          src={Img3}
          alt="First slide"
        /></a>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img2}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {Img1}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <div className='div-1'>
    <div  style={{display:'flex',paddingLeft:"20px",paddingTop:'20px'}}> <br/><h2 className='new-font' style={{fontWeight:'bold'}}>Top courses we offer</h2>
        </div>
        <p class="font" style={{display:'flex',justifyContent:"flex-start",paddingLeft:"22px", paddingBottom:'22px'}}>Choose what you need the most from the wide rangeof courses that we offer</p>
        <Grid item xs direction="row" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        {
          loading ? <Loading /> :(
            <>
            {
              Array.isArray(courses) ? courses.map((course)=>{
                return <CourseScreen course={course} key={course.id} {...course}  />
              }):[]
            }
            </>
            )
          }
          </Grid>
          </div>
          {/* {
            courses.map((course)=>{
              return <CourseScreen course = {course} key={course.id} {...course}  />
            })
          } */}
          {/* TOP COURSES SECTION */}
    <>
    {/* {
      courses.map((courses)=>{
        <CourseScreen course={courses} />
      })s
    } */}
    </>
        {/* CATEGORIES SECTION*/}
        <div  class="shadow p-3 mb-5 bg-white rounded" ><p><h4 class='font' style={{paddingTop:'20px'}}>Categories</h4></p>
        <p><h4 class='font'>Upgrade your skills for better future</h4></p>
<div class='font'>
    <Figure>
    <div style={{padding:'20px'}}>
      <a href='#' style={{textDecoration:'none'}} class='card'>
    <Figure.Image
        width={252}
        height={265}
        alt="252x265"
        src={Business}
      />
      <Figure.Caption>
      <b>Entrepreneurship</b>
      </Figure.Caption>
      </a>
      </div>
    </Figure>

    <Figure>
    <div style={{padding:'20px'}}>
    <a href='#' style={{textDecoration:'none'}} class='card'>
      <Figure.Image
        width={252}
        height={265}
        alt="252x265"
        src={CC}
      />
      <Figure.Caption>
        <b>Content Creation</b>
      </Figure.Caption>
      </a>
      </div>
    </Figure>

    <Figure>
    <div style={{padding:'20px'}}>
      <a href='#' style={{textDecoration:'none'}} class='card'>
      <Figure.Image
        width={252}
        height={265}
        alt="252x265"
        src={PS}
      />
      <Figure.Caption>
        <b>Public Speaking</b>
      </Figure.Caption>
      </a>
      </div>
    </Figure>

    <Figure>
    <div style={{padding:'20px'}}>
    <a href='#' style={{textDecoration:'none'}} class='card'>
      <Figure.Image
        width={252}
        height={265}
        alt="252x265"
        src={SE}
      />
      <Figure.Caption>
        <b>Spoken English</b>
      </Figure.Caption>
      </a>
      </div>
    </Figure>

    <Figure>
    <div style={{padding:'20px'}}>
    <a href='#' style={{textDecoration:'none'}} class='card'>
    <Figure.Image
        width={252}
        height={265}
        alt="252x265"
        src={Ec}
      />
      <Figure.Caption>
        <b>E-Commerce</b>
      </Figure.Caption>
      </a>
      </div>
    </Figure>
     
     <Figure>
          <div style={{padding:'20px'}}>
          <a href='#' style={{textDecoration:'none'}} class='card'>
      <Figure.Image
        width={252}
        height={265}
        alt="252x265"
        src={DM}
      />
      <Figure.Caption>
        <b> Digital Marketing </b>
      </Figure.Caption>
      </a>
      </div>
    </Figure>

    <Figure>
    <div style={{padding:'20px'}}>
    <a href='#' style={{textDecoration:'none'}} class='card'>
    <Figure.Image
        width={252}
        height={265}
        alt="252x265"
        src={PT}
      />
      <Figure.Caption>
        <b>Placement Training</b>
      </Figure.Caption>
      </a>
      </div>
    </Figure>
    </div>
    </div> 
    <hr style={{color:'black'}} class="style-two"/>
    {/* TESTIMONIALS SECTION */}
    <div className='div-2' ><div>
      <h2 className='font'>Testimonials</h2> 
      <Testimonials/>
      <br/>
      <br/>
    </div>
  </div>
  </div>

    
  )
}

export default Home