import React, { Component, Fragment } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

class Header extends Component {
   render() {
      return (
         <Fragment>
            <div
               className="jumbotron-fluid p-3 text-center"
               style={{ backgroundColor: '#e5eef0' }}
            >
               <img className="" src={logo} alt="" style={{height: "300px", width: "600px"}}/>
            </div>
            <div className="text-center pb-3" style={{ background: '#e5eef0', borderBottom: 'solid grey 2px'  }}>
               <Link
                  to="/"
                  className="btn  m-2 d-inline-block"
                  style={{ background: 'white', border: 'solid black 1px' }}
               >
                  Go Home
               </Link>
               <Link
                  to="/films"
                  className="btn  m-2 d-inline-block "
                  style={{ background: 'white', border: 'solid black 1px' }}
               >
                  View Films
               </Link>
               <Link
                  to="/peeps"
                  className="btn m-2 d-inline-block"
                  style={{ background: 'white', border: 'solid black 1px' }}
               >
                  View People
               </Link>
            </div>
         </Fragment>
      );
   }
}

export default Header;
