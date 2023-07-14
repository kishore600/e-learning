import { MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import Logo from '../img/pgilogo2.png'

const footer = () => {
  return (
    <div className='font' >
      <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted' >
      <section  className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block' style={{color:'white'}}>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset '>
            <MDBIcon color='light' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='youtube' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='linkedin' />
          </a>
        </div>
      </section>

      <section>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <img src={Logo} style={{width:'100px'}}/>
              </h6>
              <p style={{color:'white'}}>
                <a href='#!' className='text-reset'>
                  About Us
                </a>
              </p>
              <p style={{color:'white'}}>
                <a href='#!' className='text-reset'>
                  Blog
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 style={{color:'white'}} className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p style={{color:'white'}}>
                <MDBIcon color='light' icon='home' className='me-2' />
                Plant Green Inertia, Thiruvenkatapuram, Choolaimedu,  Nungambakkam Chennai, Tamil Nadu - 600094
              </p>
              <p style={{color:'white'}}>
                <MDBIcon color='light' icon='envelope' className='me-3' />
                training.pgi@gmail.com<br/>plantgreeninertia@gmail.com
              </p>
              <p style={{color:'white'}}>
                <MDBIcon color='light' icon='phone' className='me-3' /> +91 8220699083
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
       <p style={{color:'white'}}> © 2023 Copyright:
        <a className='text-reset fw-bold' href='#'>
          All Rights Reserved
        </a>
        </p>
      </div>
    </MDBFooter>
    </div>
  )
}

export default footer