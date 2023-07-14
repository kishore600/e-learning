import React, { useState,useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { styled } from '@mui/material'
import {signup} from '../features/user/UserSlice'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loading from './Loading'
import { useLocation } from 'react-router-dom';

const Greenbutton=styled(Button)({
    backgroundColor:"#1c8454", 
    borderRadius:"20px",
    "&:hover":{
      backgroundColor:"#2B6F39",
      color:"white"
    }
  })

function Signup() {
  const navigate = useNavigate()
  const location = useLocation();
  const {user,error,loading} = useSelector((store)=>store.user)

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()
  const redirect = location.search ? location.search.split('=')[1] : '/'
  
  useEffect(() => {
    if (user) {
      navigate(redirect)
    }
  }, [navigate, user, redirect])

  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log({username,email,password});
    dispatch(signup({username,email,password}))
  }


  return (
<div className='font'>
    <p style={{ display: "flex", justifyContent: "center", paddingTop:"70px"}}><h3 style={{fontWeight:"bolder"}}>Sign Up And Start Learning <i class="fa-solid fa-desktop"></i> </h3> </p>
    {error && <h1>{error.error}</h1>}
      {loading && <Loading />}
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", justifyContent: "center",  padding: '15px' }}>
      <input  className="square bg-white rounded-pill" width= "200px" type="text"  size="30" style={{height:'40px'}} placeholder='  Fullname' 
      value={username}
      onChange={(event) => setUsername(event.target.value)} required/>
      </div> 

      <div style={{ display: "flex", justifyContent: "center",  padding: '15px' }}>
      <input  className="square bg-white rounded-pill" width= "200px" type="text"  size="30" style={{height:'40px'}} placeholder='  Email'
      value={email}
      onChange={(event) => setEmail(event.target.value)}
      required/>
      </div>

      <div style={{ display: "flex", justifyContent: "center",  padding: '15px' }}>
      <b><input  className="square bg-white rounded-pill" width= "200px" type="password" size="30" style={{height:'40px'}} placeholder='  Password' 
      value={password}
      onChange={(event) => setPassword(event.target.value)}
      required/></b>
      </div>

      <div className="square bg-white rounded-pill" style={{ display: "flex", justifyContent: "center", padding: '15px' }}>
          <Greenbutton variant="success" class="btn btn-success" type='submit' const path = '/Login' >
                  Create Account
          </Greenbutton>
      </div>

    </form>
    <div style={{ display: "flex", justifyContent: "center", padding: '15px' }}>
    <p style={{marginBottom:'150px'}}><b>Already have an Account? <a href='./Signin' style={{color:'#2B6F39'}}>Log In</a></b></p> 
    </div>
</div>
  )
}

export default Signup