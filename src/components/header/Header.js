import React from 'react'

import CheckIntOut from '../CheckIn-Out'
import SearchBar from './SearchBar';
import './Header.css';

const Header = ({cites}) => {
    return (<div className='header'>
        <div className='header-top'>
            <h1>Name & logo of the enreprise</h1>
        </div>
        <div className='header-bot'>
            <h1 className='header-bot-title'>
                Find your distination
            </h1>
            <div className='header-bot-search'>
                <SearchBar cites={cites}/>
                <CheckIntOut />
            </div>
        </div>
    </div>)
}

export default Header;