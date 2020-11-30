import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding-right: 10rem;
  padding-left: 12rem;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  flex-direction: column;
`;

export const Text = styled.p`
  font-size: 1.8rem;
  margin: 10px 0px 0px;
`;

export const Title = styled.h2` 
  color: rgb(75, 75, 75);
  font-size: 3.6rem;
  line-height: 4.6rem;
`;

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 49px;
`;

export const Box = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SpecTitle = styled.h3`
    font-weight: 700;
    color: #11B8C6;
`;
export const SpecImg = styled.img`
    width: ${(props) => props.imgSize}
`;
