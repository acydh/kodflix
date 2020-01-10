import React from 'react';
import './Poster.scss';


function Poster(props) {
    return (
        <div className="movieCover"><img src={props.coverImg} alt={props.title} />
            <div className="textOverlay">{props.title}</div>
        </div>
    )
}

export default Poster;