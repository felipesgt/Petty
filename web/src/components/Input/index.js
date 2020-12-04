/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { InputBlock, Label, Field } from './styles';

const Input = ({ name, label, ...rest }) => (
  <InputBlock>
    <Label htmlFor={name}>{label}</Label>
    <Field type="text" {...rest} />
  </InputBlock>
);

export default Input;
