import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    background-color: #eff2f1;
    display: flex;
    align-items: center;
    justify-content:space-around;
    @media (max-width: 768px) {
      justify-content: flex-start
  }
`;
export const BurguerMenu = styled.div`
  width: 4.5rem;
  height: 3.5rem;
  position: fixed;
  top: 50px;
  right: 30px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  @media (max-width: 360px) {
  }
  div {
    width: 3.3rem;
    height: 0.65rem;
    background-color: ${({ open }) => (open ? '#ccc' : '#333')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const List = styled.ul`
  display: flex;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #eff2f1;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    @media (max-width: 768px) {
      width: 200px;
      margin-top: 45px;      
    }`;

export const Item = styled.li`
  list-style: none;
  @media (max-width: 360px) {
    padding: 5px;
  }
`;
export const NavLink = styled(Link)`
  text-decoration: none;
  color: #1da1f2;
  font-size: 1.8rem; 
  padding: 2.1rem;
  transition: all 250ms linear 0s;
`;

export const LogoName = styled.h2`
  color: #1da1f2;
  font-size: 32px;
 
`;
