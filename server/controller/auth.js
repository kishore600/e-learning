import bcrypt from "bcrypt"
import jwtToken from '../jwtToken.js'
import User from "../models/User.js"
import asyncHandler from 'express-async-handler'
/*register*/
const register = asyncHandler(async(req,res)=>{
    try {
        const {username,email,password} = req.body
        const user = await User.findOne({ email }).populate('favCourses')
        if(!user){
            const salt = await bcrypt.genSalt()
            const passwordHash = await bcrypt.hash(password,salt)
            
            const newUser = new User({
                username,email,password:passwordHash
            })
            const savedUser = await newUser.save()
            res.status(201).json({
                _id:savedUser._id,
                username:savedUser.username,
                email:savedUser.email,
                password:savedUser.password,
                favCourses:savedUser.favCourses,
                isAdmin:savedUser.isAdmin,
                token:jwtToken(savedUser._id)
            })
        }else{
            res.status(400).json({error:"user is alerdy registerd"})
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

const login = asyncHandler(async(req,res)=>{
    try {
        const {email,password} = req.body
        const user = await User.findOne({email:email}).populate('favCourses')
        if (!user) return res.status(400).json({ msg: "User does not exist. " });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });
        if (user){
            res.status(200).json({
                _id:user._id,
                username:user.username,
                email:user.email,
                password:user.password,
                favCourses:user.favCourses,
                isAdmin:user.isAdmin,
                token:jwtToken(user._id)
            })
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})
export {register,login}