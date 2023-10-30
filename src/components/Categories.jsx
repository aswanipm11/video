import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import uniqid from 'uniqid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCat, getAllcat, getVideo, updateCategory } from '../services/allapis';
import { Trash } from 'react-feather';
import { Container } from 'react-bootstrap';


function Categories() {
  //state to hold input,id and video array
  const[catInputs,setcatInputs]=useState({
    id: "",
    name: " ",
      videos: [] 
  })
const [categories,setCategories]=useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setInputs=(e)=>{
    const {value,name}=e.target
    setcatInputs({...catInputs,[name]:value})
  }
  const addData=async()=>{
let id=uniqid()
setcatInputs({...catInputs,["id"]:id})
const {name}=catInputs
if(name==""){
  toast.error("add caption in input", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });

}
else{
  //api call
const result=await addCategory(catInputs)
if(result.status>=200 && result.status<300){
  setShow(false);
  getAllCategories()

  toast.success(`${result.data.name}added`, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });

}
}


  }
  // console.log(catInputs);
  const getAllCategories=async()=>{
const result=await getAllcat()
    if(result.status>=200 && result.status<300){
      setCategories(result.data);
  
    }
  }
  // console.log(categories);
  const removeCategory=async(id)=>{
   const result= await deleteCat (id)
    if(result.status>=200 && result.status<300){
      getAllCategories()

    }

  }
  useEffect(()=>{
getAllCategories()
  },[])

  const dragOver=(e)=>{
    e.preventDefault()
    console.log("dragged over the category");
  }
  const dropped=async(e,id)=>{
  console.log("dropped........cat Id-" +id);
  const videoId=e.dataTransfer.getData("cardId")
  console.log(videoId);


//acess video data from backend
 const {data}= await getVideo (videoId)
 console.log(data);

 //selected dropped category from all categories
 const selectedCategory=categories.find(i=>i.id==id)
 console.log(selectedCategory);

//update category object with video data 
 selectedCategory.videos.push(data)
console.log(selectedCategory);

//api call to update the changed category
await updateCategory(id,selectedCategory)
getAllCategories()


}
    return (
      <Container>
            <div className='text-white'>
              <div>
              <Button style={{width:'300px' ,marginLeft:'-60px',marginTop:'-80px'}} variant="primary" onClick={handleShow}>
        Add Category
      </Button>

              </div>
      {
        categories.length>0?(
categories.map(i=>(
  <div droppable
  onDragOver={(e)=>dragOver(e)}
  onDrop={(e)=>dropped(e,i.id)}

  className='border mt-3 '>
    <p><span className='fs-4'> {i.name} </span></p>
    <div className='text-end'>
    <Trash onClick={()=>{removeCategory(i.id)}} size={55} className='text-black btn' ></Trash>
    </div>
    {
      i.videos.map(j=>(
<div>
  <img style={{height:"70px",width:"70px",padding:'5px'}} src={j.cover_image} alt=""/>
     </div>    
   ))
    }
  </div>
))
        ):<h1> no categories added</h1>
      }

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className='bg-black mt-2 text-white'>

<Modal.Title ><h4>Add Category</h4></Modal.Title>

          <FloatingLabel
                        controlId="floatingInput"
                        label="Category Name"
                        className="mb-3 mt-5 text-dark"
          >
            <Form.Control onChange={(e)=>setInputs(e)} name="name" type="text"/>

          </FloatingLabel>

        </Modal.Body>
        <Modal.Footer className='bg-dark '>
        <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addData}>
         Add
          </Button>

        </Modal.Footer>
        </Modal>
        <ToastContainer />
        



    </div>

      </Container>
  )
}

export default Categories




 


























