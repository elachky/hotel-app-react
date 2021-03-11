import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import DetailSlider from '../components/hotel-detail/Detail-Slider';
import DetailLocation from '../components/hotel-detail/HotelLocation';
import { getDataAction } from '../actions/actionsCreator';
import './DetailHotel.css'

const DetailHotel = (props) => {
    /*******GET-DATA********/
    const dispatch = useDispatch();
    useEffect(() => dispatch(getDataAction()), [props.match.params.id]);
    const hotel = useSelector(state => state.hotels.filter(hotel => hotel.id === parseInt(props.match.params.id)));
    
    return (
      <div className="container">
        <div className="detail-container">
          <DetailSlider hotel={hotel[0]} />
          <Link to="/">home</Link>
          <DetailLocation hotel={hotel[0]}/>
        </div>
      </div>
    );
}

export default DetailHotel;
