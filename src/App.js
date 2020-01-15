import React from 'react';
import Gallery from './Gallery/Gallery';
import logo from './kodflix-logo.png';
import styled from 'styled-components';


function App() {

  const StyledWrapper = styled.div`
    background-color: black;
    min-height: 100vh;
    text-align: center;
  `;

  const StyledGallery = styled(Gallery)`
    display: flex;
    @media (max-width: 600px) {
      display: block;
    }
  `;

  const Logo = styled.img`
    margin-bottom: 50px;
    width: 50%;
    @media (max-width: 600px) {
      margin-bottom: 50px;
      width: 90%;
    }
  `;

  return (
    <StyledWrapper>
      <Logo alt="kodflix logo" src={logo} />
      <StyledGallery />
    </StyledWrapper>
  );
}

export default App;