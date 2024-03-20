import AboutPage from "./components/AboutPage";
import CoursesPage from "./components/CoursesPage";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Login from "./components/Login";
import SpecificCourse from "./components/SpecificCourse.jsx";
import CreateCourse from "./components/CreateCourse.jsx";
import Contact from "./components/Contact";
import Courselist from "./components/Courselist"
import Userlist from "./components/Userlist";
import {BrowserRouter as Router,Routes,Route,Navigate, Outlet} from 'react-router-dom'
import CreateUsers from "./components/Createusers";
import Products from "./components/Products.jsx";
import Services from "./components/Services.jsx";

function App() {
  return (
    <div>
      <div className="h-screen">
      <Router>
        <Nav/>
        <Routes>
          <Route path='/about'  element={<AboutPage />} />
          <Route path='/product'  element={<Products />} />
          <Route path='/services'  element={<Services />} />
          <Route path='/courses'  element={<CoursesPage />} />
          <Route path='/courselist' element={<Courselist />}/>
          <Route path='/create'  element={<CreateCourse />} />
          <Route path='/createuser' element={<CreateUsers />}/>
          <Route path="/userlist" element={<Userlist />}/>
          <Route path='/course/:id' element={<SpecificCourse />} />
          <Route path="/connect" element={<Contact />}/>
          <Route path='/login'  element={<Login />} />
          <Route path='/'  element={<Home />} />
        </Routes>
      </Router>
      <div/>
      <div className="fixed bottom-0 left-0 right-0">
          <Footer />
      </div>
    </div>
    </div>
  );
}

export default App;
