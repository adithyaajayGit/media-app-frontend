import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { deletevideoAPI, videoHistoryAPI } from '../../Services/allAPI';

const VideoCard = ({ video, setdeletevideocard,insideCategory}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);


  const handleShow = async () => {
    setShow(true);

    // Ensure this code runs when the modal is shown
    const { name, video: videoLink } = video;
    let today = new Date();

    let timeStamp = new Intl.DateTimeFormat('en-US', {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(today);

    // console.log(timeStamp);

    let videoHistory = { name, video: videoLink, timeStamp }
    //make api call
    await videoHistoryAPI(videoHistory)
  }

  const deletevideo = async (id) => {

    await deletevideoAPI(id)
    setdeletevideocard(true)

  }

  const dragStarted=(e,id)=>{
    console.log("drag started"+id);
    e.dataTransfer.setData("VideoId",id)
  }

  return (
    <>
      <Card style={{ width: '16rem' }} className='p-2' draggable onDragStart={e=>dragStarted(e,video?.id)}>
        <Card.Img variant="top" onClick={handleShow} src={video.image} />
        <Card.Body>
          <Card.Title className='d-flex justify-content-between align-items-center'>
            <h2>{video.name}</h2>
          </Card.Title>
{        
   insideCategory?null:<Button onClick={() => deletevideo(video?.id)} className='justify-content-end align-items-end' variant='danger' ><i class="fa-solid fa-trash-can"></i></Button>
}  
        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="468"
            height="315"
            src={`${video.video}?autoplay=1`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>
          </iframe>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default VideoCard
