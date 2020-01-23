import React from 'react';
import styled from 'styled-components';

function Loading() {

    const Wrapper = styled.div`
        position: fixed;
        margin-top: -150px;
        background-color: rgba(0, 0, 0, 0.9);
        z-index: 1;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

    `;

    const Loader = styled.div`
        border: 16px solid #f3f3f3; /* Light grey */
        border-top: 16px solid #3498db; /* Blue */
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;

    return (
        <Wrapper>
            <div>
                <Loader />
            </div>
        </Wrapper>

    )
}

export default Loading;