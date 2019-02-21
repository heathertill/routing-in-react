import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export default props => {
   let { id, title } = props.film;
   return (
      <div className="col-md-4 mb-2">
         <div className="card border border-secondary rounded">
            <div className="card-body">
               <h5 className="card-title">{title}</h5>

               <Link
                  to={`/film/${id}`}
                  className="btn m-2 d-inline-block"
                  style={{ background: '#e5eef0', border: 'solid black 1px' }}
               >
                  View Film
               </Link>
            </div>
         </div>
      </div>
   );
};
