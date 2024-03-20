// import React, { useState } from 'react';
// import axios from 'axios';

// const CreateCourse = () => {
//   const [courseData, setCourseData] = useState({
//     imageUrl: '',
//     title: '',
//     category: '',
//     description: '',
//     videos: [{ subtitle: '', videoUrl: [''] }]
//   });

//   const handleChange = (e, subtitleIndex, videoIndex) => {
//     const { name, value } = e.target;
//     const updatedVideos = [...courseData.videos];
//     if (name === 'subtitle') {
//       updatedVideos[subtitleIndex].subtitle = value;
//     } else if (name === 'videoUrl') {
//       updatedVideos[subtitleIndex].videoUrl[videoIndex] = value;
//     }
//     setCourseData({ ...courseData, videos: updatedVideos });
//   };

//   const handleAddSubtitle = () => {
//     setCourseData({
//       ...courseData,
//       videos: [...courseData.videos, { subtitle: '', videoUrl: [''] }]
//     });
//   };

//   const handleAddVideo = (subtitleIndex) => {
//     const updatedVideos = [...courseData.videos];
//     updatedVideos[subtitleIndex].videoUrl.push('');
//     setCourseData({ ...courseData, videos: updatedVideos });
//   };


//   return (
//     <div className="max-w-lg mt-[100px] mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Add New Course</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="imageUrl" className="block mb-2 font-semibold">Image URL</label>
//           <input type="text" id="imageUrl" name="imageUrl" value={courseData.imageUrl} onChange={(e) => setCourseData({ ...courseData, imageUrl: e.target.value })} className="w-full border rounded px-3 py-2" />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="title" className="block mb-2 font-semibold">Title</label>
//           <input type="text" id="title" name="title" value={courseData.title} onChange={(e) => setCourseData({ ...courseData, title: e.target.value })} className="w-full border rounded px-3 py-2" />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="category" className="block mb-2 font-semibold">Category</label>
//           <input type="text" id="category" name="category" value={courseData.category} onChange={(e) => setCourseData({ ...courseData, category: e.target.value })} className="w-full border rounded px-3 py-2" />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="description" className="block mb-2 font-semibold">Description</label>
//           <textarea id="description" name="description" value={courseData.description} onChange={(e) => setCourseData({ ...courseData, description: e.target.value })} className="w-full border rounded px-3 py-2"></textarea>
//         </div>
//         <div className="mb-4">
//           {courseData.videos.map((subtitle, subtitleIndex) => (
//             <div key={subtitleIndex} className="mb-4">
//               <label htmlFor={`subtitle${subtitleIndex}`} className="block mb-2 font-semibold">Subtitle {subtitleIndex + 1}</label>
//               <input type="text" id={`subtitle${subtitleIndex}`} name="subtitle" value={subtitle.subtitle} onChange={(e) => handleChange(e, subtitleIndex)} className="w-full border rounded px-3 py-2" />
//               {subtitle.videoUrl.map((videoUrl, videoIndex) => (
//                 <div key={videoIndex} className="mb-2">
//                   <label htmlFor={`videoUrl${subtitleIndex}-${videoIndex}`} className="block mb-1 font-semibold">Video URL {videoIndex + 1}</label>
//                   <input type="text" id={`videoUrl${subtitleIndex}-${videoIndex}`} name="videoUrl" value={videoUrl} onChange={(e) => handleChange(e, subtitleIndex, videoIndex)} className="w-full border rounded px-3 py-2" />
//                 </div>
//               ))}
//               <button type="button" onClick={() => handleAddVideo(subtitleIndex)} className="bg-purple text-white px-4 py-2 rounded-full">+ Add Video</button>
//             </div>
//           ))}
//           <button type="button" onClick={handleAddSubtitle} className="bg-purple text-white px-4 py-2 rounded-full">+ Add Subtitle</button>
//         </div>
//         <button type="submit" className="bg-purple text-white px-6 py-3 rounded-full">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default CreateCourse;


