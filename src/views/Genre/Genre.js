import React from 'react';
import { useParams } from 'react-router-dom';
import usePagination from '../../utils/hooks/usePagination';
import List from '../../components/List/List';

const Genre = () => {
  const {genreId, media} = useParams();
  const [genre] = usePagination(`https://api.themoviedb.org/3/discover/${media}?api_key=6a93319b2d78795675b8bd9aa0965a95&with_genres=${genreId}`)
  
  return (
    <div className="view-wrapper">
      <main>
        <List data={genre} media={media}/>
      </main>
    </div>
  )
}

export default Genre;