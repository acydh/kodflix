import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

function Poster({ title, info, coverImg }) {

	const MovieCover = styled.div`
        position: relative;
        overflow: hidden;
        opacity: .99;
        box-shadow: 0 0 20px 0 rgba(0,0,0,.05);
        &:before {
			content: '';
			background: linear-gradient(
				to bottom,
				rgba(0,0,0,0) 0%,
				rgba(0,0,0,1) 100%
			);
			width: 100%;
			height: 50%;
			opacity: 0;
			position: absolute;
			top: 100%;
			left: 0;
			z-index: 2;
			transition-property: top, opacity;
			transition-duration: 0.3s;
        }

        &:focus,
		&:hover {
			
			&:before,
			span {
				opacity: 1;
			}
			&:before {
				top: 50%;
			}
			span {
				top: 0;
			}
			.title {
				transition-delay: 0.15s;
			}
			.info {
				transition-delay: 0.25s;
			}
        }
    `;

	const CoverImage = styled.img`
        width: 100%;
        display: block;
        backface-visibility: hidden;
        @media (max-width: 600px) {
            margin: 0 auto;
        }
    `;

	const TextOverlay = styled.div`
        font-size: 16px;
		padding: 20px;
		color: #fff;
		position: absolute;
		bottom: 0;
		left: 0;
        z-index: 3;
        text-align: left;
        & span {
            display: block;
			opacity: 0;
			position: relative;
			top: 100px;
			transition-property: top, opacity;
			transition-duration: 0.3s;
            transition-delay: 0s;
        }
        .title {
			line-height: 1.2;
			font-weight: 600;
			font-size: 21px;
        }
        .info {
			line-height: 1.2;
			margin-top: 5px;
			font-size: 16px;
		}
    `;


	// const urlFriendly = title => {
	// 	return title
	// 		.split(' ')
	// 		.map(word => word.toLowerCase())
	// 		.join('-');
	// }


	return (
		<MovieCover className='movieCover'>
			{/* <Link to={`/details/${urlFriendly(title)}`}> */}
			<Link to={`/details/`}>
				<CoverImage src={`${process.env.PUBLIC_URL}/assets/images/${coverImg}`} alt={title} />
				<TextOverlay>
					<span className="title">{title}</span>
					<span className="info">{info}</span>
				</TextOverlay>
			</Link>
		</MovieCover >
	)
}

export default Poster;