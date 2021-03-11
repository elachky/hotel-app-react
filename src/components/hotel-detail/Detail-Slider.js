import React, { useState } from 'react';
import './Detail-Slider.css'

const DetailSlider = ({hotel}) => {

    /****Slide-Functions****/
    const next = () => setIndex((++index) % imgLength);
    const prev = () => setIndex((--index + imgLength) % imgLength);
    let [index, setIndex] = useState(0);
    let imgLength = hotel ? hotel.images.length : 0;

    return (
        <div className="slideshow-container">
            <div className="mySlides fade">
                <div className="numbertext">
                    {index + 1} / {imgLength}
                </div>
                <img src={hotel ? hotel.images[index] : "#"} alt="hotel imgs" />
            </div>

            <div className="prev" onClick={() => prev()}>
                &#10094;
            </div>
            <div className="next" onClick={() => next()}>
                &#10095;
            </div>
        </div>
    );
}

export default DetailSlider;