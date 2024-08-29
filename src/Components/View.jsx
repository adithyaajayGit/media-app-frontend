import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getalluploadedVideosAPI, getvideoCategoryAPI, updateCategoryAPI } from '../../Services/allAPI'
import { json } from 'react-router-dom'


const View = ({ uploadvideoresponse,setDropVideoResponse }) => {

  const [deletevideocard, setdeletevideocard] = useState(false)

  const [allVideos, setALLVideos] = useState([])

  useEffect(() => {
    getallvideos()
    setdeletevideocard(false)
  }, [uploadvideoresponse, deletevideocard])


  const getallvideos = async () => {
    const result = await getalluploadedVideosAPI();
    // console.log(result);
    if (result.status == 200) {
      // console.log(result.data);
      setALLVideos(result.data)
    } else {
      console.log(result.message);
      setALLVideos([])
      alert("api failed")
    }
  }

  console.log(allVideos);

  const dragOver = (e) => {
    e.preventDefault()
  }


  const videoDropped = async (e) => {
    const { videoId, categoryId } = JSON.parse(e.dataTransfer.getData("data"))
    // console.log(videoId,categoryId);
    const { data } = await getvideoCategoryAPI()
    const selectedCategory = data.find(item => item.id == categoryId)
    let result = selectedCategory.allVideos.filter(video => video.id !== videoId)
    console.log(result);
    let { id, categoryName } = selectedCategory
    let newCategory = { id, categoryName, allVideos: result }
    console.log(newCategory);
    const res = await updateCategoryAPI(categoryId, newCategory)
    console.log(res);
    setDropVideoResponse(res)
  }


  return (
    <>
      <Row droppable="true" onDragOver={e => dragOver(e)} onDrop={e => videoDropped(e)}>
        {
          allVideos?.length > 0 ? allVideos.map(video => (
            <Col sm={12} md={4} lg={3}>
              <VideoCard video={video} setdeletevideocard={setdeletevideocard} />
            </Col>
          )) : <p className='text-danger fw-bolder'>Nothing to display</p>
        }

      </Row>
    </>
  )
}

export default View
