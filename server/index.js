import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import authRouter from './routes/authRoute.js'
import userRouter from './routes/userRoute.js'
import couseRoute from './routes/courseRoute.js'
import categoryRoute from './routes/categoryRoute.js'
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT

app.use('/auth',authRouter)
app.use('/user',userRouter)
app.use('/course',couseRoute)
app.use('/category',categoryRoute)

app.use(express.json({
    limit: '50mb'
  }));
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(()=>{
    app.listen(PORT,()=>console.log(`server is connected on the port ${PORT}`))
})
.catch((error)=>console.log(error))