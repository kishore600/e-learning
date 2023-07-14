import express from "express"
import { protect,admin } from "../middleware/authMiddleware.js"
import {createCategory,getCategoryByID,deleteCategory,getAllCategory} from '../controller/category.js'
const router = express.Router()

router.post('/',protect,admin,createCategory)
router.get('/:id',protect,getCategoryByID)
// router.put('/:id',protect,)
router.get('/',protect,getAllCategory)
router.delete('/:id',protect,admin,deleteCategory)

export default router