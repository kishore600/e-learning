import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const SpecificCourse = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
      const data = localStorage.getItem('userInfo');
      setUser(data);
    }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const userInfoJSON = localStorage.getItem('userInfo');
        // const userInfo = JSON.parse(userInfoJSON);
        // const { token } = userInfo;
        // const JWTtoken = token;
        // const config = {
        //   headers: {
        //     Authorization: `Bearer ${JWTtoken}`,
        //   },
        // };
        const response = await axios.get(`http://localhost:5000/course/${id}`,);
        setCourse(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="mt-32 ml-4 mr-4 flex">
      {/* Left side */}
      <div className="flex-1 ml-20 mr-8">
        {course && (
          <>
            <h1 className="text-3xl font-bold mb-2 text-orange">{course.title}</h1>
            <p className="text-lg mb-2"><span className="font-bold">Category:</span> {course.category}</p>
            <p className="text-lg mb-4"><span className="font-bold">Description:</span><br/>{course.description}</p>

            {/* Modules */}
            <h3 className="text-xl font-bold mb-2 text-purple">Modules:</h3>
            <Collapse accordion size="large" style={{ marginBottom: '40px' }}>
              {course.videos.map((video, index) => (
                <Panel header={video.subtitle} key={index}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {user ? video?.videoUrl?.map((url, index) => (
                      <div key={index} style={{ marginBottom: '20px' }}>
                        <ReactPlayer url={url} controls={true} />
                      </div>
                    )) : <div> please login to view video </div>}
                  </div>
                </Panel>
              ))}
            </Collapse>
          </>
        )}
      </div>

      {/* Right side */}
      <div className="flex-1">
        {course && (
          <img src={course.imageUrl} alt={course.title} className="w-3/4" />
        )}
      </div>
    </div>
  );
};

export default SpecificCourse;