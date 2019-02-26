import React, { Component } from 'react';
import AllPeepCards from '../shared/AllPeepCards';

class Peeps extends Component {
   constructor(props) {
      super(props);
      this.state = {
         peeps: []
      };
   }

   async componentDidMount() {
      let res = await fetch('https://ghibliapi.herokuapp.com/people');
      let peeps = await res.json();
      this.setState({ peeps });
   }

   render() {
      return (
         <main className="container-fluid py-4 px-5">
            <div className="row justify-content-center">
               <div className="card-deck d-f">
                  {this.state.peeps.map(peep => {
                     return <AllPeepCards key={peep.id} peep={peep} />;
                  })}
               </div>
            </div>
         </main>
      );
   }
}

export default Peeps;
