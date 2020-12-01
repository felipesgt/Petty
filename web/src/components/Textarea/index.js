/* eslint-disable react/prop-types */
import React from 'react';
import { TextBlock, Label, TxtArea } from './styles';

const Textarea = ({ label }) => (
  <TextBlock>
    <Label>{label}</Label>
    <TxtArea />
  </TextBlock>
);

export default Textarea;
