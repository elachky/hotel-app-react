import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/header/Header'
import HotelList from '../components/hotel-list/Hotel-list'
import { getDataAction } from '../actions/actionsCreator';

function Home(props) {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getDataAction()), [props.match]);
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
