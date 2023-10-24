import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
export default function Search() {
  return (
    <form action="#" className="search">
      
    <SearchIcon style={{
        width:'2.4rem',
        height:'2.4rem',
        color:'#'
      }}
    />
    <input
      type="text"
      className="search__input"
      placeholder="Search"
    />
     
    <button className="search__button" type="submit">
    </button>
  </form>
  )
}
