import React, { useState } from 'react';
import Nav from './components/Nav/Nav';
import { BrowserRouter } from 'react-router-dom';
import './utils/scss/common/_common.scss';
import SwitchComponents from './routes/SwitchComponents';
import Search from './components/Search/Search';
import { SearchProvider } from './SearchContext';

const App = () => {
  const [searchActive, setSearchActive] = useState(false);

  return(
  <SearchProvider>
    <BrowserRouter>
      <Nav setSearchActive={()=>setSearchActive(!searchActive)} />
      <Search className={searchActive ? 'search-wrapper search-active' : 'search-wrapper'} setSearchActive={setSearchActive} searchActive={searchActive}/>
      <SwitchComponents />
    </BrowserRouter>
    </SearchProvider>
  )
}

export default App;
