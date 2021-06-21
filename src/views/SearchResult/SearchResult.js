import React, {useContext} from 'react';
import List from '../../components/List/List';
import { SearchContext } from '../../SearchContext';

const SearchResult = () => {
 /* const [results, setResults] = useState([]);
  const [isFetching, setIsFetching] = useInfiniteScroll(kaka);
  const [page, setPage] = useState();
  const query = useContext(SearchContext);
  
  useEffect(() => {
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
  }, [query]);
  
  const handleSearch = async () => {
    try {
      const response = await fetch(`${API_SEARCH}${query}`);
      const data = await response.json();
      setResults(data.results);
      setPage(data.page);
    } catch (error) {
      console.log(error)
    }
  }*/
  
  /*
  async function kaka(){
    try {
      const response = await fetch(`${API_SEARCH}${query}&page=${page + 1}`);
      const data = await response.json();
      setResults(previousData => [...previousData, ...data.results]);
      setIsFetching(false);
      setPage(page + 1);
      
    } catch (error) {
      console.log(error)
    }
  }*/
  
  const results = useContext(SearchContext);
 
  console.log(results)
    return(
      <div className="view-wrapper" >
      {(results.results)?
        <main>
          <h4>Resultados:</h4>
          <List data={results.results}/>
        </main>
        : null}
      </div>
    )
 
}

export default SearchResult;