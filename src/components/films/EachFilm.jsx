import React, { Component } from 'react';
import EachFilmCard from '../shared/EachFilmCard';

class EachFilm extends Component {
   constructor(props) {
      super(props);
      this.state = {
         film: {}
      };
   }

   async componentDidMount() {
      try {
         let resFilm = await fetch(
            `https://ghibliapi.herokuapp.com/films/${
               this.props.match.params.id
            }`
         );
         let film = await resFilm.json();
         console.log('fired');
         this.setState({ film });
      } catch (e) {
         console.log(e);
      }
   }

   render() {
      return (
         <main className="py-3">
            <div className="container-fluid pt-3 px-5">
               <div className="row justify-content-center">
                  <EachFilmCard key={this.state.film.id} film={this.state.film} />
               </div>
            </div>
         </main>
      );
   }
}

export default EachFilm;
