import User from "../models/User.js"
import asyncHandler from 'express-async-handler'
import jwtToken from '../jwtToken.js'
import bcrypt from "bcrypt"

const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id).populate('favCourses')
  
    if (user) {
      res.json(user)
    } else {
      res.status(404)
      throw new Error('User not found') 
    }
})

const getUserById = asyncHandler(async(req,res)=>{
    const user = await User.findById(req.user._id).populate('favCourses')
    if (user) {
      res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        favCourses : user.favCourses,
        isAdmin: user.isAdmin,
        token: jwtToken(req.user._id),
      })
    } else {
      res.status(404).json('User not found')
}})

const getAllUser = asyncHandler(async(req,res)=>{
  const user = await User.find().populate('favCourses')
  if (user) {
    res.json(user)
  } else {
    res.status(404).json('User not found')
}})

const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id).populate('favCourses')
    const salt = await bcrypt.genSalt()
    if (user) {
      user.username = req.body.username || user.username
      user.email = req.body.email || user.email
      user.password = await bcrypt.hash(req.body.password,salt) || user.password
      
      const updatedUser = await user.save()
  
      res.json({
        _id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        favCourses : updatedUser.favCourses,
        token: jwtToken(updatedUser._id),
      })
    } else {
      res.status(404)
      throw new Error('User not found')
    }
})

const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findByIdAndRemove(req.params.id)
  
    if (user) {
      res.json({ message: 'User removed' })
    } else {
      res.status(404)
      throw new Error('User not found')
    }
})


export {getUserProfile,getUserById,updateUserProfile,deleteUser,getAllUser}