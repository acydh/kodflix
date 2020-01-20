import React from 'react';
import { useParams } from "react-router-dom";
import movieList from '../movies.json';
import NotFound from '../NotFound/NotFound';
import styled from 'styled-components';


function MovieDetails() {

    const Wrapper = styled.div`

    `;

    const { id } = useParams();

    let movie = movieList.find(movie => {
        console.log(movieList);
        let title = id
            .split('-')
            .join(' ');
        return title.toLowerCase() === movie.title.toLowerCase();
    });
    const isValidTitle = movie ? true : false;

    return (
        isValidTitle ? (
            <Wrapper>
                <h1>{movie.title}</h1>
                <img src={`${process.env.PUBLIC_URL}/assets/images/${movie.image}`} alt={movie.title} />
                <p>{movie.info}</p>
            </Wrapper>) : (
                <NotFound />
            )
    )
}

export default MovieDetails;