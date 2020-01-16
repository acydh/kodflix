import React from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components';



function MovieDetails() {

    const Wrapper = styled.div`
        background-color: red;
    `;

    const { id } = useParams();

    return (
        <Wrapper>
            <h1>Details of {id}</h1>
        </Wrapper>
    )
}

export default MovieDetails;