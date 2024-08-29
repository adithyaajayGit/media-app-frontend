import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./server_url";

// upload video

export const uploadVideoAPI= async(video)=>{
    return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)
}

// get alluploadedVideos


export const getalluploadedVideosAPI = async()=>{
    return await commonAPI("GET", `${SERVER_URL}/allVideos`,"")
}


/// get singlevideoAPI

export const getsinglevideoAPI = async (id)=>{
    return await commonAPI("GET", `${SERVER_URL}/allVideos/${id}`,"")
}


// delete video


export const deletevideoAPI= async(id)=>{
    return await commonAPI("DELETE", `${SERVER_URL}/allVideos/${id}`,{})
}

/// video history

export const videoHistoryAPI = async (video)=>{
    return await commonAPI("POST", `${SERVER_URL}/history`,video)
}


//getHistroy

export const getvideoHistroyAPI = async ()=>{
    return await commonAPI('GET', `${SERVER_URL}/history`,"")
}

//deleteHistroy

export const deleteHistoryAPI= async(id)=>{
    return await commonAPI("DELETE", `${SERVER_URL}/history/${id}`,{})
}


// add videos category

export const addvideoCategoryAPI = async (category)=>{
    return await commonAPI("POST", `${SERVER_URL}/category`,category)
}


// get category


export const getvideoCategoryAPI = async ()=>{
    return await commonAPI("GET", `${SERVER_URL}/category`,"")
}

//delete category

export const deleteCategoryAPI= async(id)=>{
    return await commonAPI("DELETE", `${SERVER_URL}/category/${id}`,{})
}

//update category
export const updateCategoryAPI = async (id,categoryDetails)=>{
    return await commonAPI("PUT", `${SERVER_URL}/category/${id}`,categoryDetails)
}