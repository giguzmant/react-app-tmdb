import React, { useReducer, useEffect, useState } from 'react';
import useMedia from '../../utils/hooks/useMedia';
import { API_URL, API_KEY } from '../../utils/constants/api';
import GenreList from '../GenreList/GenreList';
import FireIcon from '../../assets/icons/FireIcon';
import './Trends.scss'
import List from '../List/List';

function reducer(state, action) {
  
  switch (action.type) {
    case 'GET_MOVIES':
      return action.payload;
    
    case 'GET_TV_SHOWS':
      return action.payload;
    
    case 'GET_GENRE':
      return action.payload;
    
    case 'RELOAD': 
      return action.payload;
      
    default:
      return state;
  }
}

const Trends = () => {
  const [movies] = useMedia(`${API_URL}/trending/movie/week${API_KEY}`);
  const [genre, setGenre] = useState([])
  const [state, dispatch] = useReducer(reducer, movies);
  

    
    useEffect(() => {
      dispatch({
        type: 'RELOAD',
        payload: movies
      })
    }, [movies])
    
    useEffect(() => {
      dispatch({
        type: 'GET_GENRE',
        payload: genre
      })
    }, [genre])
  
  return(
    <div className="trends-wrapper">
      <div className="trends-header">
        <div className="trends-now">
          <FireIcon />
          <h1>Trends Now</h1>
        </div>
        {/*<div className="trends-options-wrapper">
          <div className="trends-popular">
            <FireIcon />
            <h2>Popular</h2>
          </div>
          <div className="trends-premieres">
            <StarIcon />
            <h2>Premieres</h2>
          </div>
          <div className="trends-top-rated">
            <ThumbsUpIcon />
            <h2>Top Rated</h2>
          </div>
  </div>*/}
      <GenreList setGenre={setGenre} media="movie"/>
      </div>

  { /*   <div>
        SORT BY: 
        <select onChange={handle}>
          <option>MEDIA</option>
          <option value="MOVIES">MOVIES</option>
          <option value="TV">TV</option>
        </select>
      </div> */}
        <List data={state} media="movie" />
    </div>
  )
}

export default Trends;