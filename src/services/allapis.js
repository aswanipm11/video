import { baseUrl } from "./baseurl";
import { commonrequest } from "./commonrequest";
//add video
export const addVideo=async(body)=>{
    return await commonrequest('POST',`${baseUrl}/videos`,body)
}
//get all videos

export const getAllVideos = async()=>{
    return await commonrequest(`GET`,`${baseUrl}/videos`,{})
}

//delete single video
export const deleteVideo=async(id)=>{
    return await commonrequest('DELETE',`${baseUrl}/videos/${id}`,{})
}

//add catrgory

export const addCategory=async(body)=>{
    return await commonrequest('POST',`${baseUrl}/categories`,body)
}

//get all categories

export const getAllcat = async()=>{
    return await commonrequest(`GET`,`${baseUrl}/categories`,{})
}

//category delete
export const deleteCat=async(id)=>{
    return await commonrequest('DELETE',`${baseUrl}/categories/${id}`,{})
}

//ADD HISTORY 
export const addHistory=async(body)=>{
    return await commonrequest('POST',`${baseUrl}/histories`,body)
}
//get all histories

export const getAllHistory = async()=>{
    return await commonrequest(`GET`,`${baseUrl}/histories`,{})
}
//delete history
export const deleteHistory=async(id)=>{
    return await commonrequest('DELETE',`${baseUrl}/histories/${id}`,{})
}



//drag and drop

//acess single video
export const getVideo=async(id)=>{
    return await commonrequest('GET',`${baseUrl}/videos/${id}`,{})
}

//update category
export const updateCategory=async(id,body)=>{
    return await commonrequest('PUT',`${baseUrl}/categories/${id}`,body)
}
