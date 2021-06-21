import { useState, useEffect } from 'react';

const useRandom = (url) => {
  const [random, setRandom] = useState([]);
  
  const loadMedia = async () => {
    try {
      const response = await fetch(url);
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
  
  return [random]
}

export default useRandom;