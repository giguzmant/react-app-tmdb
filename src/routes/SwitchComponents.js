import React from 'react';
import { Switch , Route} from 'react-router-dom';
import Home from '../views/Home/Home';
import Media from '../views/Media/Media';
import Person from '../views/Person/Person';
import Genre from '../views/Genre/Genre';
import Movies from '../views/Movies/Movies';
import TvShow from '../views/TvShow/TvShow';
import Category from '../views/Category/Category';
import SearchResult from '../views/SearchResult/SearchResult';

const SwitchComponents  = () => {

  return(
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/movie" component={Movies} />
      <Route exact path="/tv" component={TvShow} />
      <Route path="/person/:personId" component={Person} />
      <Route exact path="/genre/:genreId/:media" component={Genre} />
      <Route exact path="/:media/:category" component={Category} />
      <Route path="/:media/:mediaId" component={Media} />
      <Route component={SearchResult} />
    </Switch>
  )
}

export default SwitchComponents;