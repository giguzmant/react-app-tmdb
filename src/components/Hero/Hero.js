import React from 'react';
import './Hero.scss';

const Hero = ({ data = [] , media, credits = [], src}) => {
    
    return(
    <div className="hero">
      <div className="hero-wrapper" style={{backgroundImage: `url(${src})`}}>
        <div className="hero-content">
          <div className="hero-genres">
            {data.genres && data.genres.slice(0,3).map(genr => (
              <p key={genr.id}>{genr.name.toUpperCase()}</p>
            ))}
          </div>
          <div className="hero-title">
            <h1>{data.title || data.name}</h1>
          </div>
          <div className="hero-subtitle">
            <div className="hero-runtime">
              <span className="hero-subtitle-bold">
                {data.runtime  || data.episode_run_time}
              </span>
              <span className="hero-subtitle-light">min</span>
            </div>
            <div>
              <span className="hero-subtitle-bold">
                {media=== 'movie' ? 'DIRECTOR' : 'CREATOR'}
              </span>
              <span className="hero-subtitle-light" key={data.id}>
                {media === 'movie'? credits.crew && credits.crew.map(director => director.job === 'Director' ? director.name : null)
                : data.created_by && data.created_by.map(creator => creator.name) }
              </span>
            </div>
          </div>
          <div className="hero-overview">
           <p>
            {data.overview && data.overview.split(',').slice(0,3)}...
           </p>
          </div>
        </div>      
    </div>
    <div className="check">
    </div>
    </div>
    )
}

export default Hero;