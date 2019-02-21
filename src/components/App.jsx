import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './shared/Home';
import Films from './films/Films';
import Peeps from './people/Peeps';
import Header from './shared/Header';



const App = () => {
   return (
      <Router>
         <>
            <Header />
            <Link to="/" className="btn btn-primary m-2 d-inline-block">
               Go Home
            </Link>
            <Link to="/films">View Films</Link>
            <Link to="/peeps">View People</Link>
            <Switch>
               <Route exact path="/" component={Home} />
               <Route path="/films" component={Films} />
               <Route path="/peeps" component={Peeps} />
            </Switch>
         </>
      </Router>
   );
};

export default App;
