import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from './header/Header'
import HotelList from './hotel-list/Hotel-list'
import '../styles/Home.css'
import { getDataAction } from '../actionsCreator';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getDataAction()), []);
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
