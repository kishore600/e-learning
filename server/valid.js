import mongoose from "mongoose";
const valid = (id)=>{
    var isValid = mongoose.Types.ObjectId.isValid(id); //true
    if(isValid){
        return true
    }else{
        return false
    }
}

export default valid