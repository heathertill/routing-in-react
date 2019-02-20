import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Films from './Films';
import Home from './Home';

class App extends Component {
   render() {
      return (
         <Router>
            <Fragment>
               <Link to="/">Go Home</Link>
               <Link to="/films">View Films</Link>
               <Link to="/People">View People</Link>
               <Switch>
                  {/* <Route exact path="/Home" component={Home} /> */}
                  <Route exact path="/films" component={Films} />
                  <Route path="" />
               </Switch>
            </Fragment>
         </Router>
      );
   }
}

export default App;
