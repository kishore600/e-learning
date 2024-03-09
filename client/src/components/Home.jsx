import React from 'react'
import Homelogo from '../assets/homeillus.png'
import Logo from '../assets/logo.png'
import Card from './Card'

const Home = () => {
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
        <button className='bg-orange text-white py-4 px-6 
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
    <div class="flex items-center justify-center">
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
    <div className="App grid grid-rows-2 
    items-center content-center md:grid-cols-3 
    lg:grid-cols-3 md:px-12 lg:px-24 p-4 gap-28 justify-center">
        <Card/>
        {/* <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/> */}
    </div>
</div>


  )
}

export default Home