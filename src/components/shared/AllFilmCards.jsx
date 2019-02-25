import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
   let { id, title } = props.film;
   return (
      <div className="col-md-4 mb-4">
         <div
            className="card border border-secondary rounded text-center"
            style={{ height: '15em' }}
         >
            <div className="card-body pb-1">
               <h3 className="card-title">{title}</h3>
            </div>
            <div className="card-footer">
               <Link
                  to={`/film/${id}`}
                  className="btn m-2 py-1 d-inline-block"
                  style={{
                     background: '#e5eef0',
                     border: 'solid black 1px'
                  }}
               >
                  View Film
               </Link>
            </div>
         </div>
      </div>
   );
};
