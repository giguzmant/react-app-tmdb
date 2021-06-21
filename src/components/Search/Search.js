import React, { useContext} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { API_SEARCH } from '../../utils/constants/api';
import { SearchContext } from '../../SearchContext';
import './Search.scss';
import CloseIcon from '../../assets/icons/CloseIcon';

const Search = ({className, setSearchActive, searchActive}) => {
  const {query, setQuery, setResults, setPage} = useContext(SearchContext);
  
  const history = useHistory();
  console.log(history)
  const location = useLocation();
  console.log(location.name)

  
  const handleSubmit =  async e => {    
    if(e.key === 'Enter') {
      try {
        const response = await fetch(`${API_SEARCH}${query}`);
        const data = await response.json();
        setResults(data.results);
        setPage(data.page);
      } catch (error) {
        console.log(error)
      }
      history.push({pathname: '/search?name=', search: `${query}`})
      setSearchActive(false);
      setQuery('');
    }
    
  }
  
   return(
    <div className={className}>
      <input placeholder="Search for a movie, tv show or person..." type="text" value={query} onChange={e => {setQuery(e.target.value)}} onKeyPress={handleSubmit} />
      {query ? 
        <CloseIcon setSearchActive={()=>setSearchActive(false)} /> 
        : null}
    </div>
  )
  
  
}

export default Search;