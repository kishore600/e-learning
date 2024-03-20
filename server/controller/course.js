// import asyncHandler from 'express-async-handler'
// import Course from '../models/Course.js'
// import User from '../models/User.js'
// import jwtToken from '../jwtToken.js'

// const createCouse =async (req,res)=>{
//     try {
//         // const storage = getStorage()
//         // if(!req.file){
//         //     res.status(400).send("NO file has been uploaded")
//         // }
//         // const StorageRef = ref(storage,req.file.originalname)
//         // const metadata = {
//         //     contentType:'video/mp4'
//         // }
//         // uploadBytes(StorageRef,req.file.buffer,metadata)
//         // .then(()=>{
//         //     res.json("sucss")
//         // })
//         // .catch(err=>{
//         //     res.json(err)
//         // })
 
//         // let downloadURL = await getDownloadURL(StorageRef)
//         const newCourse = new Course({
//             imageUrl:req.body.imageUrl,
//             title:req.body.title,
//             category:req.body.category,
//             description:req.body.description,
//             videos:req.body.videos
//         })
//         const savedCourse = await newCourse.save()
//         res.status(200).json(savedCourse)
//     } catch (error) {
//         res.json(error)
//         console.log(error);
//     }
// }
// // const addfavCourse = asyncHandler(async(req,res)=>{
// //     try {
// //         const user = await User.findById(req.params.id)
// //         // res.json(user.favCourses.includes("6493fde2f4d8f0f8d2f74341"))
// //         if(!user.favCourses.includes(req.body.courseId)){
// //             await user.updateOne({
// //                 $push:{
// //                     favCourses:req.body.courseId
// //                 }
// //             })
// //             res.status(200).json({
// //                 _id: user._id,
// //                 username: user.username,
// //                 email: user.email,
// //                 isAdmin: user.isAdmin,
// //                 favCourses : user.favCourses,
// //                 token: jwtToken(user._id),
// //               });
// //         }else{
// //             await user.updateOne({
// //                 $pull:{
// //                     favCourses:req.body.courseId
// //                 }
// //             })
// //             res.status(200).json({
// //                 _id: user._id,
// //                 username: user.username,
// //                 email: user.email,
// //                 isAdmin: user.isAdmin,
// //                 favCourses : user.favCourses,
// //                 token: jwtToken(user._id),
// //               });
// //         }
    
// //     } catch (error) {
// //         res.status(500).json(error)
// //         console.log(error);
// //     }
// // })


// const getCourseById = asyncHandler(async(req,res)=>{
//     try {
//         const course = await Course.findById(req.params.id)
//         res.status(200).json(course)
//     } catch (error) {
//         res.status(400).json(error)
//     }
// })

// const getAllCourse = asyncHandler(async(req,res)=>{
//     try {
//         const course = await Course.find()
//         res.status(200).json(course)
//     } catch (error) {
//         res.status(400).json(error)
//     }
// })


// const getCategoryCourse = asyncHandler(async(req,res)=>{
//     const category = req.params.category;
    
//     try {   
//         const course = await Course.find({category})
//         if(course.length != 0){
//             res.status(200).json(course)
//         }else{
//             res.status(500).json("no courses found in this category")
//         }
//     } catch (error) {
//         res.status(400).json({error:"no courses found in this category"})
//     }
// })

// const updateCourse = asyncHandler(async (req, res) => {
//     try {
//         const course = await Course.findById(req.params.id);

//         if (course) {
//             course.imageUrl = req.body.imageUrl || course.imageUrl;
//             course.title = req.body.title || course.title;
//             course.category = req.body.category || course.category;
//             course.description = req.body.description || course.description;

//             if (req.body.videos) {
//                 // Clear existing videos array
//                 course.videos = [];

//                 // Add each video from the request body
//                 req.body.videos.forEach(video => {
//                     course.videos.push({
//                         subtitle: video.subtitle,
//                         videoUrl: video.videoUrl
//                     });
//                 });
//             }

//             const updatedCourse = await course.save();
//             res.status(200).json(updatedCourse);
//         } else {
//             res.status(404).json({ message: 'Course not found' });
//         }
//     } catch (error) {
//         res.status(500).json({ message: 'Internal Server Error', error: error });
//     }
// });


// const updateVideo = asyncHandler(async (req, res) => {
//     try {
//         const course = await Course.findById(req.params.id);

