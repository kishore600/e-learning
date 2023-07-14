import express from "express"
import {getUserProfile,getUserById,updateUserProfile,deleteUser,getAllUser} from '../controller/user.js'
import { protect,admin } from "../middleware/authMiddleware.js"
const router = express.Router()

router.get('/',protect,admin,getAllUser)
router.get('/profile',protect,getUserProfile)
router.get('/:id',protect,getUserById)
router.put('/:id',protect,updateUserProfile)
router.delete('/:id',protect,admin,deleteUser)

export default router