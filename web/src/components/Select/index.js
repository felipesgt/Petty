/* eslint-disable react/prop-types */
import React from 'react';
import { Label, SelectBlock, SelectItem } from './styles';

const Select = ({ name }) => (
  <SelectBlock>
    <Label>{name}</Label>
    <SelectItem>
      <option selected="">Selecione uma opção</option>
      <option value="Barra da Tijuca">
        Barra da Tijuca
      </option>
      <option value="Campo Grande">
        Campo Grande
      </option>
      <option value="Padre Miguel">
        Padre Miguel
      </option>
      <option value="Tijuca">
        Tijuca
      </option>
      <option value="Del Castilho">
        Del Castilho
      </option>
      <option value="Botafogo">
        Botafogo
      </option>
    </SelectItem>
  </SelectBlock>
);

export default Select;
