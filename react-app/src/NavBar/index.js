import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  static LinkTxt = ({ to, children }) => <a href={to}>{children}</a>;

  render() {
    return (
      <div data-testid='navbar-test'>
      { React.Children.map(this.props.children, child => React.cloneElement(child)) }
      </div>
    );
  }
}

export default Navbar;