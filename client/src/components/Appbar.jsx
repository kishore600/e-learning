import React, { Component, useEffect } from 'react';
import {Nav, Navbar, Container, NavDropdown, Form, Button} from 'react-bootstrap';
import Logo from '../img/pgilogo.png';
import {Avatar, Grid, styled} from '@mui/material';
import '../components/fonts.css';
// import {logout} from '../features/user/UserSlice'
import { useSelector,useDispatch } from 'react-redux';
import Category from './Category';
import { getCategory } from '../features/category/CategorySlice';
import Loading from './Loading';

// const Signinbutton=styled(Button)({
  //   backgroundColor:"white", 
  //   color:"black",
  //   // #1c8454
  //   "&:hover":{
    //     // #2B6F39
    //     backgroundColor:"black",
    //     color:"white"
    //   }
    // })
    
    const Signupbutton=styled(Button)({
      backgroundColor:"black", 
      // #1c8454
      "&:hover":{
        // #2B6F39
        backgroundColor:"black",
        color:"white"
      }
    })
    
//     export default class 
//     extends Component {
//       render() {
//         const {user} = useSelector((store)=>store.user)
//         return (
    //       <div className='font'>
    //      {/* mb-1 */}
    //   <div class="shadow p-7  bg-white rounded">
    //      <Navbar sticky="top" bg="white" expand="lg">
    //   <Container fluid>
    //     <Navbar.Brand href="#">
    //       <a href='/'><img src={Logo} width={"100"} /> </a>
    //     </Navbar.Brand>
    //     <Nav.Link href="/" style={{marginLeft:"25px"}}>Home</Nav.Link>
    //     <NavDropdown title="Categories" id="navbarScrollingDropdown" style={{marginLeft:"25px"}}>
    //           <NavDropdown.Item href="#action3">
    //             Entrepreneurship
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action4">
    //             Digital Marketing
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action5">
    //             Public Speaking
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action6">
    //             Placement Training
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action7">
    //             Spoken English
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action7">
    //             E Commerce
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action7">
    //             Content Creation
    //           </NavDropdown.Item>
    //       </NavDropdown>
    //     <Navbar.Toggle aria-controls="navbarScroll" />
    //     <Navbar.Collapse id="navbarScroll">
    //     <Grid item xs direction="column" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    //         <div  className="font" style={{ display: "flex", justifyContent: "center", alignItems: "center"}} >
    //             <span  id="basic-addon1" > <i class="fa-solid fa-magnifying-glass"></i></span>
    //             <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
    //             <input className="square bg-white rounded-pill" width= "250px" type="text" id="text" name="text_name" align='center' size="35" style={{height:'50px'}} placeholder= '  Search for anything'/></div>
    //       </Grid>
    //       <div>
    //         <a href='/userprofile'>
    //         <Avatar></Avatar>
    //         </a>
    //       </div>
    //       <div > <a href='./Signin' style={{color:"black",textDecoration:'none' }}>
    //         {
    //           user ? <Button className='outfit' variant='outline-dark'>Logout</Button> : <Button className='outfit' variant="outline-dark" >Log In</Button>
    //         }
          
    //       </a>
    //       </div>
    //       <Signupbutton className='outfit' variant="contained" sx={{marginLeft:"20px", border:1, color:"white"}}><a href='./Signup' style={{color:'white', textDecoration:'none'}}>Sign Up</a></Signupbutton>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    //   </div>
    //   </div>
//     )
//   }
// }

const Appbar = () => {
  const {user} = useSelector((store)=>store.user)
  const {categorys,loading} = useSelector((store)=>store.category)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getCategory())
  },[])
  return (
    <div className='font'>
    {/* mb-1 */}
 <div class="shadow p-7  bg-white rounded">
    <Navbar sticky="top" bg="white" expand="lg">
 <Container fluid>
   <Navbar.Brand href="#">
     <a href='/'><img src={Logo} width={"100"} /> </a>
   </Navbar.Brand>
   <Nav.Link href="/" style={{marginLeft:"25px"}}>Home</Nav.Link>
   <NavDropdown title="Categories" id="navbarScrollingDropdown" style={{marginLeft:"25px"}}>
          {
            loading ? <Loading /> :(
              <>
              {
                Array.isArray(categorys) ? categorys.map((category)=>{
                  return <Category category = {category} key={category._id} {...category}  />
                }) : []
              }
              </>
              )
          }
         {/* <NavDropdown.Item href="#action4">
           Digital Marketing
         </NavDropdown.Item>
         <NavDropdown.Item href="#action5">
           Public Speaking
         </NavDropdown.Item>
         <NavDropdown.Item href="#action6">
           Placement Training
         </NavDropdown.Item>
         <NavDropdown.Item href="#action7">
           Spoken English
         </NavDropdown.Item>
         <NavDropdown.Item href="#action7">
           E Commerce
         </NavDropdown.Item>
         <NavDropdown.Item href="#action7">
           Content Creation
         </NavDropdown.Item> */}
     </NavDropdown>
   <Navbar.Toggle aria-controls="navbarScroll" />
   <Navbar.Collapse id="navbarScroll">
   <Grid item xs direction="column" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
       <div  className="font" style={{ display: "flex", justifyContent: "center", alignItems: "center"}} >
           <span  id="basic-addon1" > <i class="fa-solid fa-magnifying-glass"></i></span>
           <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
           <input className="square bg-white rounded-pill" width= "250px" type="text" id="text" name="text_name" align='center' size="35" style={{height:'50px'}} placeholder= '  Search for anything'/></div>
     </Grid>
     <div>
       <a href='/userprofile'>
       <Avatar></Avatar>
       </a>
     </div>
     <div > <a href='/Signin' style={{color:"black",textDecoration:'none' }}>
       {
         user ? <Button className='outfit' variant='outline-dark' onClick={()=>{localStorage.removeItem('userInfo')}}>Logout</Button> : <Button className='outfit' variant="outline-dark" >Log In</Button> 
       }
     
      {
          user ?  <></>: <Signupbutton className='outfit' variant="contained" sx={{marginLeft:"20px", border:1, color:"white"}}><a href='./Signup' style={{color:'white', textDecoration:'none'}}>Sign Up</a></Signupbutton>
      }
     
     </a>
     </div>
   </Navbar.Collapse>
 </Container>
</Navbar>
 </div>
 </div>
  )
}

export default Appbar