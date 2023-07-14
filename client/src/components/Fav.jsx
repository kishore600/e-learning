import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { getUserProfile } from '../features/user/UserSlice';
import Loading from './Loading';
import { getFavCourse } from '../features/course/CourseSlice';

const Fav = (Favs) => {  
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getFavCourse())
  },[])
  const {course,loading} = useSelector((store)=>store.course)

  return (
    <div>
      hi
    </div>
  )
}

export default Fav