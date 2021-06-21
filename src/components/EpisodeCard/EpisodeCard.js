import React from 'react';
import './EpisodeCard.scss';

const EpisodeCard = ({ isNull, still, name, overview, episodeNum }) => {

  return(
    <div className="episode-card-wrapper">
      <div className="episode-img">
       {isNull === null ? 
        <svg width="90px" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="crimson" stroke-linecap="round" stroke-linejoin="round" class="sc-gqjmRU kPuMOL sc-eNQAEJ gpmZHD"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
        : <img src={still} alt="" />
       }
      </div>
      <div className="episode-name">
        <h4 className="episode-num" >
        {`E${episodeNum < 10 ? `0${episodeNum}`: episodeNum}`}
        </h4>
        <h4 className="episode-title">
          {name}
        </h4>
      </div>
      <div className="episode-overview">
        <p>{overview}</p>
      </div>
    </div>
  )
}

export default EpisodeCard;