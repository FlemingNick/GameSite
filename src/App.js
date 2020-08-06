import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Navbar from './Layout/Navbar/Navbar';
import Footer from './Layout/Footer/Footer';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';


function App() {
  return (

      <BrowserRouter>
          <Navbar/>
              <Switch>
                  <Route exact path='/'><Home/></Route>
                  <Route path='/about'><About/></Route>
                  <Route path='/team'><Team/></Route>
                  <Route path='/contact'><Contact/></Route>
              </Switch>
            <Footer/>
      </BrowserRouter>

  );
}

export default App;
