// React
import React, { Component } from 'react';
// Router
import { Link } from 'react-router-dom';

class Navbar extends Component {
  static Logo = ({ className, src, ...props }) => 
    <img src={src} className={`navbar--logo ${className}`} alt="logo" {...props}/>;
  static LinkDiv = ({ children, className, ...props }) => 
    <div className={`navbar--links ${className}`} {...props}>{children}</div>;
  static Link = ({ to, children, ...props }) => 
    <Link to={to} {...props}>{children}</Link>

  render() {
    return (
      <div className='navbar' data-testid='navbar'>
        { this.props.children }
      </div>
    );
  }
}

/*
  Use below pattern if children need access to state or other props 
  { React.Children.map(this.props.children, child => React.cloneElement(child)) }
*/ 

export default Navbar;