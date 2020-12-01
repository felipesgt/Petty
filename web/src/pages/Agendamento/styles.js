import styled from 'styled-components';
import banner from '../../assets/banner.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
   `;

export const Title = styled.h2` 
  color: rgb(75, 75, 75);
  font-size: 3.6rem;
  line-height: 4.6rem;
  `;

export const Text = styled.p` 
  font-size: 1.8rem;
  line-height: 3.2rem;
  margin: 10px 0px 0px;
  width: 500px;
  `;

export const Form = styled.form`
  text-align: left;
  color: #1da1f2;
  width: 300px;
  padding: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  background: #1da1f2;
  border: 0;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
  text-decoration: none;
  width: 100%;
  height: 3.6rem;

`;

export const Banner = styled.div` 
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  background-attachment: scroll;
  background-repeat: no-repeat;
  min-height: 210px;
  padding: 80px 0
`;
