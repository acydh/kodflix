import React, { Component } from 'react';
import NotFound from '../NotFound/NotFound';
import Loading from '../Loading/Loading';
import styled from 'styled-components';


class MovieDetails extends Component {

    constructor() {
        super();
        this.state = { show: {} };
    }


    componentDidMount() {
        let showId = this.props.match.params.id;
        fetch(`/rest/shows/`)
            .then(response => response.json())
            .then(response => response.shows.find(show => showId === toSlug(show.title)))
            .then(show => this.setState({ show }));
    }


    render() {

        const Wrapper = styled.div`
        `;

        function DetailsContent(props) {
            return (
                <Wrapper>
                    <h1>{props.show.title}</h1>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/${props.show.image}`} alt={props.show.title} />
                    <p>{props.show.info}</p>
                </Wrapper>
            )
        }

        let show = this.state.show;

        if (show) {
            return show.id ? (
                <DetailsContent show={show} />
            ) : <Loading />
        } else {
            return <NotFound />
        }
    }
}

function toSlug(title) {
    return title
        .split(' ')
        .join('-')
        .toLowerCase();
}

export default MovieDetails;