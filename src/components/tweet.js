import React from 'react';
import './tweet.css';

const Tweet = (props) => {
    return (
        <div className='tweet'>
            <h1>Manish</h1> 
            <h2>Name: {props.name}</h2>
            <p>This is Random Tweet</p>
        </div>
    )
}

export default Tweet;
