/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import React from 'react';
import {
  render, cleanup, fireEvent,
} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Agendamento from './index';

afterEach(cleanup);

it('should update state on input', () => {
  const { getByTestId, getByDisplayValue } = render(<Router><Agendamento /></Router>);
  const nome = getByTestId('nome');
  fireEvent.input(nome, { target: { value: 'felipe' } });
  expect(getByDisplayValue('felipe')).toBeTruthy();
});
