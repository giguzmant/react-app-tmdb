import React from 'react';
import { useParams, useRouteMatch, Switch, Route } from 'react-router-dom';
import useDetails from '../../utils/hooks/useDetails';
import Hero from '../../components/Hero/Hero';
import Overview from './sections/Overview';
import { API_URL, API_KEY } from '../../utils/constants/api';
import List from '../../components/List/List';
import MediaNav from '../../components/MediaNav/MediaNav';
import Seasons from './sections/Seasons';
import Videos from './sections/Videos';

import './Media.scss';

const Media = () => {
  const {media, mediaId} = useParams();
  const {url, path} = useRouteMatch();
  //const [data] = useDetails(`https://api.themoviedb.org/3/${media}/${mediaId}?api_key=1320b50a2f35c84b1f417cf27c46026d`);
  const [credits] = useDetails(`https://api.themoviedb.org/3/${media}/${mediaId}/credits?api_key=1320b50a2f35c84b1f417cf27c46026d`);
  const [externalIds] = useDetails(`${API_URL}/${media}/${mediaId}/external_ids${API_KEY}`)
  const [similar] = useDetails(`https://api.themoviedb.org/3/${media}/${mediaId}/similar?api_key=1320b50a2f35c84b1f417cf27c46026d`);
  const [data] = useDetails(`http://api.themoviedb.org/3/${media}/${mediaId}?api_key=1320b50a2f35c84b1f417cf27c46026d&append_to_response=videos`) 
 
 
  return(
    <div className="view-wrapper" style={{padding: 'unset'}}>      
      <main>
        <div className="media-wrapper">
          <Hero data={data} media={media} credits={credits} src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}/>
          <MediaNav url={url} media={media} />
          <Switch>
            <Route exact path={`${path}/info`}>
              <Overview data={{...data}} media={media} externalIds={externalIds} credits={{...credits}}/>
            </Route>
            <Route exact path={`${path}/cast`}>
              <List data={credits.cast} media="person"/>
            </Route>
            <Route exact path={`${path}/season/:seasonNum`}>
              <Seasons mediaId={mediaId} seasons={data.seasons} media={media}/>
            </Route>
            <Route exact path={`${path}/videos`}>
              <Videos data={data.videos} />
            </Route>
            <Route exact path={`${path}/more_like_this`}>
              <List data={similar.results} media={media} />
            </Route>
          </Switch>
        </div>
      </main>
    </div>
  )
}

export default Media;