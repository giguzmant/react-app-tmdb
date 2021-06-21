import React from 'react';
import CategoryPreview from '../../components/Preview/Preview';
import './Movies.scss';

const Movies = () => {

  return(
    <div className="movies-wrapper">
      <CategoryPreview media="movie" title="Popular Movies" category="popular"/>
      <CategoryPreview media="movie" title="Top Rated Movies" category="top_rated"/>
      <CategoryPreview media="movie" title="Upcomming Movies" category="upcoming"/>
      <CategoryPreview media="movie" title="Now Playing Movies" category="now_playing" />
    </div>
  )
}

export default Movies;