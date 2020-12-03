import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h2`
  line-height: 1.1rem;
  font-size: 2.5rem;
  color: #11B8C6;
  
`;
export const Row = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  @media(max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const MapArea = styled.div`
display: flex;
flex-direction: column;
padding: 50px;
@media(max-width: 360px) {
  padding: 0px;
  justify-content: center;
  align-items: center;
  }
`;
export const ContactArea = styled.div`
display: flex;
flex-direction: column;
padding: 50px;
@media(max-width: 360px) {
    justify-content: center;
    align-items: center;
    }
`;
export const Img = styled.img`
width: 25rem;
@media(max-width: 360px) {
  width: 15rem;
  }
`;
