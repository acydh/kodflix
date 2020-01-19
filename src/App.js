import React from 'react';
import Gallery from './Gallery/Gallery';
import MovieDetails from './MovieDetails/MovieDetails';
import NotFound from './NotFound/NotFound';
import logo from './kodflix-logo.png';
import styled from 'styled-components';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  const Wrapper = styled.div`
    background-color: black;
    min-height: 100vh;
    color: white;
    @media (max-width: 600px) {
      text-align:center;
    }
  `;

  const Logo = styled.img`
    margin: 25px auto;
    width: 33%;
    @media (max-width: 600px) {
      width: 75%;
    }
  `;

  return (
    <Wrapper>
      <BrowserRouter>
        <Link to="/"><Logo alt="kodflix logo" src={logo} /></Link>

        <Switch>
          <Route exact path="/" component={Gallery} />
          <Route path="/404" component={NotFound} />
          <Route path="/details/:id" component={MovieDetails} />
          <Route component={NotFound}></Route>
        </Switch>

      </BrowserRouter>
    </Wrapper>
  );
}

export default App;