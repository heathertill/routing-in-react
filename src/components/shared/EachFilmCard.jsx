import React from 'react';
import { Link } from 'react-router-dom';


export default props => {
   let { title, description, director, producer, release_date, rt_score } = props.film;
   return (
      <div className="col-md-8 mb-2">
         <div className="card border border-secondary rounded">
            <div className="card-body">
               <h5 className="card-title">{title}</h5>
               <h6><span style={{ fontWeight: "bold" }}>Description: </span>{description}</h6>
               <h6><span style={{ fontWeight: "bold" }}>Director: </span>{director}</h6>
               <h6><span style={{ fontWeight: "bold" }}>Producer: </span>{producer}</h6>
               <h6><span style={{ fontWeight: "bold" }}>Release Date: </span>{release_date}</h6>
               <h6><span style={{ fontWeight: "bold" }}>Rotten Tomato Score: </span>{rt_score}</h6>


               <Link
                  to="/films"
                  className="btn  m-2 d-inline-block "
                  style={{ background: 'white', border: 'solid black 1px' }}
               >
                  Back to Films
               </Link>
            </div>
         </div>
      </div>
   );
};
