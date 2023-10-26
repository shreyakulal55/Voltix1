import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileApp from './components/service/MobileApp';
import WebDevelop from "./components/service/WebDevelop";
import Software from "./components/service/Software";
import UI from "./components/service/UI";
import Video from "./components/service/Video";
import Digital from "./components/service/Digital";

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
          <Route path="/mobile" component={MobileApp} />
          <Route path="/web" component={WebDevelop} />
          <Route path="/soft" component={Software} />
          <Route path="/ui" component={UI} />
          <Route path="/video" component={Video} />
          <Route path="/digital" component={Digital} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
