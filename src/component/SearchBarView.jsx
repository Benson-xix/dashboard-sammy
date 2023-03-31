import React from 'react'
import { IoMdSearch } from 'react-icons/io';
import styled from 'styled-components';

const SearchBarView = () => {
  return (
    <Search>
    <IoMdSearch style={{marginLeft: "1rem", position:"absolute" }} color="#747474" size="1.5em"/>
    <SearchBar type="text" id="search-bar" placeholder='Search'>
    </SearchBar>
    </Search>
  )
}
const Search = styled.div`
     padding: .5rem;
  position: relative;
  display: flex;  
  align-items: center;
  width: 398px; 
  margin-left: 2rem;
  margin-top:1rem;
`

const SearchBar = styled.input`
padding: 1rem 1rem 1rem 3.5rem;
width: 100%;
border-radius:20px ;
border: 2px solid #747474;
`

export default SearchBarView