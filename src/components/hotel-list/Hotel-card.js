import React from 'react'
import HotelStars from './Hotel-starts';
import { Link } from 'react-router-dom';
import './Hotel-card.css';

const HotelCard = ({ hotel }) => {
    const { id, name, stars, images, price, city } = hotel;
    let filled = stars
    const star = new Array(5).fill(0).map(() => filled-- > 0 ? 1 : 0);
    return (
        <div className="card">
            <img src={images[id]} alt={`hotel ${name}`} className="img" />
            <div className='card-right'>
                <div className='name-price'>
                    <div className='card-name'>
                        <h1 className="title-name">{name}</h1>
                        <div className='card-stars'>
                            {star.map((item, key) => <HotelStars key={key} checked={item} />)}
                        </div>
                    </div>
                    <div className='card-price'>
                        <h1>{price}$</h1>
                    </div>
                </div>
                <div className='card-description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation in <strong>{city}</strong>.
                </div>
                <div>
                    <Link to={`/details/${id}`}>details</Link>
                </div>
            </div>


        </div>
    );
}

export default HotelCard;