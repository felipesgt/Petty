/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Container, Item, List, LogoName, NavLink, BurguerMenu,
} from './styles';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Container>
        <NavLink to="/">
          <LogoName>Petty</LogoName>
        </NavLink>

        <BurguerMenu open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </BurguerMenu>

        <nav>
          <List open={open}>
            <Item>
              <NavLink to="/especialidades">Especialidades</NavLink>
            </Item>
            <Item>
              <NavLink to="/servicos">Serviços</NavLink>
            </Item>
            <Item>
              <NavLink to="/agendamento">Agendamento</NavLink>
            </Item>
            <Item>
              <NavLink to="/contato">Contato</NavLink>
            </Item>
          </List>
        </nav>
      </Container>
    </>
  );
}
