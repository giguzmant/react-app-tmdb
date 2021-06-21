import React from 'react';
import Card from '../Card/Card';
import './List.scss';

const List = ({ media, data = []}) => {
  console.log(data)
  return(
    <div className="list-wrapper">
      {data.map(_data => (
        <Card 
          key={_data.id}
          id={_data.id}
          img={`https://image.tmdb.org/t/p/w500${_data.poster_path || _data.profile_path}`}
          title={_data.title || _data.name}
          media={media || _data.media_type}
          profile={_data.poster_path || _data.profile_path}
          character={_data.character}
          year={_data.release_date || _data.first_air_date}
          vote={_data.vote_average}
        />
      ))}
    </div>
  )
}

export default List;