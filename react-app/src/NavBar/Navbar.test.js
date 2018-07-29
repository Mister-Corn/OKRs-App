// Core Dependencies
import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
// Test Subjects
import Navbar from './';

test("Navbar component renders.", () => {
  // Arrange
  const { getByTestId } = render(
    <Navbar />
  );
  // Assert
  expect(getByTestId("navbar-test")).toBeInTheDocument();
});

test("Navbar renders links from children.", () => {
  // Arrange
  const { getByText } = render(
    <Navbar>
      <Navbar.LinkTxt to='/'>Home</Navbar.LinkTxt>
    </Navbar>
  );
  // Assert
  expect(getByText('Home')).toBeInTheDocument();
})