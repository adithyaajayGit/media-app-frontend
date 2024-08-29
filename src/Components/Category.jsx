import React, { useEffect, useState } from 'react';
import { Button, FloatingLabel, Modal, Form, Col, Row } from 'react-bootstrap';
import { addvideoCategoryAPI, deleteCategoryAPI, getsinglevideoAPI, getvideoCategoryAPI, updateCategoryAPI } from '../../Services/allAPI';
import VideoCard from './VideoCard';

const Category = ({dropvideoResponse}) => {
  const [categoryName, setCategoryName] = useState("");
  const [allCategories, setAllCategories] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = async () => {
    if (categoryName) {
      const result = await addvideoCategoryAPI({ categoryName, allVideos: [] });
      if (result.status >= 200 && result.status < 300) {
        handleClose();
        setCategoryName("");
        getCategories(); // Refresh the categories after adding a new one
      } else {
        alert(result.message);
      }
    } else {
      alert("Please fill in the missing fields");
    }
  };

  const deletecategory = async (id) => {
    const result = await deleteCategoryAPI(id);
    if (result.status >= 200 && result.status < 300) {
      getCategories(); // Refresh the categories after deletion
    } else {
      alert("Failed to delete the category");
    }
  };

  useEffect(() => {
    getCategories();
  }, [dropvideoResponse]);

  const getCategories = async () => {
    const { data } = await getvideoCategoryAPI();
    setAllCategories(data);
  };


  const dragOver = (e) => {
    console.log("Video card dragged over the category");
    e.preventDefault()
  }

  const videoDropped = async (e, categoryId) => {
    const VideoId = e.dataTransfer.getData("VideoId")
    console.log("video id " + VideoId, "dropped into the category id " + categoryId);
    const { data } = await getsinglevideoAPI(VideoId)
    const selectedCategory = allCategories.find(item => item.id == categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    const res = await updateCategoryAPI(categoryId, selectedCategory)
    getCategories()
  }

  const videoDragStarted=(e,videoId,categoryId)=>{
      let dataShare ={videoId,categoryId} 
      e.dataTransfer.setData("data",JSON.stringify(dataShare))

  }


  return (
    <>
      <div className="d-grid">
        <Button onClick={handleShow} className="btn btn-info">
          Add Category
        </Button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel
              controlId="floatingName"
              label="Category"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Enter category name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      {allCategories?.length > 0 ? (
        allCategories.map((category) => (
          <div key={category.id} className="border rounded p-4 m-3" droppable="true" onDragOver={e => dragOver(e)} onDrop={e => videoDropped(e, category?.id)}>
            <div className="d-flex justify-content-between align-items-center">
              <h5>{category.categoryName}</h5>
              <button
                className="btn"
                onClick={() => deletecategory(category.id)}
              >
                <i className="fa-solid fa-trash text-danger"></i>
              </button>
            </div>

            <Row>
              {
                category?.allVideos?.length>0?category?.allVideos.map(card=>(
                  <Col sm={12} className='mb-3' draggable onDragStart={e=>videoDragStarted(e,card.id,category.id)}>
                    <VideoCard video={card} insideCategory={true}/>
                  </Col>
                )):null
              }
            </Row>
          </div>
        ))
      ) : (
        <p>Nothing to display</p>
      )}
    </>
  );
};

export default Category;
