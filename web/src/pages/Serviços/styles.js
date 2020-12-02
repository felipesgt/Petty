import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding-right: 10rem;
  padding-left: 8.5rem;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
      padding: 0;
  }
`;

export const Text = styled.p`
  font-size: 1.8rem;
  margin: 10px 0px 0px;
  @media (max-width: 768px) {
      font-size: 1.5rem;
  }
`;

export const Title = styled.h2` 
  color: rgb(75, 75, 75);
  font-size: 3.6rem;
  line-height: 4.6rem;
`;
export const Row = styled.div`
  display: flex;
  
`;
export const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 49px;

`;

export const Box = styled.div`
    display: block;
    width: 100%;
    height: 20rem;
    background: #fff;
    padding: 40px 10px 62px;
    text-align: center;
    border-radius: 15px;
    margin-bottom: 32px;
    border: 1px solid #fff;
    box-shadow: 0 15px 19px rgba(0, 0, 0, 0.08);
`;

export const BoxText = styled.h2`
    font-size: 21px;
    font-weight: 700;
    color: #11B8C6;
`;
