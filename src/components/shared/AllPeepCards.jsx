import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
   let { id, name } = props.peep;
   return (
      <div className="col-md-4 mb-4">
         <div
            className="card border border-secondary rounded text-center"
            style={{ height: '13em' }}
         >
            <div className="card-body pb-1">
               <h3 className="card-title">{name}</h3>
            </div>
            <div className="card-footer">
               <Link
                  to={`/peep/${id}`}
                  className="btn m-2 py-1 d-inline-block"
                  style={{
                     background: '#e5eef0',
                     border: 'solid black 1px'
                  }}
               >
                  View Bio
               </Link>
            </div>
         </div>
      </div>
   );
};
