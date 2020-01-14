import React from 'react';
import Poster from '../Poster/Poster';
import json_data from '../movies.json';
import './Gallery.scss';

function Gallery() {

    const posterArray = json_data.map(poster => {
        return <Poster coverImg={poster.image} title={poster.title} alt={poster.alt} />
    });

    return (
        <div className="container">{posterArray}</div>

    )
}

export default Gallery