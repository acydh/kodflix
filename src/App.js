import React from 'react';
import Gallery from './Gallery/Gallery';
import logo from './kodflix-logo.png';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  const Wrapper = styled.div`
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
    <Wrapper>
      <Router>
        <Link to="/"><Logo alt="kodflix logo" src={logo} /></Link>
      </Router>
      <StyledGallery />
    </Wrapper>
  );
}

export default App;