import React from "react";

const SearchBox=({searchfield,searchChange})=>{
    return(
        <div className='pa2'>
        <input 
        className='pa3 ba b--grean bg-lightest-blue'
        type='search' 
        placeholder="search favourite anime characters"
        onChange={searchChange}
        />
        </div>
    );
}

export default SearchBox;

