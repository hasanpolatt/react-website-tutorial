import React from 'react'
import { Link } from 'react-router-dom';

function CardItem(props) {
    return (
        <div>
            <li className='cards-item'>
                <Link className='cards-item-link' to={props.path}>
                    <figure className='cards-item-pic-wrap' data-category={props.label}>
                        {/* <img type='image' className='cards-item-img' src={props.src} alt='Travel Image' /> */}
                        <input type='image' className='cards-item-img' src={props.src} alt='Travel Image' />
                    </figure>
                    <div className='cards-item-info'>
                        <h5 className='cards-item-text'>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </div>
    )
}

export default CardItem;
