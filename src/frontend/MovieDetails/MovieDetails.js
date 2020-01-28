import React, { Component } from 'react';
import NotFound from '../NotFound/NotFound';
import styled from 'styled-components';
import Loader from '../Loading/Loading';


class MovieDetails extends Component {

    constructor() {
        super();
        this.state = { "show": {}, "found": true };
    }

    componentDidMount() {
        let showId = this.props.match.params.id;
        fetch(`/rest/shows/${showId}`)
            .then(response => response.json())
            .then(show => setTimeout(() => this.setState({ show }), 500))
            .catch(() => setTimeout(() => this.setState({ found: false }), 500));
    }

    render() {

        const Wrapper = styled.div``;

        const ImageWrapper = styled.div`
            width: 100%;
            height: 200px;
        `;

        const show = this.state.show;
        const found = this.state.found;

        if (found) {
            return show.title ?
                <DetailsContent /> : <Loader />
        } else {
            return <NotFound />
        }

        function DetailsContent() {
            return (
                <Wrapper>
                    <h1>{show.title}</h1>
                    <ImageWrapper>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/${show.image}`} alt={show.title} />
                    </ImageWrapper>
                    <p>{show.info}</p>
                </Wrapper>
            )
        }
    }
}

export default MovieDetails;