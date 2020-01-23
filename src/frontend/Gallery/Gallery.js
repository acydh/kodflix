import React, { Component } from 'react';
import Poster from '../Poster/Poster';
import styled from 'styled-components';

class Gallery extends Component {

    constructor() {
        super();
        this.state = {
            "data": []
        }
    }

    componentDidMount() {
        fetch('/rest/shows/')
            .then(res => res.json())
            .then(data => {
                return data.shows.map(poster => {
                    return <Poster coverImg={poster.image} title={poster.title} info={poster.info} alt={poster.alt} key={poster.id} />
                })
            })
            .then(data => this.setState({ "data": data }))
    }



    render() {

        const Wrapper = styled.div`
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-row-gap: 20px;
            @media (max-width: 1024px) {
                grid-template-columns: 1fr 1fr;
            @media (max-width: 600px) {
                grid-template-columns: 1fr;
            }
        `;

        return (
            <Wrapper>
                {this.state.data};
            </Wrapper >
        )
    }
}

export default Gallery