import React, { Component } from 'react';
import { Carousel } from 'antd';
import bg1 from '../../images/agr-img 1.jpg';
import safeguard from '../../images/safeguard.jpg'
import './slider.css';

class Slider extends Component{
render(){
    return ( 
        <div className="carousel-pos">
        <Carousel autoplay>
            <div className="slide1">
                <div className="slide-image">
                <img alt="KME" src={safeguard}></img>
                </div>
                <div className="image-content">
                    
                </div>
            </div>

      </Carousel>
    </div>
   );
}   
}

export default Slider;