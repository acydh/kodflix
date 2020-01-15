import React from 'react';
import Poster from '../Poster/Poster';
import json_data from '../movies.json';
import styled from 'styled-components';

function Gallery() {

    const Container = styled.div`
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: stretch;
        @media (max-width: 600px) {
            display: block;
        }
    `;

    const posterArray = json_data.map(poster => {
        return <Poster coverImg={poster.image} title={poster.title} alt={poster.alt} />
    });

    return (
        <Container>{posterArray}</Container>
    )
}

export default Gallery