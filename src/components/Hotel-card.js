import React from 'react'

const HotelCard = ({hotel}) => {
    const { id, name, stars, images, price } = hotel;
    return (
        <div className="card">
            <img src={images[id]} alt={`hotel ${name}`} height='100px' width='110px' className="img" />
            <div className='card-name'>
                {name}
            </div>
            <div className='card-stars'>
                {stars}
            </div>
            <div className='card-price'>
                {price}
            </div>
        </div>
    );
}

export default HotelCard;