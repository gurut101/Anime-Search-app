import React from 'react';
import 'tachyons';
import './card.css';

// import cardList from './cardList';

const Card =(props)=>{ 
    // const {name,email}=props;
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='anime' src={`./img/${props.id}.png`}/>
            <div>
                <h2>{props.name}</h2>
                <h3>{props.clan}</h3>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;
