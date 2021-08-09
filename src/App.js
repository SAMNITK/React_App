import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';
import Explore from './components/pages/Explore';
import MainGallery from './components/MainGallery';
import MainGallery1 from './components/MainGallery1';
import MainGallery2 from './components/MainGallery2';
import SimpleReactLightbox from 'simple-react-lightbox';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/Contact' component={Contact} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/Explore' component={Explore} />
          <SimpleReactLightbox>
          <Route path='/MainGallery' component={MainGallery} />
          <Route path='/MainGallery1' component={MainGallery1} />
          <Route path='/MainGallery2' component={MainGallery2} />
          </SimpleReactLightbox>
        </Switch>
      </Router>
    </>
  );
}

export default App;
