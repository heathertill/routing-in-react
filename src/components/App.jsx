import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Films from './Films';
import Peeps from './Peeps';

class App extends Component {
   render() {
      return (
         <Router>
            <Fragment>
               <Link to="/">Go Home</Link>
               <Link to="/films">View Films</Link>
               <Link to="/peeps">View People</Link>
               <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route path="/films" component={Films} />
                  <Route path="/peeps" component={Peeps} />
               </Switch>
            </Fragment>
         </Router>
      );
   }
}

export default App;
