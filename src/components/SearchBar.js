import React, { useState } from 'react'


const SearchBar = ({handleSelectedVille, cites}) => {

    return (<div className='searchBar'>
        <input
            type='text'
            list="cityList"
            placeholder='Search hotel...'
            onChange={(e) => handleSelectedVille(e.target.value)}
        />
        <datalist id="cityList">
            {cites.map((item, key) => <option key={key} value={item}/>)}
        </datalist>
    </div>)
}

export default SearchBar;