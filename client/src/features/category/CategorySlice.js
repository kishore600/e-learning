import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";
import axios from "axios";

export const getCategory = createAsyncThunk(
    'category/getAll',
    async(rejectWithValue)=>{
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
          const response = await axios.get(`http://localhost:5000/category`, config);
          return response.data
        } catch (error) {
            console.log(error);
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
              } else {
                return rejectWithValue({ message: error.message });
            }
        }
    }
)




const categorySlice = createSlice({
    name:'category',
    initialState:{
        categorys:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getCategory.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(getCategory.fulfilled,(state,action)=>{
            state.categorys = action.payload;
            state.loading = false;
            state.error = null
        })
        .addCase(getCategory.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload
        })
    }
})

export default categorySlice.reducer