//         if (course) {
//             const videoIndex = course.videos.findIndex(video => video._id.toString() === req.params.videoId);

//             if (videoIndex !== -1) {
//                 // Update the subtitle and video URL if provided in the request body
//                 if (req.body.subtitle) {
//                     course.videos[videoIndex].subtitle = req.body.subtitle;
//                 }
//                 if (req.body.videoUrl) {
//                     course.videos[videoIndex].videoUrl = req.body.videoUrl;
//                 }

//                 const updatedCourse = await course.save();
//                 res.status(200).json(updatedCourse);
//             } else {
//                 res.status(404).json({ message: 'Video not found' });
//             }
//         } else {
//             res.status(404).json({ message: 'Course not found' });
//         }
//     } catch (error) {
//         res.status(500).json({ message: 'Internal Server Error', error: error });
//     }
// });


// const deleteCourse = asyncHandler(async(req,res)=>{
//     const course = await Course.findByIdAndRemove(req.params.id)
//     if(course){
//         res.status(200).json("The course was removed")
//     }else{
//         res.status(404).json("course not found")
//     }
// })

// const deleteVideo = asyncHandler(async (req, res) => {
//     try {
//         const course = await Course.findById(req.params.id);

//         if (course) {
//             course.videos = course.videos.filter(video => video._id.toString() !== req.params.videoId);
//             const updatedCourse = await course.save();
//             res.status(200).json(updatedCourse);
//         } else {
//             res.status(404).json({ message: 'Course not found' });
//         }
//     } catch (error) {
//         res.status(500).json({ message: 'Internal Server Error', error: error });
//     }
// });

// export {createCouse,updateVideo,deleteVideo,updateCourse,deleteCourse,getCourseById,getAllCourse}

import asyncHandler from 'express-async-handler';
import Course from '../models/Course.js';
import User from '../models/User.js';
import jwtToken from '../jwtToken.js';

const createCourse = asyncHandler(async (req, res) => {
    try {
        const newCourse = new Course({
            imageUrl: req.body.imageUrl,
            title: req.body.title,
            category: req.body.category,
            description: req.body.description,
            videos: req.body.videos
        });

        const savedCourse = await newCourse.save();
        res.status(200).json(savedCourse);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error', error: error });
    }
});

const updateCourse = asyncHandler(async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);

        if (course) {
            course.imageUrl = req.body.imageUrl || course.imageUrl;
            course.title = req.body.title || course.title;
            course.category = req.body.category || course.category;
            course.description = req.body.description || course.description;
            course.videos = req.body.videos || course.videos;

            const updatedCourse = await course.save();
            res.status(200).json(updatedCourse);
        } else {
            res.status(404).json({ message: 'Course not found' });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error', error: error });
    }
});

const updateVideo = asyncHandler(async (req, res) => {
    console.log("in function")
    try {
        
        const course = await Course.findById(req.params.id);

        if (course) {
            const videoIndex = course.videos.findIndex(video => video._id.toString() === req.params.videoId);

            if (videoIndex !== -1) {
                if (req.body.subtitle) {
                    course.videos[videoIndex].subtitle = req.body.subtitle;
                }
                if (req.body.videoUrl) {
                    course.videos[videoIndex].videoUrl = req.body.videoUrl;
                }

                const updatedCourse = await course.save();
                res.status(200).json(updatedCourse);
            } else {
                res.status(404).json({ message: 'Video not found' });
            }
        } else {
            res.status(404).json({ message: 'Course not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error });
    }
});

const deleteCourse = asyncHandler(async (req, res) => {
    try {
        const course = await Course.findByIdAndRemove(req.params.id);
        if (course) {
            res.status(200).json({ message: 'The course was removed' });
        } else {
            res.status(404).json({ message: 'Course not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error });
    }
});

const deleteVideo = asyncHandler(async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);

        if (course) {
            course.videos = course.videos.filter(video => video._id.toString() !== req.params.videoId);
            const updatedCourse = await course.save();
            res.status(200).json(updatedCourse);
        } else {
            res.status(404).json({ message: 'Course not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error });
    }
});

const getCourseById = asyncHandler(async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (course) {
            res.status(200).json(course);
        } else {
            res.status(404).json({ message: 'Course not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error });
    }
});

const getAllCourse = asyncHandler(async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error });
    }
});

export {
    createCourse,
    updateVideo,
    deleteVideo,
    updateCourse,
    deleteCourse,
    getCourseById,
    getAllCourse
};
