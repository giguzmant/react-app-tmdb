import React from 'react';
import IMDBIcon from '../../assets/icons/IMDBIcon';
import TwitterIcon from '../../assets/icons/TwitterIcon';
import FacebookIcon from '../../assets/icons/FacebookIcon';
import InstagramIcon from '../../assets/icons/InstagramIcon';
import LinkIcon from '../../assets/icons/LinkIcon';
import './ExternalLinks.scss';


const ExternalLinks = ({homepage, media, mediaId, externalIds=[], }) => {
  
  return(
    <div className="external-links-wrapper">
      <a href={`https://www.imdb.com/title/${externalIds.imdb_id}`}>
        <IMDBIcon />
      </a>
      <a href={`https://www.twitter.com/${externalIds.twitter_id}`}>
        <TwitterIcon />
      </a>
      <a href={`https://www.facebook.com/${externalIds.facebook_id}`}>
        <FacebookIcon />
      </a>
      <a href={`https://www.instagram.com/${externalIds.instagram_id}`}>
        <InstagramIcon />
      </a>
      
      {media !== 'person' ? 
        <a href={`${homepage}`}>
        <LinkIcon />
      </a> : null 
      }
  </div>
  )
}

export default ExternalLinks;