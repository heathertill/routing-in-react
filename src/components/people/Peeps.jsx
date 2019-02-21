import React, { Component } from 'react';

class Peeps extends Component {

   componentDidMount() {
      // performs this action when you navigate to this page
      fetch("https://ghibliapi.herokuapp.com/people").then((resPeep) => {
         return resPeep.json();
      })
      .then((peeps) => console.log(peeps))
   }

   render() {
      return <h1>This is the Peeps page</h1>;
   }
}

export default Peeps;


// getFilms() {
//    try {
//       fetch('https://ghibliapi.herokuapp.com/films')
//          .then(resFilms => {
//             return resFilms.json();
//          })
//          .then(films => this.setState(films));
//    } catch (e) {console.log(e)}
// }

// getPeople() {
//    try {
//       fetch('https://ghibliapi.herokuapp.com/people')
//       .then(resPeeps => {
//          return resPeeps.json();
//       })
//       .then(people => this.this.setState({ people }))
//    } catch (e) {console.log(e)}
// }