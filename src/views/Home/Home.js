import React from 'react';
import Header from '../../components/Header/Header';
import Trends from '../../components/Trends/Trends';

const Home = () => {
 /* const [movies] = useMedia(`${API_URL}/trending/movie/week${API_KEY}`);
  const [tv] = useMedia(`${API_URL}/trending/tv/week${API_KEY}`);*/
  
  return(
    <div>
      <Header />
      <Trends />
  { /*    <CategoryPreview data={movies} media="movie" title="Trending Movies" category="trending" />
      <CategoryPreview data={tv} media="tv" title="Trending Tv Shows" category="trending" /> */}
    </div>
  )
}

export default Home;