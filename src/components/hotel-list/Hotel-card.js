import React from 'react'
import HotelStars from './Hotel-starts';
import './Hotel-card.css';

const HotelCard = ({hotel}) => {
    const { id, name, stars, images, price } = hotel;
    let filled = stars
    const star = new Array(5).fill(0).map(() => filled-- > 0 ? 1 : 0);
    return (
        <div className="card">
            <img src={images[id]} alt={`hotel ${name}`} height='100px' width='110px' className="img" />
            <div className='card-name'>
                {name}
            </div>
            <div className='card-stars'>
                {star.map((item, key) => <HotelStars key={ key } checked={ item }/>)}
            </div>
            <div className='card-price'>
                {price}
            </div>
        </div>
    );
}

export default HotelCard;