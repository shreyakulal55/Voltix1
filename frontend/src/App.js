import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './pages/Home';
import Home from './pages/Home1';
import Services from './pages/Services';
import Projects from './pages/Projects';
import AboutUs from './pages/AboutUs';
// import ContactUs from './pages/ContactUs';
import ContactUs1 from './pages/ContactUs1';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
          <Route path="/contactus" component={ContactUs1} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
