import React from 'react';
import Poster from '../Poster/Poster';
import json_data from '../movies.json';
import styled from 'styled-components';

function Gallery() {

    const Wrapper = styled.div`
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-row-gap: 20px;
        @media (max-width: 1024px) {
            grid-template-columns: 1fr 1fr;
        @media (max-width: 600px) {
            grid-template-columns: 1fr;
        }
    `;

    const posterArray = json_data.map(poster => {
        return <Poster coverImg={poster.image} title={poster.title} info={poster.info} alt={poster.alt} key={poster.id} />
    });

    return (
        <Wrapper>{posterArray}</Wrapper>
    )
}

export default Gallery