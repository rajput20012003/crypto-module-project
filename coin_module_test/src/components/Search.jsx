import React from 'react';

const Search = ({handleSearch,searching}) => {

  return (
    <div>
        <input type="text" placeholder="Search by Name or Symbol"  onChange={handleSearch}/>
      <button onClick={handleSearch}>Search</button>
    
    </div>
  );
}

export default Search;
