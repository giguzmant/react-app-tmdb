import React from 'react';
import useDetails from '../../../utils/hooks/useDetails';
import { useParams, useHistory, useRouteMatch, Switch, Route } from 'react-router-dom';
import { API_KEY } from '../../../utils/constants/api';
import EpisodeList from '../../../components/EpisodeList/EpisodeList';
import './Seasons.scss';

const Seasons = ({ mediaId, seasons =[], media}) => {
  const  history =  useHistory();
  const {path} = useRouteMatch();
  const {seasonNum} =  useParams();
  const [episodes] = useDetails(`https://api.themoviedb.org/3/tv/${mediaId}/season/${seasonNum}${API_KEY}`)
  
  
  const handle = e => {
    history.push(`/${media}/${mediaId}/season/${e.target.value}`)
  }
  
  
  return(
    <div className="seasons-wrapper">
     <select onChange={handle}>
        {seasons.map(season => (
          (season.season_number !== 0 ? 
            <option key={season.id} value={season.season_number}>
              Season {season.season_number}
            </option>
          : null
          )
        ))}
      </select> 
      <Switch>
        <Route path={`${path}`}>
          <EpisodeList data={episodes.episodes} seasonNum={seasonNum}/>
        </Route>
      </Switch>
    </div>
  )
}

export default Seasons;