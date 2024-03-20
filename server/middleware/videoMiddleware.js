import app from '../firebase.js'
import {getStorage,ref,uploadBytes,getDownloadURL} from "firebase/storage"

const videoUpload = async(req,res)=>{
    const storage = getStorage()
    if(!req.file){
        res.status(400).send("NO file has been uploaded")
    }
    const StorageRef = ref(storage,req.file.originalname)
    const metadata = {
        contentType:'video/mp4'
    }
    uploadBytes(StorageRef,req.file.buffer,metadata)
    .then(()=>{
        getDownloadURL(StorageRef)
        .then(url=>{
            return url
        })
        .catch(err=>{
            console.log(err);
            res.status(500).send(err)
        })
    })
}

export default videoUpload