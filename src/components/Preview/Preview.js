import React from 'react';
import { Link } from 'react-router-dom';
import FireIcon from '../../assets/icons/FireIcon';
import useMedia from '../../utils/hooks/useMedia';
import { API_URL, API_KEY } from '../../utils/constants/api';
import List from '../List/List';
import './Preview.scss';

const CategoryPreview = ({ media, title, category }) => {
  const [results] = useMedia(`${API_URL}/${media}/${category}${API_KEY}`);
  
  return(
    <div className="category-preview-wrapper">
      <Link exact to={`/${media}/${category}`} className="category-preview-title">
        <FireIcon />
        <h3>{title}</h3>
      </Link>
      <List media={media} data={results.slice(0,5)}/>
    </div>
  )
}

export default CategoryPreview;