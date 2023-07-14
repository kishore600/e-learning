import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/user/UserSlice'
import courseReducer from "./features/course/CourseSlice";
import categoryReducer from './features/category/CategorySlice'

const store = configureStore({
    reducer:{
        user:userReducer,
        course:courseReducer,
        category:categoryReducer,
    }
})

export default store;
