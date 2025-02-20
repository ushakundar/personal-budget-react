import react from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import aboutpage from './aboutpage/aboutpage';

function App() {
  return (
    <Router>
        <Menu/>
        <Hero/>
        <div className="mainContainer">
          <switch>
            <Route path="/aboutpage">
            <aboutpage></aboutpage>
            </Route>
          </switch>
        </div>
        <HomePage/>
        <Footer/>
    </Router>
  );
}

export default App;
