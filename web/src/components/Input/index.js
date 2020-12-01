/* eslint-disable react/prop-types */
import React from 'react';
import { InputBlock, Label, Field } from './styles';

const Input = ({ name, label }) => (
  <InputBlock>
    <Label htmlFor={name}>{label}</Label>
    <Field type="text" />
  </InputBlock>
);

export default Input;
