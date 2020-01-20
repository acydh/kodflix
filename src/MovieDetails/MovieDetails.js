import React, { Component } from 'react';
// import { useParams } from "react-router-dom";
// import movieList from '../movies.json';
//import NotFound from '../NotFound/NotFound';
import styled from 'styled-components';



class MovieDetails extends Component {

    constructor() {
        super();
        this.state = {
            message: 'Hello, this will be the details page for each Movie & TV show :)'
        }
    }

    componentDidMount() {
        setTimeout(() => this.setState({ message: 'Coming soon! :)' }), 3000);
    }

    render() {

        let { message } = this.state;

        const Wrapper = styled.div`
                color: white;
            `;

        return (
            <Wrapper>
                <h1>{message}</h1>
            </Wrapper>
        )
    }
}


//  ADVANCED VERSION BELOW, DO NOT CONSIDER FOR THE REVIEW

// function MovieDetails() {

//     const Wrapper = styled.div`

//     `;

//     const { id } = useParams();

//     let movie = movieList.find(movie => {
//         let title = id
//             .split('-')
//             .join(' ');
//         return title.toLowerCase() === movie.title.toLowerCase();
//     });
//     const isValidTitle = movie ? true : false;

//     return (
//         isValidTitle ? (
//             <Wrapper>
//                 <h1>{movie.title}</h1>
//                 <img src={`${process.env.PUBLIC_URL}/assets/images/${movie.image}`} alt={movie.title} />
//                 <p>{movie.info}</p>
//             </Wrapper>) : (
//                 <NotFound />
//             )
//     )
// }

export default MovieDetails;