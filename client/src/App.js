import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from  'react-router-dom'

import NavBar from './Components/layout/NavBar';
import Footer from './Components/layout/Footer';
import Landing from './Components/layout/Landing';
import Login from './Components/auth/login';
import Register from './Components/auth/register';



import './App.css';

class App extends Component {
  render () {
    return (
      <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Landing} />
        <div className="container">
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
        </div>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
