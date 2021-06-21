import React from 'react';
import useDetails from '../../utils/hooks/useDetails';
import './GenreList.scss';

const GenreList = ({setGenre, media}) => {
  const [genres] = useDetails(`https://api.themoviedb.org/3/genre/${media}/list?api_key=1320b50a2f35c84b1f417cf27c46026d`)
  const selectedGenres = genres.genres && genres.genres.slice(0,9)
  
  const changeGenre = async e => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/discover/${media}?api_key=6a93319b2d78795675b8bd9aa0965a95&with_genres=${e.target.id}`);
      const data = await response.json();
      setGenre(data.results);
    } catch (error) {
      console.log(error)
    }

  }
  

  
  return(
    <div className="genre-list-wrapper">
        {selectedGenres && selectedGenres.map(genre => (
          <div className="genre-item-wrapper">
            <div className="genre-item" id={genre.id}  onClick={changeGenre}>
            {genre.name}
            </div>
          </div>
        ))}
    </div>
  )
}

export default GenreList;