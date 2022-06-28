import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import './Search.css';


function Search() {
 const [searchParams, getSearchParams] = useSearchParams();
  
  return (
    <div>hey {searchParams.get("q")}</div>
  )
}

export default Search