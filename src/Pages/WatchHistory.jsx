import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getvideoHistroyAPI } from '../../Services/allAPI'
import { Button } from 'react-bootstrap'


const WatchHistory = () => {
  const [history, setHistory] = useState([])

  useEffect(() => {
    getHistory()
  }, [])

  const getHistory = async () => {
    const result = await getvideoHistroyAPI()
    if (result.status === 200) {
      setHistory(result.data)
    } else {
      console.log("API Failed")
      console.log(result.message)
    }
  }

    const removevideohistory= async (id)=>{
        await deleteHistoryAPI(id)
        getHistory()
    }

  // console.log(history)

  return (
    <>
      <div className="container mt-5 mb-3 d-flex justify-content-between">
        <h2>Watch History</h2>
        <Link style={{ textDecoration: "none", color: "orange" }} to={'/home'}>
          Back to Home <i className="fa-solid fa-angles-left fa-fade"></i>
        </Link>
      </div>
      <table className='table mb-5 container shadow w-100'>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Url</th>
            <th>Timestamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
          history? history.length > 0 ? (
            history.map((video, index) => (
              <tr key={index}>
                <td>{video.id}</td>
                <td>{video.name}</td>
                <td><a href={video.video}>{video.video}</a></td>
                <td>{video.timeStamp}</td>
                <td><Button  variant='' onClick={()=>removevideohistory(video?.id)}><i className="fa-solid fa-trash text-danger ms-1"></i></Button></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">No history available</td>
            </tr>
          )
        :<p>no history available</p>}
        </tbody>
      </table>
    </>
  )
}

export default WatchHistory
