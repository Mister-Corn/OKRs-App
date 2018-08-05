// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Router
import { Link } from 'react-router-dom';

/* --- Elemental Component --- */
const Logo = function LogoComponent({ className, src, ...props }) {
  return (
    <img src={src} className={`navbar--logo ${className}`} alt="logo" {...props}/>
  );
};

Logo.proptypes = {
  src: PropTypes.any.isRequired,
  className: PropTypes.string,
};

const LinkDiv = function ClassedDivToPutLinksInComp({ children, className, ...props }) {
  return (
    <div className={`navbar--links ${className}`} {...props}>{children}</div>
  );
};

LinkDiv.proptypes = {
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.instanceOf(Link)), // doesn't work
};

const InLink = function CreateLinkComp({ to, children, ...props }) {
  return (
    <Link to={to} {...props}>{children}</Link>
  );
}

Link.proptypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string,
};

/* --- Compound Component --- */
export default class Navbar extends Component {
  static Logo = Logo;
  static LinkDiv = LinkDiv;
  static Link = InLink;

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
  { React.Children.map(this.props.children, child => React.cloneElement(child. {
    // shared state/prop data
  })) }
*/ 
