import React from 'react';
import './Hotel-stars.css'

const HotelStars = ({checked}) => {
    return (<div className={checked ? "checked star" : "unchecked star"}>
        ★
    </div>)
}
export default HotelStars;