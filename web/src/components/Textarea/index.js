/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { TextBlock, Label, TxtArea } from './styles';

const Textarea = ({ label, ...rest }) => (
  <TextBlock>
    <Label>{label}</Label>
    <TxtArea {...rest} />
  </TextBlock>
);

export default Textarea;
