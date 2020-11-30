import React from 'react'
import logo from '../../assets/Halloween.svg'


import {Container, Img, Item, List, NavLink} from './styles';
const Header = () => {
  return (
        <>
        <Container>
      <Img src={logo} />  
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
