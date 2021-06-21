import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../constants/api';

const useRandom = () => {
  const [random, setRandom] = useState([]);
  const page = Math.floor(Math.random() * (10 - 1) + 1);
  
  const loadMedia = async ()=> {
    try {
      const response = await fetch(`${API_URL}/movie/popular${API_KEY}&page=${page}`);
			const data = await response.json();
			const ran = data.results;
			const randomize = ran[Math.floor(Math.random() * ran.length)];
			setRandom(randomize);
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    loadMedia();
  }, []);
  
  return [random.id]
}

export default useRandom;