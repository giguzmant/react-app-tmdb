import  { useState, useEffect } from 'react';
import useInfiniteScroll from './useInfiniteScroll';

const usePagination = url  => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState();
  const [isFetching, setIsFetching] = useInfiniteScroll(moreData);
  

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data.results);
        setPage(data.page);
      } catch (error) {
        console.log(error)
      }
    }
    loadData();
  }, [url]);
   
  async function moreData() {
    try {
      const response = await fetch(`${url}&page=${page + 1}`);

      const data = await response.json();
      setData(previousData => [...previousData, ...data.results]);
      setIsFetching(false);
      setPage(page + 1)
    
    } catch (error) {
      console.log(error)
    }
  }
  
  return [data]
}

export default usePagination;