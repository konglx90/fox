import 'react-native';
import React from 'react';
import App from '../App';
import KButton from '../src/components/common/button';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <App />
  );
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(<KButton />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
