import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import {  Trash2 } from 'react-feather'
import { deleteHistory, getAllHistory } from '../services/allapis'
import { Link } from 'react-router-dom'



function History() {
  const [histories,setHistories]=useState([])
  const getHistories=async()=>{
    const {data}=await getAllHistory()
    setHistories(data);
  }
  useEffect(()=>{
    getHistories()
  },[])
  // console.log(histories);

  const removeItem=async(id)=>{
await deleteHistory(id)
getHistories()

  }

  return (
    <div >
        <h2 className='text-center' style={{fontFamily:'monospace'}}> Watch History</h2>
        <div className='text-end pe-5 pb-3' >
<Link to={'/home'}>
<Button className='btn btn-info'>Go Back</Button>

</Link>
        </div >
        { histories.length>0?(
                  <Table className='w-75 container ' striped bordered hover variant="info">
                  <thead className='text-center fs-4'>  
                    <tr > 
                      <th>#</th>
                      <th>Date</th>
                      <th>Title</th>
                      <th>Video Url</th>
                      <th></th>
            
                    </tr>
                  </thead>
                  <tbody className='text-center'>
                   {
                   histories?.map((i,index)=>
                      <tr>
                      <td>{index+1}</td>
                      <td>{i?.date}</td>
                      <td>{i?.video_title}</td>
                      <td>{i?.url}</td>
                      <td>
                        <Trash2 onClick={()=>removeItem(i?.id)} size={50} className='btn text-white'></Trash2>
                      </td>
            
                    </tr>

        )
                    }
                  </tbody>
                </Table>):<h1>no watch histories</h1>
            
        }
    </div>
  )
}

export default History