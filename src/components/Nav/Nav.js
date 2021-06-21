import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import MenuIcon from '../../assets/icons/MenuIcon';
import SearchIcon from '../../assets/icons/SearchIcon';

const Nav = ({ setSearchActive }) => {
  const [isActive, setIsActive] = useState(false);
  
 /* useEffect(()=> {
    if(isActive){
      document.body.style.overflow = 'hidden';
      return ()=> document.body.style.overflow = 'unset';
    }
  }, [isActive])*/
  
   /*useEffect(() => {
    if(showMenu){
      document.body.style.overflow = 'hidden';
      return ()=> document.body.style.overflow = 'unset';
    }
  },[showMenu])*/
  
  return(
    <nav>
      <div>
        <div className="search-icon-wrapper" onClick={setSearchActive}>
          <SearchIcon />
        </div>
        <div className="menu-icon-wrapper" onClick={()=> setIsActive(!isActive)}>
          <MenuIcon />        
        </div>
      </div>
      <div className={isActive ? ' nav-sidebar nav-active ': "nav-sidebar"}>
      <ul>
      <div className="nav-links">
        <li>
          <Link to="/" onClick={() => setIsActive(false)}> 
             HOME
          </Link>
        </li>
        <li>
          <Link to="/movie" onClick={() => setIsActive(false)}>
            MOVIES
          </Link>
        </li>
        <li>
          <Link to="/tv" onClick={() => setIsActive(false)}>
            TV
          </Link>
        </li>
        </div>
      </ul>
      </div>
    </nav>
  )
}

export default Nav;