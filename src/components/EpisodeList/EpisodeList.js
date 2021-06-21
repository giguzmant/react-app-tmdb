import React from 'react';
import EpisodeCard from '../EpisodeCard/EpisodeCard';
import './EpisodeList.scss';

const EpisodeList = ({ seasonNum, data=[]}) => {
  
  return(
    <div className="episode-list-wrapper">
      {data.map(episode => (
        <EpisodeCard 
          still={`https://image.tmdb.org/t/p/w500${episode.still_path}`} 
          name={episode.name} 
          overview={episode.overview} 
          episodeNum={episode.episode_number}
          data={{...data}}
          isNull={episode.still_path}
        />
      ))}
    </div>
  )
}

export default EpisodeList;