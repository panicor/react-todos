import React from "react";
import { render  } from '@testing-library/react';
import App from './App';

test('renders', () => {
  render(<App />);
});

test("matches snapshot", function() {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

