import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



function Landingpage() {
  return (
    <div >
      <Container>

        <Row>
          <Col>
          <h1 className='mt-5 text-info'>VIDEO UPLOADER</h1>
          <p className='text-black fs-5'> We all people love to share photos, videos and sounds on Facebook, Twitter, Youtube, Dailymotion, or other media-sharing sites. Video Cafe is a theme that helps you to do that! 
          </p>
<Link to={'/Home'}>
<Button variant="primary">Get Started</Button>
</Link>
          </Col>
           <Col>
         <img style={{height:'200px',width:'300px',container:'revert'}}src='https://i.postimg.cc/90qqt5TS/transparent.jpg' alt=''/>
          </Col>
        </Row>
        <Row>
          <h1 id='a1' style={{fontFamily:'initial'}} className='text-center text-danger mt-5'>FEATURES</h1>
  <Col lg={4} md={2} sm={1}>
  <Card className='bg-light mb-5' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.postimg.cc/QNwr1XCX/round.gif" />
      <Card.Body>
        <Card.Title>explore</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
      </Card.Body>
    </Card>
  </Col>
  <Col lg={4} md={2} sm={1}>
  <Card className='bg-light'style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.postimg.cc/Kvjyg1xp/imagesss.gif" />
      <Card.Body>
        <Card.Title>explore</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
      </Card.Body>
    </Card>
  </Col>
  <Col lg={4} md={2} sm={1}>
  <Card className='bg-light'style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.postimg.cc/HLw9KPzJ/tumblr-nk8ynm-SAsl1tcuj64o1-400.gif" />
      <Card.Body>
        <Card.Title>explore</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
      </Card.Body>
    </Card>
  </Col>


</Row>

      </Container>

    </div>
  )
}

export default Landingpage