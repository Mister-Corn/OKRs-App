// Core Dependencies
import React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-dom/extend-expect';
// Testing--Router Dependency
import { renderWithRouter } from '../utils';
// Test Subjects
import Navbar from './';
import logo from './logo.svg';

afterEach(cleanup); 

test("Navbar component renders and accepts props.", () => {
  // Arrange
  const { getByTestId } = renderWithRouter(<Navbar data-testid='navbar'/>);
  // Assert
  expect(getByTestId("navbar")).toBeInTheDocument();
});

test("Navbar renders a classed div which accepts props and displays links.", () => {
  // Arrange
  const { getByText, getByTestId } = renderWithRouter(
    <Navbar>
      <Navbar.LinkDiv data-testid='navbar--links'>
        <Navbar.Link to='/' data-testid='navbar--links-link'>Home</Navbar.Link>
        <Navbar.Link to='/about' data-testid='navbar--links-link'>{false}</Navbar.Link>
      </Navbar.LinkDiv>
    </Navbar>
  );
  // Assert
  expect(getByTestId('navbar--links')).toBeInTheDocument();
  expect(getByTestId('navbar--links-link')).toBeInTheDocument();
  expect(getByText('Home')).toBeInTheDocument();
});

test("Navbar displays a logo.", () => {
  //Arrange
  const { getByAltText, getByTestId } = renderWithRouter(
    <Navbar>
      <Navbar.Logo data-testid='navbar--logo' src={logo}/>)
    </Navbar>
  );

  expect(getByTestId('navbar--logo')).toBeInTheDocument();
  expect(getByAltText('logo')).toBeInTheDocument();
});
