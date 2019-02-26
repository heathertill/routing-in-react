import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './shared/Home';
import Films from './films/Films';
import Peeps from './people/Peeps';
import Header from './shared/Header';
import EachFilm from './films/EachFilm';
import EachPeep from './people/EachPeep'

const App = () => {
   return (
      <Router>
         <>
            <Header />
            <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/films" component={Films} />
               <Route exact path="/peeps" component={Peeps} />
               <Route exact path="/film/:id" component={EachFilm} />
               <Route exact path="/peep/:id" component={EachPeep} />
            </Switch>
         </>
      </Router>
   );
};

export default App;
