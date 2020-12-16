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
  color: #f79800;
  font-size: 3.6rem;
  line-height: 4.6rem;
`;

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 49px;

  @media (max-width: 768px) {
   grid-template-columns: repeat(1, 1fr); 
  }
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
    width: ${(props) => props.imgSize};
    @media (max-width: 360px) {
      width: 20rem;
  }
`;
