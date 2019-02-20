import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';

class Home extends Component {
   componentDidMount() {
      // performs this action when you navigate to this page
      fetch("https://ghibliapi.herokuapp.com/films").then((res) => {
         return res.json();
      })
      .then((obj) => console.log(obj))
   }

   render() {
      return <h1>This is the home page</h1>;
   }
}

export default Home;
