import React from 'react';
import VideoPreview from '../../../components/VideoPreview/VideoPreview';
import './Videos.scss';

const Videos = ({ data = [] }) => {
  
  return(
    <div className="videos-wrapper">
        {data.results && data.results.map(video => (
          <VideoPreview 
            img={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
            link={`https://www.youtube.com/${video.key}`}
            title={video.name}
            videoKey={video.key}
           />
        ))}
    </div>
  )
}

export default Videos;