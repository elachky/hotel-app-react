import React, { useState } from 'react'


const SearchBar = ({handleSelectedVille}) => {

    return (<div className='searchBar'>
        <input
            type='text'
            placeholder='Search hotel...'
            onChange={(e) => handleSelectedVille(e.target.value)}
        />
    </div>)
}

export default SearchBar;