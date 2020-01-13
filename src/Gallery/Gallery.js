import React from 'react';
import Poster from '../Poster/Poster';
import json_data from '../movies.json';
import './Gallery.scss';

function Gallery() {

    const posterArray = json_data.map(poster => {
        console.log(poster);
        return <Poster coverImg={poster.image} title={poster.title} alt={poster.alt} />
    });

    return (
        <div>{posterArray}</div>

    )
}

export default Gallery