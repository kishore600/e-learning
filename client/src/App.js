import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Appbar';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Home from './components/Home';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
Outlet

} from "react-router-dom";
import Footer from './components/footer';
import Profile from './components/Profile';
import CategoryCourses from './components/CategoryCourses';

import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getCourse } from './features/course/CourseSlice';
import Course from './components/Course';
import { getCategory } from './features/category/CategorySlice';
import Fav from './components/Fav';
import { getUserProfile } from './features/user/UserSlice';

function App() {
  const dispatch = useDispatch()
  const {categorys} = useSelector((store)=>store.category)
  const {user} = useSelector((store)=>store.user)
  useEffect(()=>{
    dispatch(getCourse())
    dispatch(getCategory())
    dispatch(getUserProfile())
  },[])  

  
  const router = createBrowserRouter(
    [
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/signin",
        element:<Signin />
      },
      {
        path:"/signup",
        element:<Signup />
      },

      {
        path:"/",
        element:<Navbar />
      },
      {
        path:"/userprofile",
        element:<Profile />
      },
      {
        path:"/course/:id",
        element:<Course />
      },
      {
        path:"/categorycourses/:category",
        element:<CategoryCourses />
      },
      {
        path:"/favcourses",
        element:<Fav />
      }
    ]
  )


    // Retrieve the token from local storage, session storage, cookies, or any other storage mechanism
  
  return (
    <div className="App">
      <Navbar />
      <RouterProvider router={router} />
      <Outlet />
      <Footer/>
    </div>
  );
}

// const Course = ()=>{
//   return(
//     <>
//     <div>
//     <h1>Course</h1>
//     </div>
//     </>
//   )
// }
export default App;

// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './components/Navbar';
// import Signup from './components/Signup';
// import Signin from './components/Signin';
// import Home from './components/Home';
// // import { Route, Router, Routes } from 'react-router-dom';
// // import { Link } from 'react-router-dom';
// // import Home from './components/Home';

// function App() {
//   return (
//     <div className="App">
//       <Navbar/>
//       <Signin/>
//     </div> 
    
//   );
// }

// export default App;
