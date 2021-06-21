import { useState, useEffect } from 'react';

const useDetails = url => {
  const [media, setMedia] = useState([]);
  
  const loadDetails = async () =>{
    
  }
  
  useEffect(() => {
    async function loadDetails() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMedia(data);
      } catch (error) {
        console.log(error)
      }
    }
    loadDetails();
  }, [url])
  return [media]
}

export default useDetails;