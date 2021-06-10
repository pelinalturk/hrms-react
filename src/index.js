import React from 'react';
import ReactDOM from 'react-dom';
 import './index.css'; 
 import App from './App'; 
 import reportWebVitals from './reportWebVitals'; 
import { Container, Header, Message, Segment } from "semantic-ui-react";
import "pure-react-carousel/dist/react-carousel.es.css";
import CardCarousel from './pages/CardCarousel';
import {BrowserRouter} from "react-router-dom"

function Apps() {
    return (
      <Container style={{ margin: 20 }}>
        <Header as="h1" dividing>
          Carousels with Semantic UI React
        </Header>
        <Message info>
          Semantic UI React does not provide any carousel component. In this
          prototype we want to show how you can implement your own carousel with
          SUIR and{" "}
          <a
            href="https://www.npmjs.com/package/pure-react-carousel"
            target="_blank"
          >
            <code>pure-react-carousel</code>
          </a>
          .
        </Message>
  
        <Segment attached="top">
          <Header as="h2" content="Card carousel" />
          <p>
            This prototype features how to create a carousel with the{" "}
            <code>Card</code> component, take a look into{" "}
            <code>examples/CardCarousel</code> to get more details.
          </p>
        </Segment>
        <Segment attached="bottom">
          <CardCarousel />
        </Segment>
  
        <Segment attached="top">
          <Header as="h2" />
          <p>
            This prototype features how to create a carousel with images, take a
            look into to get more details.
          </p>
        </Segment>
        <Segment attached="bottom">
        </Segment>
      </Container>
    );
  }

ReactDOM.render(<BrowserRouter> <App /></BrowserRouter>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
