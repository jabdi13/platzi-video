import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = () => (
  <div className="carousel-item">
    <img className="carousel-item__img" src="https://images.unsplash.com/photo-1558980394-4c7c9299fe96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="Motorcycle" />
    <div className="carousel-item__details">
      <div>
        <img className="carousel-items__details--buttons" src={playIcon} alt="Play" />
        <img className="carousel-items__details--buttons" src={plusIcon} alt="Plus" />
      </div>
      <p className="carousel-items__details--title">Título descriptivo</p>
      <p className="carousel-items__details--subtitle">2019 16+ 114 minutos</p>
    </div>
  </div>
);

export default CarouselItem;
