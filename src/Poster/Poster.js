import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

function Poster(props) {

    const MovieCover = styled.div`
        position: relative;
        overflow: hidden;
        flex-basis: 300px;
        flex-grow: 1;
        @media (max-width: 600px) {
            text-align: center;
            margin-bottom: 25px;
            width: 100%;
        }
    `;

    const CoverImage = styled.img`
        width: 100%;
        display: block;
        @media (max-width: 600px) {
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

            <Link to={`/details/${urlFriendly(props.title)}`}>
                <CoverImage src={`${process.env.PUBLIC_URL}/assets/images/${props.coverImg}`} alt={props.title} />
            </Link>

            <TextOverlay>{props.title}</TextOverlay>
        </MovieCover>
    )
}

export default Poster;