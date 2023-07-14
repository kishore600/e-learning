import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFavCourse, getUserProfile } from '../features/user/UserSlice'
import Loading from './Loading'
import Fav from './Fav'

const CategoryCourse = (courses) => {
  const dispatch = useDispatch()
  const {user,loading} = useSelector((store)=>store.user)
  const [isFav,setIsFav] = useState(false)

  const userInfoJSON = localStorage.getItem('userInfo');
  const userInfo = JSON.parse(userInfoJSON)
  const {favCourses} = userInfo  
 
  useEffect(() => {
    setIsFav(favCourses.includes(courses._id));
  }, [courses._id, favCourses]);

  const addFavhandler = (e)=>{
    e.preventDefault()
    dispatch(addFavCourse(courses._id))
  }
  return (
    <div>
      <div>{courses.title}</div>
      <form onSubmit={addFavhandler}>
        <button>{!isFav ? "add to Fav" : "remove fav" } </button>
      </form>
    </div>
  )
}

export default CategoryCourse