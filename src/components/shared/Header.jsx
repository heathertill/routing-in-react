import React, { Component, Fragment } from 'react';
import logo from '../../assets/logo.png';

class Header extends Component {
   render() {
      return (
         <Fragment>
            <div className="jumbotron-fluid p-5 text-center" style={{backgroundColor: '#e5eef0'}}>
               <img className="" src={logo} alt="" />
            </div>
         </Fragment>
      );
   }
}

export default Header;
