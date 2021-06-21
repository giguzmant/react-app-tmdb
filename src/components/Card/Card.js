import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ id, img, title, media, year , vote, character, profile}) => {
  console.log(profile)
  return(
    <div className="card-wrapper">
      <Link  to={`/${media}/${id}/info`} className='link-wrapper' >
        <div className="card-image-wrapper">
        {profile === null || profile === undefined ? 
        <svg width="90px" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="crimson" stroke-linecap="round" stroke-linejoin="round" class="sc-gqjmRU kPuMOL sc-eNQAEJ gpmZHD"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
        : <img src={img} alt=""/>
      }
          
        </div>

        <div className="card-title">
          <h4>
          {title && title.split(' ').length <= 4 ? title : `${title && title.split(' ').slice(0,4).join(' ')}...`}
          </h4>
          {media === 'person' ?  <span>{character}</span> : 
          <div className="card-year-vote">
          <span className="card-year">{year && year.split('-').slice(0,1)}</span>
          <div>
            <svg id="color" enable-background="new 0 0 24 24" height="10px" viewBox="0 0 24 24" width="10px" xmlns="http://www.w3.org/2000/svg">
              <path d="m23.363 8.584-7.378-1.127-3.307-7.044c-.247-.526-1.11-.526-1.357 0l-3.306 7.044-7.378 1.127c-.606.093-.848.83-.423 1.265l5.36 5.494-1.267 7.767c-.101.617.558 1.08 1.103.777l6.59-3.642 6.59 3.643c.54.3 1.205-.154 1.103-.777l-1.267-7.767 5.36-5.494c.425-.436.182-1.173-.423-1.266z" fill="#ffc107"/>
            </svg>
            <span className="card-vote">{vote}</span>   
          </div>
        </div>}
        </div>
      </Link>
    </div>
  )
}

export default Card;