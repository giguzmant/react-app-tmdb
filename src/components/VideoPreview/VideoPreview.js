import React, { useState } from 'react';
import VideoModal from '../VideoModal/VideoModal';
import './VideoPreview.scss'

const VideoPreview = ({img, link, title, videoKey}) => {
  const [isActive, setActive] = useState(false);
  
/*       <iframe width="791" height="472" src="https://www.youtube.com/embed/mcU1VCgcUh8?list=RDmcU1VCgcUh8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
*/


  return(
  <div>
    <div onClick={()=>setActive(true)} className="video-preview-wrapper">
        <div style={{backgroundImage: `url(${img})`}} className="video-preview-img"> 
          <div className="video-preview-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 55 55" >
              <circle cx="27.5" cy="27.5" r="26.75" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
              <path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.97 40.81L40.64 27.5 20.97 14.19v26.62z" />
            </svg>
          </div>
        </div>
        <div>
          <h5>{title}</h5>
        </div>
    </div>
    { isActive ? 
      <VideoModal videoKey={videoKey} setActive={setActive}/> : null
    }
    </div>
  )
}

export default VideoPreview;