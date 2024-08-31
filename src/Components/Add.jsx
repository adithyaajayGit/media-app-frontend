import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { uploadVideoAPI } from '../../Services/allAPI';




const Add = ({Setuploadvideoresponse}) => {
  const [uploadVideo, setUploadVideo] = useState({ id: "", name: "", image: "", video: "" })
  console.log(uploadVideo); 



  const getyoutubeLink = (e) => {
    const { value } = e.target
    if (value.includes("v=")) {
      let vid = value.split('v=')[1].slice(0, 11)
      console.log(`https://www.youtube.com/embed/${vid}`);
      setUploadVideo({ ...uploadVideo, video: `https://www.youtube.com/embed/${vid}` })
    } else {
      setUploadVideo({ ...uploadVideo, video: "" })
    }
  }


  const handleClick = async () => {
    const { id, name, image, video } = uploadVideo;

    if (!id || !name || !image || !video) {
        alert("please fill all fields");
    } else {
        // video uploading to server
        const result = await uploadVideoAPI(uploadVideo);
        console.log(result);
        if (result.status >= 200 && result.status <= 300) {
            alert("video uploaded successfully");
            handleClose();

            // make video input empty after uploading
            setUploadVideo({
                id: "", name: "", image: "", video: ""
            });
            Setuploadvideoresponse(result.data);
        } else {
            alert(result.message);
        }
    }
}




  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="d-flex mb-5 mt-5 align-items-center">
        <h2>Upload Videos </h2>
        <Button onClick={handleShow} className='ms-3' variant='light'> <i class="fa-solid fa-upload fa-fade "></i></Button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className='ms-1'>Enter Video ID</Form.Label>
              <Form.Control
                type="text"
                className='mb-2 p-2'
                placeholder="video id"
                autoFocus
                onChange={(e) => setUploadVideo({ ...uploadVideo, id: e.target.value })}

              />
              <Form.Label className='ms-1'>Enter Video Name</Form.Label>
              <Form.Control
                type="text"
                className='mb-2 p-2'
                placeholder="video name"
                autoFocus
                onChange={(e) => setUploadVideo({ ...uploadVideo, name: e.target.value })}
              />
              <Form.Label className='ms-1'>Enter Image URL</Form.Label>
              <Form.Control
                type="text"
                className='mb-2 p-2'
                placeholder="Image URL"
                autoFocus
                onChange={(e) => setUploadVideo({ ...uploadVideo, image: e.target.value })}

              />
              <Form.Label className='ms-1'>Enter Video URL</Form.Label>
              <Form.Control
                type="text"
                className='mb-2 p-2'
                placeholder="video URL"
                autoFocus
                onChange={getyoutubeLink}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClick}>Add </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
