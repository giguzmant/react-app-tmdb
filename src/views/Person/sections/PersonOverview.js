import React from 'react';
import './PersonOverview.scss';
import ExternalLinks from '../../../components/ExternalLinks/ExternalLinks';

const PersonOverview = ({ data=[], externalIds , mediaId}) => {

  return (
    <div className="overview-wrapper">
      <div className="oveview-summary-poster">
        <img src={`https://image.tmdb.org/t/p/w500${data.profile_path}`} alt=""/>
      </div>
      <div className="overview-summary-info">
        <div className="overview-title">
          <h3>{data.title}</h3>
        </div>
        <div className="overview-summary">
        {data.biography}
        </div>
        <ExternalLinks externalIds={externalIds} media="person" mediaId={mediaId} />
      </div>
    </div>
  )
}

export default PersonOverview;