import express from "express"
import {createCouse,addfavCourse,getfavCourse,updateCourse,deleteCourse,getAllCourse,getCourseById, getCategoryCourse} from '../controller/course.js'
import { protect,admin } from "../middleware/authMiddleware.js"
import multer from "multer"

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
        cb(null, file.originalname + '-' + Date.now())      
    }
});

const upload = multer({
    storage:multer.memoryStorage()
})
const router = express.Router()
router.post('/upload',protect,admin,upload.single("videos"),createCouse)
router.put('/favCourse/:id',protect,addfavCourse)
router.get('/favCourse/',protect,getfavCourse)
router.put('/:id',protect,admin,updateCourse)
router.delete('/:id',protect,admin,deleteCourse)
router.get('/category/:category',protect,getCategoryCourse)
router.get('/',getAllCourse)
router.get('/:id',protect,getCourseById)

export default router