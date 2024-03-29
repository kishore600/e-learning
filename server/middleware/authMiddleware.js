import Jwt  from "jsonwebtoken";
import asyncHandler from "express-async-handler"
import User from '../models/User.js'

const protect = asyncHandler(async(req,res,next)=>{
    let token
    if (req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
        ){
            try {
                token = req.headers.authorization.split(' ')[1]
                const decoded = Jwt.verify(token, process.env.JWT_SECRET)
                req.user = await User.findById(decoded.id).select('-password')
                next()
            } catch (error) {
                console.error(error)
                res.status(401).json("Not authorized, no token")
            }
        }
        if (!token) {
            res.status(401)
            throw new Error('no token')
        }
})
const admin = (req, res, next) => {
    console.log(req.user);
    if (req.user && req.user.isAdmin) {
      next()
    } else {
      res.status(401).json('Not authorized as an admin')
    }
  }
  
  export { protect, admin }