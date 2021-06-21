import React from 'react';
import { Link } from 'react-router-dom';
import './MediaNav.scss';

const MediaNav = ({ url, media}) => {
  
  return(
    <div className="media-nav-wrapper">
      <ul>
        <li>
          <Link exact={true} activeClassName='is-active' to={`${url}/info`} >
            OVERVIEW
          </Link>
        </li>
        {media === 'tv' ? 
        <li>
        <Link to={`${url}/season/1`} >
          EPISODES
        </Link>
      </li> : null 
        }
        <li>
          <Link to={`${url}/cast`}>
            CAST
          </Link>
        </li>
        <li>
          <Link to={`${url}/videos`}>
            VIDEOS
          </Link>
        </li>
        <li>
          <Link to={`${url}/more_like_this`}>
            MORE LIKE THIS
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default MediaNav;