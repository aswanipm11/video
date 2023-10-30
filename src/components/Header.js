import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';


function Header() {
  return (

    <div>
          <Container>

<Navbar className="bg-light">
        <Container>
          <Link to={"/"} style={{textDecoration:"none"}}>

          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i.postimg.cc/W4pW2prv/png-clipart-black-star-art-five-pointed-star-black-star-angle-triangle-thumbnail.png"
              width="70"
              height="55"
              className="d-inline-block align-top"
            />
      <b className='fs-2 ms-3 mt-4 text-danger'>VIDEO CAFE</b>
          </Navbar.Brand>

          </Link>
        </Container>
      </Navbar>
      </Container>

    </div>

  )
}

export default Header