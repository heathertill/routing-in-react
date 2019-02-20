import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

class App extends Component {
   render() {
      return (
         <Router>
            <Fragment>
               <Link />
               <Link />
               <Switch>
                  <Route />
                  <Route />
               </Switch>
            </Fragment>
         </Router>
      );
   }
}

export default App;
