import React from 'react';
// import { robots } from './robots.js';

const Card = (props) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt='robots' src={`https://robohash.org/${props.id}?150x150`} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.username}</p>
                <p>{props.email}</p>
            </div>
        </div>
    );
}
export default Card;