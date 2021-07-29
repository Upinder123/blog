import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './containers/About';
import Post from './containers/Post';
import Projects from './components/Projects';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import MainPage from './pages';

class App extends Component {
  componentDidUpdate() {
    let header = document.querySelector("h1");
    let text = header.textContent.toLowerCase();
    let color;
    switch (text) {
      case 'about':
        color = "#16A085";
        break;
      case 'projects':
        color = "#E74C3C";
        break;
      case 'contacts':
        color = "#2980B9";
        break;
      case 'blog':
        color = "#2980B9";
        break;
      default:
        color = "#F1C40F";
        break;
    }
    let root = document.querySelector(":root");
    root.style.setProperty("--color-home", color);
  };
  render() {
    return (

      <Router>
        <div className="App">
          <Header />
          <nav className="Navbar">
            <h2>UJ</h2>
            <ul>
              <li>
                <Link to="/about">about</Link>
              </li>
              <li>
                <Link to="/Projects">Projects</Link>
              </li>
              <li>
                <Link to="/contacts">contacts</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
            </ul>
          </nav>
          <Hero />

          <div className="container">

            <Switch>


              <Route exact path="/" component={MainPage} />
              <Route path="/about" component={About} />
              <Route exact path="/post/:postId" component={Post} />
              <Route path="/about"><h1>About</h1></Route>
              <Route path="/Projects" component={Projects}><h1>Projects</h1></Route>
              <Route path="/contacts"><h1>Contacts</h1></Route>
              <Route path="/" ><h1>Blog</h1></Route>
            </Switch>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
