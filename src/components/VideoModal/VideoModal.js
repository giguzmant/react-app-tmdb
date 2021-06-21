import React from 'react';
import './VideoModal.scss';

const VideoModal = ({videoKey, setActive}) => {
  
  return(
    <div className="video-modal-wrapper">
      <div className="video-modal">
      <div onClick={()=> setActive(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5"><path d="M.75.75l13.5 13.5M14.25.75L.75 14.25"></path></g></svg>
      </div>
        <iframe width="674" height="379" src={`https://www.youtube.com/embed/${videoKey}?rel=0&showinfo=0&autoplay=1`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
      </div>
    </div>
  )
}

export default VideoModal;