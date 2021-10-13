import React from 'react';
import CardItem from '../components/CardItem';
import '../App.css';
import image from '../contents/images/img-9.jpg';
import image2 from '../contents/images/img-2.jpg';
import image3 from '../contents/images/img-3.jpg';
import image4 from '../contents/images/img-4.jpg';
import image5 from '../contents/images/img-8.jpg';
import { Link } from 'react-router-dom';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these Epic Destinations</h1>
            <div className='cards-container'>
                <div className='cards-wrapper'>
                    <ul className='cards-items'>
                        <Link to='/products' >
                            <CardItem

                                src={image}
                                text='Explore the hidden world deep inside the Cthulhu Cave'
                                label='Adventure'
                                path='/services'
                            />
                        </Link>

                        <CardItem
                            src={image2}
                            text='Travel through the Islands of Elder God in a Private Cruise'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards-items'>
                        <CardItem
                            src={image3}
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src={image4}
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure'
                            path='/products'
                        />
                        <CardItem
                            src={image5}
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;