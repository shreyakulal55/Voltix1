// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Projects from './components/Projects';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/projects" component={Projects} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/contactus" component={ContactUs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
