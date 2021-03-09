import React from 'react'
import HotelCard from './Hotel-card';

const HotelList = ({state}) => {
    return (<div className='list'>
                {state.sort((a, b) => a.price - b.price)
                      .map((item, key) => <HotelCard hotel={item} key={key} />)}
        </div>)
}

export default HotelList;