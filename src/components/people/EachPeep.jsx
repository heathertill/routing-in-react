import React, { Component } from 'react';
import EachPeepCard from '../shared/EachPeepCard';

class EachPeep extends Component {
   constructor(props) {
      super(props);
      this.state = {
         peep: {},
         peepFilms: []
      };
   }

   async componentDidMount() {
      try {
         let resPeep = await fetch(
            `https://ghibliapi.herokuapp.com/people/${
               this.props.match.params.id
            }`
         );
         let peep = await resPeep.json();
         console.log('fired');
         this.setState({ peep });
      } catch (e) {
         console.log(e);
      }
   }

   render() {
      return (
         <main className="py-3">
            <div className="container-fluid pt-3 px-5">
               <div className="row justify-content-center">
                  <EachPeepCard key={this.state.peep.id} peep={this.state.peep} />
               </div>
            </div>
         </main>
      );
   }
}

export default EachPeep;
