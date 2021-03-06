import React, { Component } from 'react';
import AllFilmCards from '../shared/AllFilmCards';

class Films extends Component {
   constructor(props) {
      super(props);
      this.state = {
         films: []
      };
   }

   async componentDidMount() {
      let res = await fetch('https://ghibliapi.herokuapp.com/films');
      let films = await res.json();
      this.setState({ films });
   }

   render() {
      return (
         <main className="container-fluid py-4 px-5">
            <div className="row justify-content-center">
               <div className="card-deck d-f">
                  {this.state.films.map(film => {
                     return <AllFilmCards key={film.id} film={film} />;
                  })}
               </div>
            </div>
         </main>
      );
   }
}

export default Films;
