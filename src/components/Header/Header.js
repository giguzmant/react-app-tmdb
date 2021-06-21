import React, { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../../utils/constants/api'; 
import './Header.scss';
import StarIcon from '../../assets/icons/StarIcon';
import useDetails from '../../utils/hooks/useDetails';


const Header = () => {
  const [random, setRandom] = useState([]);
  const [genre, setGenre] = useState([])
  const page = Math.floor(Math.random() * (4 - 1) + 1);
  const baseUrl = 'https://image.tmdb.org/t/p/original'
  const [trailer] = useDetails(`http://api.themoviedb.org/3/movie/${random.id}?api_key=1320b50a2f35c84b1f417cf27c46026d&append_to_response=videos`)
  
  useEffect(() => {
    const loadMedia = async () => {
      try {
        const responseGenres = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=1320b50a2f35c84b1f417cf27c46026d`)
        const response = await fetch(`${API_URL}/movie/popular${API_KEY}&page=${page}`);
        const data = await response.json();
        const fa = await responseGenres.json();
        const ran = data.results;
        const randomize = ran[Math.floor(Math.random() * ran.length)];
        setRandom(randomize);
        setGenre(fa.genres);
      } catch (error) {
        console.log(error)
      }
    }  
    
    loadMedia();
  }, []);
  
  return(
  <div className="header">
    <div className="header-wrapper" style={{backgroundImage: `url(${baseUrl}${random.backdrop_path})`}}>
     <div className="header-info">
         <div className="header-average-genres">
          <div className="header-average">
            <div className="header-average-star">
              <StarIcon />
            </div>
            <div className="header-vote">
              <p>{random.vote_average}</p>
            </div>
          </div>
          <div className="header-genres">
            {random.genre_ids && random.genre_ids.map(genresIds =>(
              genre.map(gen =>(
                genresIds === gen.id ? 
                <p key={gen.id}>{gen.name.toUpperCase()}</p> : null 
              ))
            ))}
          </div>
        </div>
        <div className="header-data">
          <div className="header-title">
            <h1>{random.title}</h1>
          </div>
          <div className="header-overview">
            <p>{random.overview}</p>
          </div>
          <div className="header-button-wrapper">
            <div className="header-button">WATCH TRAILER</div>
          </div>
        </div>
      </div>
    </div>
   <div className="check">
    </div>
  </div>
  )
}

export default Header;