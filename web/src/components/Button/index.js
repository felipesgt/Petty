/* eslint-disable react/prop-types */
import React from 'react';
import { FormButton } from './styles';

const Button = ({ text }) => (
  <FormButton variant="contained" color="inherit">
    {text}
  </FormButton>
);
export default Button;
