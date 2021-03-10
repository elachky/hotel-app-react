import React from 'react'
import { useDispatch } from 'react-redux';
import { filterAction } from '../../actionsCreator';


const SearchBar = ({ cites }) => {
    const dispatch = useDispatch();

    return (<div className='searchBar'>
        <input
            type='text'
            list="cityList"
            placeholder='Search hotel...'
            onChange={e => dispatch(filterAction(e.target.value))}
        />
        <datalist id="cityList">
            {cites.map((item, key) => <option key={key} value={item}/>)}
        </datalist>
    </div>)
}

export default SearchBar;