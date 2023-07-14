import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import {api} from "../../api"
import axios from "axios";

const defaultCourse = {
    title:'',
    category:'',
    description:'',
    videos:[]
}

export const getCourse = createAsyncThunk(
    'course/get',
    async(thunkAPI)=>{
        try {
            const response = await axios.get('http://localhost:5000/course/');
            // console.log(response);
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

export const getCourseById = createAsyncThunk(
    'course/getbyid',
    async(id,{rejectWithValue})=>{
        try {
            const userInfoJSON = localStorage.getItem('userInfo');
            const userInfo = JSON.parse(userInfoJSON)
            const {token} = userInfo  
            const JWTtoken = token
            // Set the authorization header with the token
            const config = {
                headers: {
                Authorization: `Bearer ${JWTtoken}`,
                },
            };
          const response = await axios.get(`http://localhost:5000/course/${id}`, config);
          return response.data
        } catch (error) {
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
              } else {
                return rejectWithValue({ message: error.message });
            }
        }
    })

    export const getCategoryCourses = createAsyncThunk(
        'course/getCategoryCourse',
        async(category,{rejectWithValue})=>{
            try {
                const userInfoJSON = localStorage.getItem('userInfo');
                const userInfo = JSON.parse(userInfoJSON)
                const {token} = userInfo  
                const JWTtoken = token
                // Set the authorization header with the token
                const config = {
                    headers: {
                    Authorization: `Bearer ${JWTtoken}`,
                    },
                };
                const response = await axios.get(`http://localhost:5000/course/category/${category}`, config);
                console.log(response.data);
                return response.data
            } catch (error) {
                if (error.response && error.response.data) {
                    return rejectWithValue(error.response.data);
                  } else {
                    return rejectWithValue({ message: error.message });
                }
            }
        }
    )

export const getFavCourse = createAsyncThunk(
    'course/getFav/Courses',
    async(rejectWithValue)=>{
        try {
            const userInfoJSON = localStorage.getItem('userInfo');
            const userInfo = JSON.parse(userInfoJSON)
            const {_id,token} = userInfo  
            const JWTtoken = token
    
            const config = {
                headers: {
                Authorization: `Bearer ${JWTtoken}`,
                },
            };
            
            const response = await axios.get(`http://localhost:5000/course/favCourse`, config);
            return response.data
            
        } catch (error) {
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
              } else {
                return rejectWithValue({ message: error.message });
            }
        }
    }
)
const courseSlice = createSlice({
    name:'course',
    initialState:{
        courses:[],
        loading: false,
        error: null,
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(getCourse.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(getCourse.fulfilled,(state,action)=>{
            state.courses = action.payload;
            state.loading = false;
            state.error = null;
        })
        .addCase(getCourse.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(getCourseById.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(getCourseById.fulfilled,(state,action)=>{
            state.courses = action.payload;
            state.loading = false;
            state.error = null;
        })
        .addCase(getCourseById.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(getCategoryCourses.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(getCategoryCourses.fulfilled,(state,action)=>{
            state.courses = action.payload;
            state.loading = false;
            state.error = null
        })
        .addCase(getCategoryCourses.rejected,(state,action)=>{
            state.loading=false;
            state.courses = [];
            state.error=action.payload
        })
        .addCase(getFavCourse.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(getFavCourse.fulfilled,(state,action)=>{
            state.courses = action.payload;
            state.loading = false;
            state.error = null
        })
        .addCase(getFavCourse.rejected,(state,action)=>{
            state.loading=false;
            state.courses = [];
            state.error=action.payload
        })
    }
})

export default courseSlice.reducer;