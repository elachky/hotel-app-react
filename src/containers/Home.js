import React, { useState } from 'react';

import Header from '../components/Header'
import HotelList from '../components/Hotel-list'
import DATA from '../data'
import '../styles/Home.css'

function Home() {
    const [state, setState] = useState(DATA);
    const [city, setVille] = useState('');
    const [regex, setRegex] = useState('')

    const handleSelectedVille = (ville) => {
        setVille(ville);
        setRegex(new RegExp(`^(${ville})`));
    }
    
  return (
    <div className="Home">
          <Header handleSelectedVille={handleSelectedVille}/>
          <HotelList state={city === '' ? state : state.filter((item => regex.test(item.city)))} />
    </div>
  );
}

export default Home;
