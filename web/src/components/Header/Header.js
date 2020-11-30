import React from 'react'


import {Container, Img, Item, List, LogoName, NavLink} from './styles';
const Header = () => {
  return (
        <>
        <Container>
          <LogoName>Petty</LogoName>
      <nav>      
          <List>
              <Item>
                <NavLink to="/login">Especialidades</NavLink>
                </Item>
                <Item>
              <NavLink to="/">Serviços</NavLink>
                </Item>
                <Item>
              <NavLink to="/">Agendamento</NavLink>
                </Item>
                <Item>
              <NavLink to="/">Contato</NavLink>
                </Item>
                </List>
                </nav>
          </Container>
   </>
  )
}

export default Header
