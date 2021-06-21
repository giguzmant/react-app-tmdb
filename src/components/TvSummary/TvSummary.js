import React from 'react';
import { Link } from 'react-router-dom';
import './TvSummary.scss';

const TvSummary = ({data = [], media}) => {
  const first = new Date(data.first_air_date);
  const last = new Date (data.last_air_date);
  
  return(
  <div className="tv-summary-data">
    <div className="tv-summary-parent">
      <div className="tv-summary-title">
        First Aired
      </div>
      <div className="tv-summary-child">
        {first.toDateString()}
      </div>
    </div>
    <div className="tv-summary-parent">
      <div className="tv-summary-title">
        Last Aired
      </div>
      <div className="tv-summary-child">
        {last.toDateString()}
      </div>
    </div>
    <div className="tv-summary-parent">
      <div className="tv-summary-title">
        Runtime
      </div>
      <div className="tv-summary-child">
        {`${data.episode_run_time && data.episode_run_time.map(runtime => runtime).slice(0,1)} minutes`}
      </div>
    </div>
    <div className="tv-summary-parent">
      <div className="tv-summary-title">
        Genre
      </div>
      <div className="tv-summary-child genres">
        {data.genres && data.genres.map(genre => (
          <Link to={`/genre/${genre.id}/${media}`} key={genre.id}>
            {genre.name}
          </Link>
        ))}
      </div>
    </div>
    <div className="tv-summary-parent">
      <div className="tv-summary-title">
        Seasons
      </div>
      <div className="tv-summary-child">
        {data.number_of_seasons}
      </div>
    </div>
    <div className="tv-summary-parent">
        <div className="tv-summary-title">
          Episodes
        </div>
        <div className="tv-summary-child">
          {data.number_of_episodes}
        </div>
    </div>
    <div className="tv-summary-parent">
      <div className="tv-summary-title">
          Status
        </div>
        <div className="tv-summary-child">
          {data.status}
        </div>
    </div>
    <div className="tv-summary-parent">
      <div className="tv-summary-title">
          Network
        </div>
        <div className="tv-summary-child">
          {data.networks && data.networks.map(network => network.name)}
        </div>
    </div>
  </div>
  )
}

export default TvSummary;