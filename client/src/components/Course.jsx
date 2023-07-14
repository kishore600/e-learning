import React, { useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getCourseById } from '../features/course/CourseSlice'
import { useParams } from 'react-router-dom';
import { Button, Card, CardGroup, Carousel, Figure } from 'react-bootstrap'
import Videos from './Videos';
import Loading from './Loading';

const Course = () => {
    const { id } = useParams(); 
    const dispatch = useDispatch()

    const {courses,error,loading} = useSelector((store)=>store.course)
    const [videos,setVideos] = useState([])
    
    useEffect(()=>{
        dispatch(getCourseById(id))
        //   const vid = await courses.videos
        //   setVids(vid)
        // setVideos(courses.videos)
    },[])

    const getvideos = async()=>{
        const vid = await courses.videos
        setVideos(vid)
    }
   getvideos()
  return (
    <div>
         <Card.Img variant="top" src={courses.imageUrl} height={200} width={200} />
        <h2>{courses.title}</h2>
        <p>{courses.description}</p>
        {/* <p>{courses.videos}</p> */}
        {/* {
            vids.length === 0 && <h2>no videos</h2>
        }    */}
        {
          !videos ? <Loading /> :(
            <>
            {
              videos.map((vides)=>{
                return <Videos vid={vides} key={vides.length} {...vides}  />
              })
            }
            </>
          )
        }
    </div>
  )
}

export default Course