import React from 'react';
import Poster from '../Poster/Poster';
import json_data from '../movies.json';
import styled from 'styled-components';

function Gallery() {

    const Container = styled.div`
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        @media (max-width: 900px) {
            grid-template-columns: 1fr 1fr 1fr;
        }
        @media (max-width: 600px) {
            grid-template-columns: 1fr;
        }
    `;

    const posterArray = json_data.map(poster => {
        return <Poster coverImg={poster.image} title={poster.title} alt={poster.alt} key={poster.id} />
    });

    return (
        <Container>{posterArray}</Container>
    )
}

export default Gallery