import React from 'react'
import { useNavigate } from 'react-router-dom'

function Blog() {
    let navigate = useNavigate();
  return (
    <div>
        <h1>Blog</h1>
        <button onClick={()=> navigate("/contact")}>Contact</button>
        <button onClick={()=> navigate("contact")} >contact-relative</button>
    </div>
  )
}

export default Blog