import React,{useState} from 'react';
import { Button } from 'react-bootstrap'
import { styled } from '@mui/material'
import Logo from '../img/g-icon.png'
import { useDispatch, useSelector } from 'react-redux';
import { updateUserById  } from '../features/user/UserSlice';

const Gbutton=styled(Button)({
    color: "black",
    borderColor:"black",
    borderRadius:"50px",
    backgroundColor:"white",
    padding:"10px 60px",
    "&:hover":{
      backgroundColor:"#E7E7E7",
      color:"black",
      borderColor:"black"
    }
})

const Greenbutton=styled(Button)({
    backgroundColor:"#1c8454", 
    borderRadius:"20px",
    padding:"7px 35px",
    borderColor:"#1c8454",
    "&:hover":{
      backgroundColor:"#2B6F39",
      color:"white",
      borderColor:"#1c8454"
    }
  })
const  Profile =()=> {
  
  const {user,error,loading} = useSelector((store)=>store.user)
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const userID = user._id
    const UpdatedData = {username,email,password}
    if(password != confirmPassword){
      alert('password is not match')
    }else{
      const updatedUser = { id: userID, data: UpdatedData };
      dispatch(updateUserById(updatedUser));
    }
  
  };
  return (
    <div style={{justifyContent:"center", paddingTop:'70px'}}>
        <div className='outfit '><p><h2>Personal Information</h2></p>
        <p><b>Add or Edit profile</b></p></div>
        <form onSubmit={handleSubmit}>

        <div style={{ paddingTop:"20px"}}>
        <div style={{marginRight:"200px",padding:"5px"}}><b>Name: </b></div>
    <input  className="square bg-white rounded-pill" width= "200px" type="text"  size="30" style={{height:'40px'}} value={username}  placeholder='  Fullname'
      onChange={(event) => setUsername(event.target.value)}
      required/>
    </div> 

    <div style={{ padding:"15px"  }}>
    <div style={{marginRight:"200px", padding:"5px"}}><b>Mail Id: </b></div>
    <input  className="square bg-white rounded-pill" width= "200px" type="text"  size="30" style={{height:'40px'}} value={email} onChange={(event) => setEmail(event.target.value)} placeholder='  Your Mail ID'/>
    </div>

    <div style={{  }}>
    <div style={{marginRight:"185px",padding:"5px"}}><b>Password: </b></div>
    <b><input  className="square bg-white rounded-pill" width= "200px" type="password" size="30" style={{height:'40px'}} value={password} onChange={(event) => setPassword(event.target.value)}  placeholder='  Password' /></b>
    </div>

    <div style={{  }}>
    <div style={{marginRight:"185px",padding:"5px"}}><b>Confirm Password: </b></div>
    <b><input  className="square bg-white rounded-pill" width= "200px" type="password" size="30" style={{height:'40px'}} value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} placeholder='  Confirm Password' /></b>
    </div>

    <div className="square bg-white rounded-pill" style={{ display: "flex", justifyContent: "center", padding: '30px' }}>
        <Greenbutton variant="success" class="btn btn-success" type='submit' style={{marginBottom:'70px'}}>
                 Update
        </Greenbutton>
       </div>
      </form>
    </div>  
  )             
}

export default Profile