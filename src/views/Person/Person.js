import React from 'react';
import { Link, useRouteMatch,  Switch, Route, useParams} from 'react-router-dom';
import useDetails from '../../utils/hooks/useDetails';
import { API_URL, API_KEY } from '../../utils/constants/api';
import PersonOverview from './sections/PersonOverview';
import List from '../../components/List/List';
import './Person.scss';

const Person = () => {
  const { personId } = useParams();
  const {path, url} = useRouteMatch();
  const [personData] = useDetails(`https://api.themoviedb.org/3/person/${personId}?api_key=1320b50a2f35c84b1f417cf27c46026d`);
  const [externalIds] = useDetails(`${API_URL}/person/${personId}/external_ids${API_KEY}`)
  const [credits] = useDetails(`https://api.themoviedb.org/3/person/${personId}/combined_credits?api_key=1320b50a2f35c84b1f417cf27c46026d`)
  
  return(
    <div className="person-wrapper">
        <div className="media-nav-wrapper">
        <ul>
          <li>
          <Link to={`${url}/info`}>
            Overview
          </Link>
          </li>
          <li>
          <Link to={`${url}/credits`}>
            Credits
          </Link>
          </li>
        </ul>
        </div>
        <Switch>
          <Route exact path={`${path}/info`}>
            <PersonOverview data={{...personData}} externalIds={externalIds}  />
          </Route>
          <Route exact path={`${path}/credits`}>
            <List data={credits.cast} />
          </Route>
        </Switch>
    </div>
  )
}

export default Person;