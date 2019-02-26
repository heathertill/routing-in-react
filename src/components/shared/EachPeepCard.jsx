import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
   let { name, gender, age, eye_color, hair_color, url } = props.peep;
   return (
      <div className="col-md-8 mb-2">
         <div className="card border border-secondary rounded">
            <div className="card-body">
               <h2 className="card-title mb-4" style={{ fontWeight: 'bold' }}>
                  {name}
               </h2>
               <h6 className="mb-3">
                  <span style={{ fontWeight: 'bold' }}>Gender: </span>
                  {gender}
               </h6>
               <h6 className="mb-3">
                  <span style={{ fontWeight: 'bold' }}>Age: </span>
                  {age}
               </h6>
               <h6 className="mb-3">
                  <span style={{ fontWeight: 'bold' }}>Eye Color: </span>
                  {eye_color}
               </h6>
               <h6 className="mb-3">
                  <span style={{ fontWeight: 'bold' }}>Hair Color: </span>
                  {hair_color}
               </h6>
               <h6 className="mb-1" style={{ fontWeight: 'bold' }}>
                  {name}'s URL:
               </h6>
               <div className="mb-3">
                  <a
                     href={url}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     {url}
                  </a>
               </div>
               <Link
                  to="/peeps"
                  className="btn  m-2 d-inline-block "
                  style={{ background: 'white', border: 'solid black 1px' }}
               >
                  Back to People
               </Link>
            </div>
         </div>
      </div>
   );
};
