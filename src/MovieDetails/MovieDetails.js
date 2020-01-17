import React from 'react';
import { useParams } from "react-router-dom";
import movieList from '../movies.json';
import NotFound from '../NotFound/NotFound';
import styled from 'styled-components';



function MovieDetails() {

    const Wrapper = styled.div`
        background-color: red;
    `;

    const { id } = useParams();

    let movie = movieList.find(movie => movie.slug === id);
    const isValidTitle = movie ? true : false;

    return (
        isValidTitle ? (
            <Wrapper>
                <h1>Details of {movie.title}</h1>
            </Wrapper>) : (
                <NotFound />
            )
    )
}

export default MovieDetails;