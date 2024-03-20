import React, { useRef,useState,useEffect } from 'react'
import Homelogo from '../assets/homeillus.png'
import Logo from '../assets/logo.png'
import { Link } from "react-router-dom";
import { Card as AntCard, Button } from "antd";
const { Meta } = AntCard;

const Home = () => {
  const coursesSectionRef = useRef(null);

  function navigateCourses(){
    if (coursesSectionRef.current) {
      coursesSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/course/");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const DescriptionCell = ({ description }) => {
    const [readMore, setReadMore] = React.useState(false);

    const toggleReadMore = () => {
      setReadMore(!readMore);
    };

    const displayText = readMore ? description : description.slice(0, 80);

    return (
      <div>
        <p>{displayText}</p>
        {description.length > 80 && (
          <Button type="link" onClick={toggleReadMore}>
            {readMore ? "See less" : "See more"}
          </Button>
        )}
      </div>
    );
  };
  return (
<div className='bg-bg'>
    <div className="flex items-center justify-center pt-40 mt-10 md:pt-30">
    <div className="max-w-screen-xl ml-10 "> 
        <h1 className="md:text-4xl text-2xl font-medium leading-tight mb-8">
            <span>Accelerate Your Journey to Top<br/>Companies with</span>
            <span className='text-orange'> Transformers!</span>
        </h1>
        <p className="md:text-lg text-gray-500 mb-6"> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/>
            tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button onClick={navigateCourses} className='bg-orange text-white py-4 px-6 
            rounded-tr-3xl rounded-bl-3xl border-b-2 border-orange hover:bg-orangeshade duration-500 underline'>
            Explore Courses
        </button>
    </div>
    <div className='ml-10  pl-9'> 
        <img src={Homelogo} className="w-100 h-auto hidden md:block  pl-9" alt="Illustration"/> 
    </div>
    </div>
    {/* Divider */}
    <div class="flex items-center md:mt-40 mt-20 border-gr"> 
        <hr class="flex-grow border-t border-gray"/> 
    </div> 

       {/* About Section */}
    <div class="flex items-center justify-center">
      <h1 className="md:text-3xl text-2xl font-medium leading-tight mt-20">
        <span className='text-orange font-bold'> About the company</span>
      </h1>
    </div>

    <div className='flex mt-20 items-center justify-center '>
        <div > 
            <img src={Logo} className="w-full h-auto hidden md:block" alt="Logo"/> 
        </div>
    <div className="max-w-screen-xl ml-10 ">
    <div className='md:pl-20 md:ml-10'>
        <p className="md:text-xl font-medium text-gr leading-relaxed" style={{ lineHeight: '1.8' }}>
            Welcome to Neural Transformers.ai! We are a leading product-based company<br/> 
            specializing in cutting-edge technologies such as artificial intelligence 
            and<br/> natural language processing. Our innovative solutions include chatbots,
            OCR<br/> (Optical Character Recognition), and document summarizers. In addition, 
            we<br/> offer comprehensive training programs in data science, data analysis,
            cloud, and<br/>  .NET, along with placement and internship opportunities. Explore 
            our website to<br/> discover how our products and services can revolutionize your 
            business.
        </p>
        </div>
      </div>
    </div>
        {/* Divider */}
        <div class="flex items-center md:mt-40 mt-20 border-gr"> 
        <hr class="flex-grow border-t border-gray"/> 
    </div>

    {/* Courses Offered */}
    <div class="flex items-center justify-center" ref={coursesSectionRef}>
      <h1 className="md:text-3xl text-2xl font-medium leading-tight mt-20">
        <span className='text-orange font-bold'>Courses Offered</span>
      </h1>
    </div>
    <div className='flex mt-10 items-center justify-center '>
        <p  className="md:text-xl font-medium text-gr leading-relaxed md:text-center md:px-20 px-10 mb-10" style={{ lineHeight: '1.8' }}>
        At Neural Transformers.ai, we provide extensive and real-time training programs designed 
        to equip individuals with the skills and knowledge needed to excel in today's competitive
        job market. Our programs cover a wide range of domains, including Data Science, Data Analysis,
        Full Stack .NET Development, Python, SQL, AZ104, AZ400, and more.
        </p>
    </div>
    {/* Course Card Section */}
    <div className="grid gap-6 md:grid-cols-3 mt-10">
    {courses.slice(0,3).map((course, index) => (
      <Link to={`/course/${course._id}`} key={index}>
        <AntCard className="rounded-xl border border-spacing-3 shadow-md hover:shadow-lg transition duration-300">
          <div className="aspect-w-3 aspect-h-2">
            <img
              alt="course"
              src={course.imageUrl}
              className="object-cover w-[500px] h-[200px]"
            />
          </div>
          <Meta
            title={
              <h2 className="text-lg font-semibold text-orange mt-10">
                {course.title}
              </h2>
            }
            description={
              <div>
                <p className="text-sm text-gray-700 mb-2">
                Description: {course.duration}
                </p>
                <p className="text-sm text-black text-gray-700">
                  <DescriptionCell description={course.description} />
                </p>
              </div>
            }
          />
          <Link to={`/course/${course._id}`}>
            <Button type="default" className="bg-purple ml-5 text-white mt-4">
              Learn More
            </Button>
          </Link>
        </AntCard>
      </Link>
    ))}
    </div>
    {/* <Link to='/courses'>
      <div className='flex justify-center my-10'>
        <h1 className='p-6  text-white rounded-2xl font-bold bg-orange'>Explore More</h1>
      </div>
    </Link> */}
    
</div>


  )
}

export default Home