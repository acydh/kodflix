import React from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

function Poster(props) {

    const MovieCover = styled.div`
        position: relative;
        overflow: hidden;
        width: 25%;
        @media (max-width: 600px) {
            text-align: center;
            margin-bottom: 25px;
            width: 100%;
            display: block;
        }
    `;

    const CoverImage = styled.img`
        width: 100%;
        display: block;
        @media (max-width: 600px) {
            width: 75%;
            margin: 0 auto;
        }
    `;

    const TextOverlay = styled.div`
        position: absolute;
        text-align: center;
        bottom: -80px;
        width: 100%;
        vertical-align: middle;
        background-color: rgba(0, 0, 0, 0.6);
        transition: bottom 0.2s ease-out;
        padding: 25px 0;
        font-size: 25px;
        color: white;
        word-wrap: break-word;
        ${MovieCover}:hover & {
            bottom: 0;
        }
        @media (max-width: 600px) {
            display: none;
        }
    `;


    const urlFriendly = title => {
        return title
            .split(' ')
            .map(word => word.toLowerCase())
            .join('-');
    }


    return (
        <MovieCover className='movieCover'>
            <Router>
                <Link to={urlFriendly(props.title)}>
                    <CoverImage src={`${process.env.PUBLIC_URL}/assets/images/${props.coverImg}`} alt={props.title} />
                </Link>
            </Router>
            <TextOverlay>{props.title}</TextOverlay>
        </MovieCover>
    )
}

export default Poster;