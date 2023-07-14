import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getCategoryCourses } from '../features/course/CourseSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Loading';
import CategoryCourse from './CategoryCourse';

const CategoryCourses = () => {
    const { category } = useParams(); 
    const {courses,loading,error} = useSelector((store)=>store.course)
    
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(getCategoryCourses(category))
    },[getCategoryCourses])

  return (  
    <div>
      {error && <h1>{error}</h1>}
      {
            loading ? <Loading /> :(
              <>
              {
                Array.isArray(courses) ? courses.map((course)=>{
                  return <CategoryCourse course = {course} key={course._id} {...course}  />
                }) : []
              }
              </>
              )
          }
    </div>
  )
}

export default CategoryCourses

