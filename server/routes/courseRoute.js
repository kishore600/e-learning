// import express from "express"
// import {createCouse,addfavCourse,getfavCourse,updateCourse,deleteCourse,getAllCourse,getCourseById, getCategoryCourse} from '../controller/course.js'
// import { protect,admin } from "../middleware/authMiddleware.js"
// import multer from "multer"

// const storage = multer.diskStorage({
//     destination: 'uploads/',
//     filename: (req, file, cb) => {
//         cb(null, file.originalname + '-' + Date.now())      
//     }
// });

// const upload = multer({
//     storage:multer.memoryStorage()
// })
// const router = express.Router()
// router.post('/upload',protect,admin,upload.single("videos"),createCouse)
// router.put('/favCourse/:id',protect,addfavCourse)
// router.get('/favCourse/',protect,getfavCourse)
// router.put('/:id',protect,admin,updateCourse)
// router.delete('/:id',protect,admin,deleteCourse)
// router.get('/category/:category',protect,getCategoryCourse)
// router.get('/',getAllCourse)
// router.get('/:id',protect,getCourseById)

// export default router


import express from "express";
import { createCourse, updateCourse, deleteCourse, getAllCourse, getCourseById ,   updateVideo, deleteVideo} from '../controller/course.js';
import { protect, admin } from "../middleware/authMiddleware.js";


const router = express.Router();

// Create a new course
router.post('/', protect, admin, createCourse);

// Update a course
// update a video
router.put('/:id/:videoId', protect, admin, updateVideo);

// Update a course
router.put('/:id', protect, admin, updateCourse);

// Delete a course
router.delete('/:id', protect, admin, deleteCourse);

// Delete a video
router.delete('/:id/:videoId', protect, admin, deleteVideo);


// Get all courses
router.get('/', getAllCourse);

// Get course by ID
router.get('/:id', getCourseById);

export default router;
