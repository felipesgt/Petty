import styled from 'styled-components';

export const Wrapper = styled.div`
width: 100%;
display: flex;
padding-right: 10rem;
padding-left: 12rem;
margin-right: auto;
margin-left: auto;
justify-content: center;
flex-direction: column;
@media (max-width: 768px) {
    padding: 0px;
  }

`;
export const Container = styled.div`
  display: flex;
  padding-left: 1rem;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

export const Text = styled.p`
  color: rgba(0,0,0,.54);
  font-size: 2.4rem;
  font-weight: lighter;
  line-height: 3.2rem;
  margin: 18px 0 42px;
  @media (max-width: 360px) {
    font-size: 1.6rem;
    line-height: 1.6rem;
}
`;

export const Title = styled.h2` 
    color: rgba(0,0,0,.87);
  font-size: 4.2rem;
  line-height: 4.9rem;
  @media (max-width: 360px) {
    font-size: 2.6rem;
    line-height: 2.6rem;
  }
`;

export const Img = styled.img`
    width: 50rem;
    @media (max-width: 360px) {
    width: 20rem;
  }
`;

export const Span = styled.span`
  color: #1da1f2;
`;

export const Button = styled.a` 
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 600;
  color: rgb(255, 255, 255);
  background-color: #1da1f2;
  margin: 15px 0px 0px;
  padding: 12px 30px;
  text-decoration: none;
  border-radius: 5px;
  transition: all 150ms linear 0s;
`;

export const Spec = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
 

`;
export const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 360px) {
    grid-template-columns: 1fr;
  }
`;

export const Box = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SpecTitle = styled.h3`
    color: #11B8C6;
  
`;
export const SpecImg = styled.img`
    width: ${(props) => props.imgSize};
    @media (max-width: 360px) {
      width: 10rem;
  }
`;
