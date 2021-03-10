import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../components/Header'
import HotelList from '../components/Hotel-list'
import '../styles/Home.css'

function Home() {
  const state = useSelector(state => state);

  return (
    <div className="Home">
          <Header cites={state.hotels.map(item => item.city)}
          />
          <HotelList
              state={state.hotels}
          />
    </div>
  );
}

export default Home;
