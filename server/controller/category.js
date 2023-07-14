import asyncHandler from 'express-async-handler'
import Category from '../models/Category.js'
import Course from '../models/Course.js'

const createCategory = asyncHandler(async(req,res)=>{
    try {
        const {title} = req.body
        const newCategory = new Category({
            title
        })
        const category = await newCategory.save()
        res.status(201).json(category)
    } catch (error) {
        res.status(500).json(error)
    }
})

const getCategoryByID = asyncHandler(async(req,res)=>{
    try {
        const category = await Category.findById(req.params.id)
        res.status(200).json(category)
        
    } catch (error) {
        res.status(500).json(error)
    }
})

const getAllCategory = asyncHandler(async(req,res)=>{
    try {
        const category = await Category.find()
        res.status(200).json(category)
        
    } catch (error) {
        res.status(500).json(error)
    }
})


const deleteCategory = asyncHandler(async (req, res) => {
    const category = await Category.findByIdAndRemove(req.params.id)
  
    if (category) {
      res.json({ message: 'Category removed' })
    } else {
      res.status(404)
      throw new Error('Category not found')
    }
})



export {createCategory,getCategoryByID,deleteCategory,getAllCategory}