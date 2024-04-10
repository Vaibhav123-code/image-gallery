import React from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {
    let navigate = useNavigate()
  return (
    <div>
        <h1>hey , you seems to be lost here</h1>
        <button onClick={()=> navigate("/")}>Go Home</button>
    </div>
  )
}

export default Error