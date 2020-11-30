import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    background-color: #eff2f1;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const List = styled.ul`
  display: flex;
`;
export const Item = styled.li`
  list-style: none;
`;
export const NavLink = styled(Link)`
  text-decoration: none;
  color: #1da1f2;
  font-size: 1.8rem; 
  padding: 2.4rem;
  transition: all 250ms linear 0s;
`;
export const Img = styled.img` 
  width: 60px;
  margin-left: 20px;
  padding: 15px 0;

`;
export const LogoName = styled.h2`
  color: #1da1f2;
  font-size: 29px;
`;
