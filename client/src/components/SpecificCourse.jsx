import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactPlayer from 'react-player';

const SpecificCourse = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userInfoJSON = localStorage.getItem('userInfo');
        const userInfo = JSON.parse(userInfoJSON);
        const { token } = userInfo;
        const JWTtoken = token;
        const config = {
          headers: {
            Authorization: `Bearer ${JWTtoken}`,
          },
        };
        const response = await axios.get(`http://localhost:5000/course/${id}`, config);
        setCourse(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [id]);

  console.log(course);

  return (
    <div>
      {course ? (
        <div>
          <img src={course.imageUrl} alt={course.title} />
          <h2>{course.title}</h2>
          <p>Category: {course.category}</p>
          <p>Description: {course.description}</p>
          <h3>Videos:</h3>
          {course.videos.map((video, index) => (
            <div key={index}>
              <h4>{video.subtitle}</h4>
              {video.videoUrl?.map((v,i) => (
                <ReactPlayer key={i} url={v} controls={true} />
              ))}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SpecificCourse;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const Card = () => {
//   const { id } = useParams();
//   const [course, setCourse] = useState(null);

//   console.log(userInfo);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const userInfoJSON = localStorage.getItem('userInfo');
//         const userInfo = JSON.parse(userInfoJSON);
//         const { token } = userInfo;
//         const JWTtoken = token;
//         const config = {
//           headers: {
//             Authorization: `Bearer ${JWTtoken}`,
//           },
//         };
//         const response = await axios.get(`http://localhost:5000/course/${id}`, config);
//         setCourse(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error.message);
//       }
//     };

//     fetchData();
//   }, [id]);

//   console.log(course);

//   return (
//     <div className='mt-[100px]'>
//       {course.map((cor, index) => (
//         <div key={index} className="card">
//           <img src={cor.imageUrl} alt={cor.title} />
//           <div className="info">
//             <h3>{cor.title}</h3>
//             <p>{cor.description}</p>
//             <div className="videos">
//               {cor?.videos?.map((video, index) => (
//                 <div key={index} className="video">
//                   <h4>{video.subtitle}</h4>
//                   {video?.videoUrl?.map((url, index) => (
//                     <div key={index}>
//                        <ReactPlayer url={url} controls={true} />
//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Card;
