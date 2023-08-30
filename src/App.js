import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 
import Home from './components/Home';
import Navbar from './components/partial/Navbar';
import Footer from './components/partial/Footer';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Frizurak from './components/Friseur';
import Message from './components/Message';
import Book from './components/Book';

function App() {
  return (
    <div>
      
      <Router>
        <Navbar/>
          <Switch>
            <Route exact path='/'component={About}/>
            <Route path='/galleria' component={Gallery}/>
            <Route path='/frizurak' component={Frizurak}/>
            <Route path='/uzenet' component={Message}/>
            <Route path='/elerhetoseg' component={Contact}/>
            <Route path='/idopontfoglalas' component={Book}/>
          </Switch>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
