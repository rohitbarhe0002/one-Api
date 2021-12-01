import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Books from './components/Books';
import Movie from './components/Movie';
import MovieQuotes from './components/MovieQuotes';
import Character from './components/Character';


function App() {
  return (
    <div>
      <Router>
        <Nav className="Links" variant="tabs" defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link href="/Movies">Movies</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/MovieQuotes/:Id">Movies Quotes</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Books">Book</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Characters">Characters</Nav.Link>
          </Nav.Item>


        </Nav>
        <Route exact path="/" />
        <Route path="/Movies" component={Movie} />
        <Route path="/Books" component={Books} />
        <Route path="/MovieQuotes/:id" component={MovieQuotes} />
        <Route path="/Characters" component={Character} />

      </Router>
    </div>
  );
}

export default App;
