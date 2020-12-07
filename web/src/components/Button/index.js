/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { FormButton } from './styles';

const Button = ({ text, ...rest }) => (
  <FormButton variant="contained" color="inherit" {...rest}>
    {text}
  </FormButton>
);
export default Button;
