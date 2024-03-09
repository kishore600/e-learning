// SpecificCourse.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import ReactPlayer from 'react-player'

const SpecificCourse = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const userInfoJSON = localStorage.getItem('userInfo');
            const userInfo = JSON.parse(userInfoJSON)
            const {token} = userInfo  
            const JWTtoken = token
            const config = {
                headers: {
                Authorization: `Bearer ${JWTtoken}`,
                },
            };
            console.log(JWTtoken)
          const response = await axios.get(`http://localhost:5000/course/${id}`, config);
          setCourse(response.data)
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
      };

      fetchData();
  }, [id]);

  return (
    <div>
    {course ? (
      <div>
        <img src={course.imageUrl} alt={course.title} />
        <h2>{course.title}</h2>
        <p>Category: {course.category}</p>
        <p>Description: {course.description}</p>
        <h3>Videos:</h3>
        <ul>
          {course.videos.map((video, index) => (
            <div key={index}>
                <ReactPlayer url={video} controls={true} />
            </div>
          ))}
        </ul>
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
  );
};

export default SpecificCourse;
