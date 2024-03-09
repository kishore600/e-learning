import React from 'react'
import Card from './Card'

const CoursesPage = () => {
  return (
    <div>
        {/* Courses Offered */}
    <div class="flex items-center justify-center">
      <h1 className="md:text-3xl text-2xl font-medium leading-tight pt-10 mt-20">
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
    <div className="App grid
    items-center content-center md:grid-cols-3 
    lg:grid-cols-3 md:px-12 lg:px-24 p-4 gap-28 justify-center">
        <Card/>
        {/* <Card/>
        <Card/>
        <Card/>
        <Card/> */}
      </div>
    </div>
  )
}

export default CoursesPage