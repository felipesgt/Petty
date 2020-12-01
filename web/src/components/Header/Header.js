import React from 'react';

import {
  Container, Item, List, LogoName, NavLink,
} from './styles';

const Header = () => (
  <>
    <Container>
      <LogoName>Petty</LogoName>
      <nav>
        <List>
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

export default Header;
