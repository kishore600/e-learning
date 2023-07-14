import axios from 'axios'

const BASE_URL = "http://localhost:5000"

//API endpoints
const API_ENDPOINTS = {
    LOGIN:'/auth/login',
    SIGNUP:'/auth/register',
    GETCOURSE:'/course',
    GETALLCATEGORY:'/category'
}
// export const UpdateUserAPI = async (id, userData) => {
//     const {user} = useSelector((store)=>store.user)
//     try {
//         const config = {
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${user.token}`,
//             },
//         }
//       const response = await axios.put(`${BASE_URL}/user/${id}`, userData,config);
//       console.log(response);
//       return response.data;
//     } catch (error) {
//         throw error.response.data;
//     }
// };


const url = axios.create({
    baseURL:BASE_URL
})

export const api = {
    login:(credentials)=>url.post(API_ENDPOINTS.LOGIN,credentials),
    signup: (userData)=>url.post(API_ENDPOINTS.SIGNUP,userData),
    getCourse:()=>url.get(API_ENDPOINTS.GETCOURSE),
    getAllCategory:()=>url.get(API_ENDPOINTS.GETALLCATEGORY)
}