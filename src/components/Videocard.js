import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Trash2 } from 'react-feather';
import { addHistory, deleteVideo } from '../services/allapis';
import uniqid from 'uniqid';
import { format } from 'date-fns';
import { baseUrl } from '../services/baseurl';


 

function Videocard({video,deleteFunc}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async () => {
    setShow(true);
    // body

    //id
    var id=uniqid()
    //title
    var video_title =video.caption

    //url
    var url=video.video_url
    //date
    var date=format(new Date(),'yyyy-MM-dd h:mm:ss a')
    // console.log(date);
    const body={id,video_title,url,date}
    if(body){
//api call
const result= await addHistory(body)
// console.log(result);
    }
  }

  const handleDelete=async(id)=>{
    const result=await deleteVideo(id)
    // console.log(result);
    if(result.status>=200 && result.status<300){
      deleteFunc(result.data)
    }
  }
  const dragStart=(e,id)=>{
    console.log("drag started.....source card id - " +id);
    //store dragged data
    e.dataTransfer.setData("cardId",id)
  }

  return (
    <div>
                        <Card draggable onDragStart={(e)=>dragStart(e,video.id)} className='mb-5 mt3 border-black' style={{ width: '18rem' }}>
      <Card.Img onClick={handleShow} variant="top" src={video.cover_image}/>
      <Card.Body>
        <Card.Title>{video.caption}   
        <div className='text-end'>  
          <Trash2 onClick={()=>handleDelete(video.id)} size={56} className='text-black btn'></Trash2>
          </div>       
          {/* <i  class="fa-solid fa-trash fa-fade "></i> */}
</Card.Title>
        </Card.Body>
 
        <Card.Text>
          

            {/* <i className='text-center ' class="fa-solid fa-trash fa-fade"></i> */}

        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button>
        <i className='text-center' class="fa-solid fa-trash fa-fade"></i>  */}

   </Card>
     
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>  <iframe width="100%" height="301"
         src={video.video_url} title="LEO - Official Trailer | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}


export default Videocard