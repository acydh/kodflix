import React, { Component } from 'react';
import NotFound from '../NotFound/NotFound';
import styled from 'styled-components';
import Loader from '../Loading/Loading';


class MovieDetails extends Component {

    constructor() {
        super();
        this.state = { show: {} };
    }

    componentDidMount() {
        let showId = this.props.match.params.id;
        console.log(showId);
        fetch(`/rest/shows/${showId}`)
            .then(response => response.json())
            .then(show => this.setState({ show }));
    }

    render() {

        const Wrapper = styled.div`

        `;

        const show = this.state.show;
        if (show) {
            return show.title ?
                <DetailsContent /> : <Loader />
        } else {
            return <NotFound />
        }

        function DetailsContent() {
            return (
                <Wrapper>
                    <h1>{show.title}</h1>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/${show.image}`} alt={show.title} />
                    <p>{show.info}</p>
                </Wrapper>
            )
        }
    }
}

export default MovieDetails;