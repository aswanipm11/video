import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Categories from '../components/Categories'
import Add from '../components/Add'
import  View from '../components/View'
import { Link } from 'react-router-dom'




function Home() {
  //state for state-liftting
  const [addUpdate,setAddUpdate]=useState({})
  return (
    <Container>
          <div >
      <Row>
        <Col>
        <h1 className=' ps-5 mb-4 mt-5 text-black'><span className='text-danger'>Start</span> 
  Uploading <span className='text-danger'> Videos</span> for <span className='text-danger'>Free</span></h1>
      
  <div className='m-5 fs-4 ps-5 '>


    <Link to={'/watch-history'} style={{textDecoration:'none'}}>       
          <a className='text-dark ' style={{ fontFamily: 'monospace', textDecoration: 'none' }} href=""> 
            
            <i class="fa-regular fa-clock fa-spin "> 
              </i><span className='text-danger ms-4'>view</span><span className='text-black'> watch</span> <span className='text-danger'>history</span></a>
  </Link>
            

            <p className='ms-5 mt-4 text-black fs-5'>dgh bnm,bvju djhukmn fjvkjiore fkjdiurhinj fnvkjejnd,m bdgtnjbvc</p>
          </div>
</Col>

{/* <Col className='text-start'> */}

<img className='ms-0' style={{ height: '200px', width: '200px' }} src="https://i.postimg.cc/XqYg2x8m/video-icon-23.png" alt="" />

{/* </Col> */}
          </Row>
      <Row className='p-5'>

        <Col lg={1}>
      <Add update={setAddUpdate}></Add>

        </Col>

        <Col lg={7}>
        <View updatedstate={addUpdate}></View>
        </Col>

        <Col lg={4}>
        <Categories></Categories>
        </Col>

      </Row>
    </div>

    </Container>
  )
}

export default Home