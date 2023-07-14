import React,{useState,useEffect} from 'react'
import { Button } from 'react-bootstrap'
import { styled } from '@mui/material'
import Logo from '../img/g-icon.png'
import {login} from '../features/user/UserSlice'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loading from './Loading'
import { useLocation } from 'react-router-dom';

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
  function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation();

  const {user,error,loading} = useSelector((store)=>store.user)
  
  const redirect = location.search ? location.search.split('=')[1] : '/'
  
  useEffect(() => {
    if (user) {
      navigate(redirect)
    }
  }, [navigate, user, redirect])
  
  const handelSubmit = (event)=>{
    event.preventDefault()
    dispatch(login({email,password}))
  }
  return (
<div  className='font'>
      <p  style={{ display: "flex", justifyContent: "center", paddingTop:"70px"}}><h3 style={{fontWeight:"bolder"}}>Login to your e-learning account <i class="fa-solid fa-desktop"></i> </h3> </p>
      {error && <h1>{error.msg}</h1>}
      {loading && <Loading />}
    <div style={{ display: "flex", justifyContent: "center",  padding: '15px' }}>
       <Gbutton  variant=''><a href='#'  style={{color:"black", textDecoration:"none"}}>
          <b><img src={Logo} width={"30"} style={{paddingRight:"10px"}} /> Continue with Google</b></a>
      </Gbutton>
    </div> 
    <form onSubmit={handelSubmit}>

    <div style={{ display: "flex", justifyContent: "center",  padding: '15px' }}>
    <input  className="square bg-white rounded-pill" width= "200px" type="text"  size="30" style={{height:'40px'}}
    value={email}
    onChange={(event) => setEmail(event.target.value)}
    placeholder='  Email'/>
    </div>

    <div style={{ display: "flex", justifyContent: "center",  padding: '15px' }}>
    <b><input  className="square bg-white rounded-pill" width= "200px" type="password" size="30" style={{height:'40px'}}
    value={password}
    onChange={(event) => setPassword(event.target.value)}
    placeholder='  Password'/></b>
    </div>

    <div style={{ display: "flex", justifyContent: "center", padding: '15px' }}>
        <Greenbutton variant="success" class="btn btn-success" const path = '/Login' type='submit' >
        Log In
        </Greenbutton>
    </div>
    </form>

    <div style={{ display: "flex", justifyContent: "center", padding: '15px'}}>
    <p  style={{marginBottom:'150px'}}><b>Don't have an Account? <a href='./Signup' style={{color:'#1c8454'}}>Sign Up</a></b></p> 
    </div>
</div>
  )
}

export default Signin