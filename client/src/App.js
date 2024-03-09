import AboutPage from "./components/AboutPage";
import CoursesPage from "./components/CoursesPage";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Login from "./components/Login";
import SpecificCourse from "./components/SpecificCourse.jsx";

import {BrowserRouter as Router,Routes,Route,Navigate, Outlet} from 'react-router-dom'


function App() {
  return (
    <>
    <Router>
      <Nav/>
      <Routes>
      <Route path='/about'  element={<AboutPage />} />
        <Route path='/courses'  element={<CoursesPage />} />
        <Route path='/course/:id' element={<SpecificCourse />} />
        <Route path='/login'  element={<Login />} />
        <Route path='/'  element={<Home />} />
      </Routes>
    </Router>

      <div className='bg-bg w-full '></div>
    <Footer />
    </>
  );
}

export default App;
