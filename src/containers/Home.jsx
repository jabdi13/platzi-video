import React, { useState, useEffect } from 'react';
import '../assets/styles/App.scss';
import useInitialState from '../hooks/useInitialState';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

const API = 'http://localhost:3000/initalState';

const Home = () => {
  const initialState = useInitialState(API)
  return initialState.length === 0 ? <h1>Loading...</h1> : (
    <div className="App">
      <Header />
      <Search />
      {initialState.mylist.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            {initialState.trends.map((item) =>
              <CarouselItem key={item.id} {...item} />
            )}
          </Carousel>
        </Categories>
      )}

      {initialState.trends.length > 0 && (
        <Categories title="Tendencias">
          <Carousel>
            {initialState.trends.map((item) =>
              <CarouselItem key={item.id} {...item} />
            )}
          </Carousel>
        </Categories>
      )}

      {initialState.originals.length > 0 && (
        <Categories title="Originales de Platzi Vídeo">
          <Carousel>
            {initialState.originals.map((item) =>
              <CarouselItem key={item.id} {...item} />
            )}
          </Carousel>
        </Categories>
      )}
      <Footer />
    </div>
  );
};

export default Home;
