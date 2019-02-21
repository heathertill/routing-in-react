import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './shared/Home';
import Films from './films/Films';
import Peeps from './people/Peeps';
import Header from './shared/Header'


class App extends Component {
   constructor(props) {
      super(props); 
         this.state = {
            films: [],
            people: []
         
      }
   }

   componentDidMount() {
      try {
         fetch('https://ghibliapi.herokuapp.com/films')
            .then(resFilms => {
               return resFilms.json()
            })
            .then(films => this.setState(films));
         fetch('https://ghibliapi.herokuapp.com/people')
            .then(resPeeps => {
               return resPeeps.json()
         })
            // .then(people => this.setState({ people }))
      } catch (e) {
         console.log(e);
      }
   }
   

   render() {
      return (
         <Router>
            <Fragment>
               <Header />
               <Link to="/">{<button className="btn btn-primary m-2 d-inline-block">Go Home</button>}</Link>
               <Link to="/films">View Films</Link>
               <Link to="/peeps">View People</Link>
               {/* <Films films={this.state.films} /> */}
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