import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const CreateCourse = () => {
  const [courseData, setCourseData] = useState({
    imageUrl: '',
    title: '',
    category: '',
    description: '',
    videos: [{ subtitle: '', videoUrl: [''] }]
  });
  const [error, setError] = useState('');

  const navigate = useNavigate()

  const handleChange = (e, subtitleIndex, videoIndex) => {
    const { name, value } = e.target;
    const updatedVideos = [...courseData.videos];
    if (name === 'subtitle') {
      updatedVideos[subtitleIndex].subtitle = value;
    } else if (name === 'videoUrl') {
      updatedVideos[subtitleIndex].videoUrl[videoIndex] = value;
    }
    setCourseData({ ...courseData, videos: updatedVideos });
  };

  const handleAddSubtitle = () => {
    setCourseData({
      ...courseData,
      videos: [...courseData.videos, { subtitle: '', videoUrl: [''] }]
    });
  };

  const handleAddVideo = (subtitleIndex) => {
    const updatedVideos = [...courseData.videos];
    updatedVideos[subtitleIndex].videoUrl.push('');
    setCourseData({ ...courseData, videos: updatedVideos });
  };

  const handleDeleteSubtitle = (subtitleIndex) => {
    const updatedVideos = [...courseData.videos];
    updatedVideos.splice(subtitleIndex, 1);
    setCourseData({ ...courseData, videos: updatedVideos });
  };

  const handleDeleteVideo = (subtitleIndex, videoIndex) => {
    const updatedVideos = [...courseData.videos];
    updatedVideos[subtitleIndex].videoUrl.splice(videoIndex, 1);
    setCourseData({ ...courseData, videos: updatedVideos });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(courseData);
    try {
        const userInfoJSON = localStorage.getItem('userInfo');
        const userInfo = JSON.parse(userInfoJSON);
        const { token } = userInfo;
        const JWTtoken = token;
        console.log(token);
        const config = {
          headers: {
            Authorization: `Bearer ${JWTtoken}`,
          },
        };
        const response = await axios.post(`http://localhost:5000/course/`,courseData,config);
        // setCourse(response.data);
        navigate('/courselist')
        console.log(response);
      } catch (error) {
        setError(error.message);
      }
  };

  return (
    <div className="max-w-lg mt-[100px] mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add New Course</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
           <label htmlFor="imageUrl" className="block mb-2 font-semibold">Image URL</label>
           <input type="text" id="imageUrl" name="imageUrl" value={courseData.imageUrl} onChange={(e) => setCourseData({ ...courseData, imageUrl: e.target.value })} className="w-full border rounded px-3 py-2" />
         </div>
         <div className="mb-4">
           <label htmlFor="title" className="block mb-2 font-semibold">Title</label>
           <input type="text" id="title" name="title" value={courseData.title} onChange={(e) => setCourseData({ ...courseData, title: e.target.value })} className="w-full border rounded px-3 py-2" />
         </div>
         <div className="mb-4">
           <label htmlFor="category" className="block mb-2 font-semibold">Category</label>
           <input type="text" id="category" name="category" value={courseData.category} onChange={(e) => setCourseData({ ...courseData, category: e.target.value })} className="w-full border rounded px-3 py-2" />
         </div>
         <div className="mb-4">
           <label htmlFor="description" className="block mb-2 font-semibold">Description</label>
           <textarea id="description" name="description" value={courseData.description} onChange={(e) => setCourseData({ ...courseData, description: e.target.value })} className="w-full border rounded px-3 py-2"></textarea>
         </div>
        {courseData.videos.map((subtitle, subtitleIndex) => (
          <div key={subtitleIndex} className="mb-4">
            <label htmlFor={`subtitle${subtitleIndex}`} className="block mb-2 font-semibold">Subtitle {subtitleIndex + 1}</label>
            <input type="text" id={`subtitle${subtitleIndex}`} name="subtitle" value={subtitle.subtitle} onChange={(e) => handleChange(e, subtitleIndex)} className="w-full border rounded px-3 py-2" />
            {subtitle.videoUrl.map((videoUrl, videoIndex) => (
              <div key={videoIndex} className="mb-2">
                <label htmlFor={`videoUrl${subtitleIndex}-${videoIndex}`} className="block mb-1 font-semibold">Video URL {videoIndex + 1}</label>
                <input type="text" id={`videoUrl${subtitleIndex}-${videoIndex}`} name="videoUrl" value={videoUrl} onChange={(e) => handleChange(e, subtitleIndex, videoIndex)} className="w-full border rounded px-3 py-2" />
                <button type="button" onClick={() => handleDeleteVideo(subtitleIndex, videoIndex)} className="bg-purple text-white px-2 py-1 rounded-full ml-2">Delete Video</button>
              </div>
            ))}
            <button type="button" onClick={() => handleAddVideo(subtitleIndex)} className="bg-purple text-white px-4 py-2 rounded-full">+ Add Video</button>
            <button type="button" onClick={() => handleDeleteSubtitle(subtitleIndex)} className="bg-purple text-white px-2 py-1 rounded-full ml-2">Delete Subtitle</button>
          </div>
        ))}
        <button type="button" onClick={handleAddSubtitle} className="bg-purple text-white px-4 py-2 rounded-full">+ Add Subtitle</button>
        <button type="submit" className="bg-purple text-white px-6 py-3 rounded-full">Submit</button>
      </form>
    </div>
  );
};

export default CreateCourse;
