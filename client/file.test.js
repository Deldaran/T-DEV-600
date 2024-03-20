import React from 'react';
import { render } from '@testing-library/react-native';
import Card from './Card';

describe('Card Component', () => {
  test('renders card title correctly', () => {
    const { getByText } = render(<Card titleCard="Test Title" />);
    const titleElement = getByText('Test Title');
    expect(titleElement).toBeTruthy();
  });
});
