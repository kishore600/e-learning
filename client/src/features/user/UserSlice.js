import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";
import axios from "axios";
import { useSelector } from "react-redux";
import { config } from "react-spring";

export const login = createAsyncThunk(
    'auth/login',
    async(credentials,thunkAPI)=>{
        try {
            const res = await api.login(credentials)
            localStorage.setItem('userInfo', JSON.stringify(res.data))
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)

export const signup = createAsyncThunk(
    'auth/register',
    async (userData, thunkAPI) => {
      try {
        const response = await api.signup(userData);
        console.log(userData);
        localStorage.setItem('userInfo', JSON.stringify(response.data))
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
);

export const getUserDetails = createAsyncThunk(
  'get/user',
  async (userId, thunkAPI) => {
    try {
      const userInfoJSON = localStorage.getItem('userInfo');
      const userInfo = JSON.parse(userInfoJSON)
      const {token} = userInfo  
      const JWTtoken = token
      console.log(JWTtoken);
      // Set the authorization header with the token
      const config = {
        headers: {
          Authorization: `Bearer ${JWTtoken}`,
        },
      };

      const response = await axios.get(`http://localhost:5000/user/${userId}`, config);;
      localStorage.setItem('userInfo', JSON.stringify(response.data))
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getUserProfile = createAsyncThunk(
  'get/user/profile',
  async (thunkAPI) => {
    try {
      const userInfoJSON = localStorage.getItem('userInfo');
      const userInfo = JSON.parse(userInfoJSON)
      const {_id,token} = userInfo  
      const JWTtoken = token
      console.log(JWTtoken);
      // Set the authorization header with the token
      const config = {
        headers: {
          Authorization: `Bearer ${JWTtoken}`,
        },
      };

      const response = await axios.get(`http://localhost:5000/user/profile`, config);;
      
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const updateUserById = createAsyncThunk(
  'user/updateUserById',
  async (updatedUser ,{ getState, rejectWithValue }) => {
    // const {user} = useSelector((store)=>store.user)
    try {
      // Get the JWT token from the state
      const userInfoJSON = localStorage.getItem('userInfo');
      const userInfo = JSON.parse(userInfoJSON)
      const {username,token} = userInfo  
      const JWTtoken = token
      console.log(JWTtoken);
      // Set the authorization header with the token
      const config = {
        headers: {
          Authorization: `Bearer ${JWTtoken}`,
        },
      };
      console.log(updatedUser.data);
      // Make the API call to update the user
      const response = await axios.put(`http://localhost:5000/user/${updatedUser.id}`, updatedUser.data, config);

      // Return the updated user data
      localStorage.setItem('userInfo', JSON.stringify(response.data))
      alert(`${username} updated sucessfully`)
      return response.data;
    } catch (error) {
      // Handle errors and reject the promise with an error message
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue({ message: error.message });
      }
    }
  }
);


export const addFavCourse = createAsyncThunk(
  'course/addFav',
  async(courseId,{thunkAPI})=>{
      try {
          const userInfoJSON = localStorage.getItem('userInfo');
          const userInfo = JSON.parse(userInfoJSON)
          const {_id,token} = userInfo  
          const JWTtoken = token
          const id = _id
          // Set the authorization header with the token
          const config = {
              headers: {
              Authorization: `Bearer ${JWTtoken}`,
              },
          };
          const response = await axios.put(`http://localhost:5000/course/favCourse/${id}`,{courseId:courseId}, config);
          localStorage.setItem('userInfo', JSON.stringify(response.data))
          return response.data
      } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.response.data);
      }
  }
)

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null


const userSlice = createSlice({
    name:'user',
    initialState: {
        user: userInfoFromStorage,
        loading: false,
        error: null,
      },
    reducers:{
        
    },
    extraReducers: (builder) => {
        builder
          .addCase(login.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;
            state.error = null;
          })
          .addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
          .addCase(signup.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(signup.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;
            state.error = null;
          })
          .addCase(signup.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
          .addCase(updateUserById.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(updateUserById.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
          })
          .addCase(updateUserById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
          .addCase(getUserDetails.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(getUserDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
          })
          .addCase(getUserDetails.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
        .addCase(addFavCourse.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(addFavCourse.fulfilled,(state,action)=>{
            state.user = action.payload;
            state.loading = false;
            state.error = null
        })
        .addCase(addFavCourse.rejected,(state,action)=>{
            state.loading=false;
            state.error= action.payload
        })
        .addCase(getUserProfile.pending,(state)=>{
          state.loading=true;
          state.error=null;
        })
        .addCase(getUserProfile.fulfilled,(state,action)=>{
            state.user = action.payload;
            state.loading = false;
            state.error = null
        })
        .addCase(getUserProfile.rejected,(state,action)=>{
            state.loading=false;
            state.error= action.payload
        })
      },
})
export const {logout} = userSlice.actions
export default userSlice.reducer;
