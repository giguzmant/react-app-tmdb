import React from 'react';
import CategoryPreview from '../../components/Preview/Preview';
import './TvShow.scss';

const TvShow = () => {

  return(
    <div className="tv-show-wrapper">
      <CategoryPreview media="tv" title="Popular Tv Shows" category="popular" />
      <CategoryPreview media="tv" title="Top Rated Tv Shows" category="top_rated" />
      <CategoryPreview media="tv" title="On The Air Tv Shows" category="on_the_air" />
    </div>
  )
}

export default TvShow;