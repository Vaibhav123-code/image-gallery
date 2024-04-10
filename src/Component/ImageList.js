import React from 'react'

function ImageList({images}) {
  return (
    <div>
        <div className='container'>
           <div className='images'>
             {
                images.map((image)=>(
                    <img src={image.urls.small} alt='images' />
                ))
             }
           </div>
        </div>
    </div>
  )
}

export default ImageList