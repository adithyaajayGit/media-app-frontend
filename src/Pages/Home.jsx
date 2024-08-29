import React, { useState } from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import Category from '../Components/Category'
import { Link } from 'react-router-dom'


const Home = () => {
  const [uploadvideoresponse,Setuploadvideoresponse] =useState({})

  const [dropvideoResponse,setDropVideoResponse]=useState({})

  return (
    <>
      <div className='container mt-3 mb-3 d-flex justify-content-between'>
        <div className="add-videos">
          <Add  Setuploadvideoresponse={Setuploadvideoresponse}/>
        </div>
        <Link style={{ textDecoration: 'none', color: 'orange', fontSize: '30px' }} to={'/watch-history'}>
          Watch-history <i class="fa-solid fa-diamond-turn-right fa-beat"></i>
        </Link>
      </div>

      <div className="container-fluid mt-5 mb-3 row">

        <div className="all-videos col-lg-9">
          <h2>All-videos</h2>
          <View uploadvideoresponse={uploadvideoresponse} setDropVideoResponse={setDropVideoResponse}/>
        </div>

        <div className="category col-lg-3">
          <Category dropvideoResponse={dropvideoResponse} />
        </div>


      </div>
    </>
  )
}

export default Home
