import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import  { getAllVideos} from '../services/allapis'
import { Col, Row } from 'react-bootstrap'




function View({updatedstate}) {
  const [allVideos,setAllVideos]=useState([ ])
      //state to update delete
const [deleteUpdate,setDeleteUpdate]=useState([])

  const acessAllvideos=async()=>{
     const result=await getAllVideos()
     if(result.status>=200 && result.status<300){
    //  console.log(result.data);
    setAllVideos(result.data)
    }
  }
  console.log(allVideos);

  useEffect(()=>{
    acessAllvideos()
  },[updatedstate,deleteUpdate])
  return (
    <Row>
      {
        allVideos.length>0?(
          allVideos.map(i=>
<Col lg={5} md={5}>
  <Videocard deleteFunc={setDeleteUpdate} video={i}></Videocard></Col>

          )

        ):<h1>no videos in your collection</h1>
      }
    </Row>
  )
}

export default View