import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Img2 from './img-2.jpg';
import Img9 from './img-9.jpg';
import Img3 from './img-3.jpg';
import Img8 from './img-8.jpg';
import Img4 from './img-4.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations in Ethiopia!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Img9}
              text='Explore The Amaizing Blue Nile Waterfall In Ethiopia'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src={Img2}
              text='Visit The complex archtecture of Fasilides castle'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={Img3}
              text='Enjoy Your Vacation With the Amazing View Of Dallol '
              label='Mystery'
              path='/services'
            />
            <CardItem
              src={Img4}
              text='Experience The View on Top of the Semien Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src={Img8}
              text='Have An Epic Travel With Traditional Boat on Lake Tana'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
