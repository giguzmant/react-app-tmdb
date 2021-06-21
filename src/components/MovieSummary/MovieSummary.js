import React from 'react';
import { Link } from 'react-router-dom';
import './MovieSummary.scss';

const MovieSummary = ({data = [], media, credits}) => {
  const date = new Date(data.release_date);

  return(
    <div className="movie-summary-data">
      <div className="movie-summary-parent">
        <div className="movie-summary-title">
          Released 
        </div>
        <div className="movie-summary-child">
          {date.toDateString()}
        </div>
      </div>
      <div className="movie-summary-parent">
        <div className="movie-summary-title">
          Director
        </div>
        <div className="movie-summary-child">
          {media === 'movie' ? credits.crew && credits.crew.map(director => director.job === 'Director' ? director.name : null) : null}
        </div>
      </div>
      <div className="movie-summary-parent">
        <div className="movie-summary-title">
          Revenue
        </div>
        <div className="movie-summary-child">
          {`$ ${data.revenue && data.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
        </div>
      </div>
      <div className="movie-summary-parent">
        <div className="movie-summary-title">
          Status
        </div>
        <div className="movie-summary-child">
          {data.status}
        </div>
      </div>
      <div className="movie-summary-parent">
        <div className="movie-summary-title">
          Runtime
        </div>
        <div className="movie-summary-child">
          {`${data.runtime} minutes`}
        </div>
      </div>
      <div className="movie-summary-parent">
        <div className="movie-summary-title">
          Budget
        </div>
        <div className="movie-summary-child">
          {`$ ${data.budget && data.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
        </div>
      </div>
      <div className="movie-summary-parent">            
        <div className="movie-summary-title">
          Genre
        </div>
        <div className="movie-summary-child genres">
          {data.genres && data.genres.map(genre => (
            <Link to={`/genre/${genre.id}/${media}`} key={genre.id}>
              {genre.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="movie-summary-parent">
        <div className="movie-summary-title">
          Language
        </div>
        <div className="movie-summary-child">
          {data.spoken_languages && data.spoken_languages.map(lang => (
            lang.name
          ))}
        </div>
      </div>

    </div> 
  )

}
export default MovieSummary;