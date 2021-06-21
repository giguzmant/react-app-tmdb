import React from 'react';
import { useParams } from 'react-router-dom';
import usePagination from '../../utils/hooks/usePagination';
import { API_URL, API_KEY} from '../../utils/constants/api';
import List from '../../components/List/List';
import './Category.scss';

const Category = () => {
  const {media, category} = useParams();
  const [results] = usePagination(`${API_URL}/${media}/${category}${API_KEY}`)
  
  return(
    <div className="category-wrapper">
      <List data={results} media={media} /> 
    </div>

  )
}

export default Category;