// import React from 'react'

// const Card = () => {
//   return (
//     <div>
//         <div className="flex flex-col items-center justify-center p-4 md:p-0  text-gray-700 bg-white shadow-md bg-clip-border rounded-md md:rounded-3xl md:w-80"> {/* Adjusted width to md:w-80 */}
//             <div className="h-40 overflow-hidden text-white shadow-lg bg-clip-border bg-blue-gray-500 rounded-md md:rounded-t-3xl md:rounded-l-3xl md:w-full shadow-blue-gray-500/40"> {/* Adjusted height to h-40 */}
//                 <img
//                     src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
//                     alt="card-image"
//                     className="object-cover w-full h-full rounded-md"
//                 />
//             </div>
//             <div className="p-4 w-full bg-white rounded-md shadow-md">
//                 <div className="flex mb-2 justify-between">
//                     <h5 className="font-bold mb-1 text-lg leading-snug text-orange">
//                         Data Science
//                     </h5>
//                     <span className="mb-1 text-liteyellow">4.9</span>
//                 </div>
//                 <h2 className="font-bold block mb-1 text-blue-gray-900">
//                     Duration: 3 - 4 Months
//                 </h2>
//                 <p className="block font-normal text-gray leading-relaxed text-inherit">
//                     Our Data Science training program covers a wide range of topics, including data manipulation.
//                 </p>
//             </div>
//             <div className="p-3 pt-0 pb-3 md:p-4 md:py-4 px-3 md:px-4 w-full bg-white rounded-b-md shadow-md flex flex-col items-center"> {/* Adjusted padding and rounded-b-md */}
//                 <button className="bg-purple text-white hover:bg-blue-700 py-2 px-6 rounded-full">
//                     Learn More
//                 </button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Card


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/course/');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);
  console.log(courses);
  return (
    <div className=''>
      {courses.map((course, index) => (
          <div key={index} className="flex flex-col items-center justify-center p-4 md:p-0 text-gray-700 bg-white shadow-md bg-clip-border rounded-md md:rounded-3xl md:w-80">
                <Link to={`/course/${course._id}`}>
            {/* Adjusted width to md:w-80 */}
            <div className="h-40 overflow-hidden text-white shadow-lg bg-clip-border bg-blue-gray-500 rounded-md md:rounded-t-3xl md:rounded-l-3xl md:w-full shadow-blue-gray-500/40">
                {/* Adjusted height to h-40 */}
                <img src={course.imageUrl} alt="card-image" className="object-cover w-full h-full rounded-md" />
            </div>
            <div className="p-4 w-full bg-white rounded-md shadow-md">
                <div className="flex mb-2 justify-between">
                <h5 className="font-bold mb-1 text-lg leading-snug text-orange">{course.title}</h5>
                <span className="mb-1 text-liteyellow">{course.rating}</span>
                </div>
                <h2 className="font-bold block mb-1 text-blue-gray-900">Duration: {course.duration}</h2>
                <p className="block font-normal text-gray leading-relaxed text-inherit">{course.description}</p>
            </div>
            <div className="p-3 pt-0 pb-3 md:p-4 md:py-4 px-3 md:px-4 w-full bg-white rounded-b-md shadow-md flex flex-col items-center">
                {/* Adjusted padding and rounded-b-md */}
                <button className="bg-purple text-white hover:bg-blue-700 py-2 px-6 rounded-full">Learn More</button>
            </div>
        </Link>
            </div>
      ))}
    </div>
  );
};

export default Card;
