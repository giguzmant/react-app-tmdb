import React, { createContext,useState } from 'react';
import useInfiniteScroll from './utils/hooks/useInfiniteScroll';
import { API_SEARCH } from './utils/constants/api';

export const SearchContext  = createContext(null);

export const SearchProvider = props => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isFetching, setIsFetching] = useInfiniteScroll(moreData);
  const [page, setPage] = useState();
  
  /*useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch(`${API_SEARCH}${query}`);
        const data = await response.json();
        setResults(data.results);
        setPage(data.page);
      } catch (error) {
        console.log(error)
      }
    }
    loadData();
  }, [query]);*/
  
  /*const handleSubmit =  async e => {    
    if(e.key === 'Enter') {
      const history = useHistory();
      try {
        const response = await fetch(`${API_SEARCH}${query}`);
        const data = await response.json();
        setResults(data.results);
        setPage(data.page);
      } catch (error) {
        console.log(error)
      }
      history.push({pathname: '/search', search: `?name=${query}`})
    }*/
  
  async function moreData() {
    if(query) {
      try {
        const response = await fetch(`${API_SEARCH}${query}&page=${page + 1}`);
        const data = await response.json();
        setResults(previousData => [...previousData, ...data.results]);
        setIsFetching(false);
        setPage(page + 1);
      } catch (error) {
        console.log(error)
      }
    }
  }
  
  
  return(
    <SearchContext.Provider value={{query, setQuery, results: results, setResults, setPage}}>
      {props.children}
    </SearchContext.Provider>
  )
}

