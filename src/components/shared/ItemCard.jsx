import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';


export default props => {
   let {
      id,
      title,
   } = props.blog;
   return (
      <div className="col-md-4 mb-2">
         <div className="card" style="width: 18rem;">
            <img src={logo} className="card-img-top" alt="" />
            <div className="card-body">
               <h5 className="card-title">{title}</h5>
               <Link to={`/film/${id}`} className="btn btn-primary">View Film</Link>
               <a href="#" className="btn btn-primary">
                  Go somewhere
               </a>
            </div>
         </div>
      </div>
   );
};
