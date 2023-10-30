import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Footer() {
  return (
    <div className='bg-light blue '>
 <Row >
  <Col> <img
              alt=""
              src="https://i.postimg.cc/W4pW2prv/png-clipart-black-star-art-five-pointed-star-black-star-angle-triangle-thumbnail.png"

              width="40"
              height="50"
              className="d-inline-block align-top"
            />
      <b className='fs-4 text-danger mt-4' style={{fontFamily:'initial'}}>VIDEO CAFE</b>
<h5 className='mt-2 fs-5'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit a placeat aperiam minus laborum a cum, fugiat accusantium.</h5>
  </Col>
  <Col>
  <h4 className='mt-4 text-danger' style={{fontFamily:'initial'}}>LINK</h4>
<Link to={'/'} style={{textDecoration:'none'}}>
<a className='fs-5 btn' style={{textDecoration:'none',color:'black'}}>Landining</a><br></br>
</Link>
<Link to={'/home'} style={{textDecoration:'none'}}>
<a className='fs-5 btn' style={{textDecoration:'none',color:'black'}}>Home</a><br></br>
</Link>
<Link to={'/watch-history'} style={{textDecoration:'none'}}>
<a className='fs-5 btn' style={{textDecoration:'none',color:'black'}}>Watch History</a>
</Link>
  </Col>
  <Col lg={3} md={6} sm={12}xs={12}>
  <h4 className='mt-4 text-danger' style={{fontFamily:'initial'}}>guides</h4>
<h5>react</h5>
<h5>react bootstrap</h5>
<h5>Routing</h5>
</Col>

<Col>
<h4 className='mt-4 text-danger' style={{fontFamily:'initial'}}>Contact us</h4>
<input type='text' className='form-control w-75' placeholder='enter mail'/>
<button className='btn btn-info mt-3' >send</button><br></br>
<i  class="fa-brands fa-twitter mt-3 ms-2"></i>
<i class="fa-brands fa-facebook ms-2"></i>
<i class="fa-brands fa-instagram ms-2"></i>
<i class="fa-brands fa-github ms-2"></i>


</Col>

</Row> 
    </div>
  )
}

export default Footer