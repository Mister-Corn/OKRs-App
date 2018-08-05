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

test("Navbar component renders.", () => {
  // Arrange
  const { getByTestId } = renderWithRouter(<Navbar />);
  // Assert
  expect(getByTestId("navbar")).toBeInTheDocument();
});

// test("Navbar renders a classed div with links from children.--NO_TRUST", () => {
//   // Arrange
//   const { getByText } = renderWithRouter(
//     <Navbar>
//       <Navbar.LinkDiv>
//         <Navbar.Link to='/'>Home</Navbar.Link>
//       </Navbar.LinkDiv>
//     </Navbar>
//   );
//   // Assert
//   // expect(getByText('navbar--links')).toBeInTheDocument();
//   expect(getByText('Home')).toBeInTheDocument();
// });

test("Navbar displays a logo.", () => {
  //Arrange
  const { getByAltText } = renderWithRouter(
    <Navbar>
      <Navbar.Logo src={logo}/>)
    </Navbar>
  );

  expect(getByAltText('logo')).toBeInTheDocument();
});
