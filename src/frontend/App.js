import React from 'react';
import Gallery from './Gallery/Gallery';
import MovieDetails from './MovieDetails/MovieDetails';
import NotFound from './NotFound/NotFound';
import logo from './logo2.png';
import styled from 'styled-components';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  const Wrapper = styled.div`
    height: 100%;
    color: white;
    @media (max-width: 600px) {
      text-align:center;
    }
  `;

  const Logo = styled.img`
    margin: 20px 0;
    width: 15%;x2x
    @media (max-width: 600px) {
      width: 50%;
    }
  `;

  return (
    <div>
      <Wrapper>
        <BrowserRouter>
          <Link to="/"><Logo alt="kodflix logo" src={logo} /></Link>
          <Switch>
            <Route exact path="/" component={Gallery} />
            <Route path="/details/:id" component={MovieDetails} />
            <Route path="/404" component={NotFound} />
            <Route component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
      </Wrapper>
    </div>
  );
}

export default App;