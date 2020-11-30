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
`;
export const Container = styled.div`
  display: flex;
  padding: 1.5rem;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-top: 2.88rem;
  
`;
export const Text = styled.p`
  font-size: 1.8rem;
  line-height: 3.2rem;
  margin: 10px 0px 0px;
`;

export const Title = styled.h2` 
  color: rgb(75, 75, 75);
  font-size: 3.6rem;
  line-height: 4.6rem;
`;
export const Img = styled.img`
    width: 50rem;
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
