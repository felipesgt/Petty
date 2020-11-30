import styled from 'styled-components';
export const Wrapper = styled.div `
width: 100vw;
display: flex;
justify-content: center;
background-color: #eff2f1;
`
export const Container = styled.div `
  width: 90%;
  display: flex;
  margin-left: 5rem;
  flex-direction: row;
 div {
    padding: 30px;
 }  
`
export const Text = styled.p `
  font-size: 1.8rem;
  line-height: 3.2rem;
  margin: 10px 0px 0px;
`

export const Title = styled.h2 ` 
  color: rgb(75, 75, 75);
  font-size: 3.6rem;
  line-height: 4.6rem;
`
export const Img = styled.img `
    width: 50rem;
`
export const Span = styled.span `
  color: #1da1f2;
`
export const Button = styled.a ` 
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
`
