import React from 'react';
import MovieSummary from '../../../components/MovieSummary/MovieSummary';
import TvSummary from '../../../components/TvSummary/TvSummary';
import ExternalLinks from '../../../components/ExternalLinks/ExternalLinks';
import './Overview.scss'


const Overview = ({ data=[], media , externalIds, credits}) => {
  const basePosterUrl = 'https://image.tmdb.org/t/p/w500';
  
  return(
    <div className="overview-wrapper">
      <div className="oveview-summary-poster">
        <img src={`${basePosterUrl}${data.poster_path || data.profile_path}`} alt=""/>
      </div>
      <div className="overview-summary-info">
        <div className="overview-title">
          <h3>{data.title || data.name}</h3>
        </div>
        <div className="overview-summary">
          <p>{data.overview}</p>
        </div>
        { media === 'movie' ? <MovieSummary data={data} credits={credits} media={media}/> 
        : <TvSummary data={data} media={media} /> }
        <ExternalLinks externalIds={externalIds} homepage={data.homepage} />
      </div>
    </div>
  )
}

export default Overview;