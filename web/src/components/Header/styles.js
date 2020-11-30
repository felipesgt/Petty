import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Head = styled.header `
    background-color: #1da1f2;
`
export const Container = styled.div`
    background-color: #1da1f2;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    margin: auto;
`

export const List = styled.ul `
  display: flex ;
`
export const Item = styled.li `
  list-style: none;
`
export const NavLink = styled(Link) `
  text-decoration: none;
  color: white;
  font-size: 1.8rem; 
  padding: 2.4rem;
  transition: all 250ms linear 0s;
`
export const Img = styled.img ` 
  width: 60px;
  margin-left: 20px;
  padding: 15px 0;

`