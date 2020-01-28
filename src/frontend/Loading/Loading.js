import React from 'react';
import styled from 'styled-components';
import './gears.css';
import bigGear from "./big-gear.png";
import smallGear from "./small-gear.png";

function Loading() {

    const Wrapper = styled.div`
        position: fixed;
        margin-top: -150px;
        background-color: rgba(0, 0, 0, 0);
        z-index: 1;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    return (
        <Wrapper>
            <div className="gears">
                <img src={bigGear} alt="gear" className="big" />
                <img src={smallGear} alt="gear" className="small" />
                <h3>Loading...</h3>
            </div>
        </Wrapper>
    )
}

export default Loading;