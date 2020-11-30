import React from 'react'
import Header from '../../components/Header/Header';
import img from '../../assets/husky-nobg.png'
import {Wrapper, Container, Title, Text, Span, Button, Img} from './styles';
const Main = () => {
  return (
        <>
      <Header/> 
      <Wrapper class="hero">
        <Container>
          <div>
            <Title>
            Aqui na Petty seu <Span>pet</Span> tem o cuidado e carinho que merece
            </Title>
            <Text>        
      Atendimento especializado 24 horas para diversos tipos de pets
            </Text>
            <Button href="/">Quero agendar!</Button>
          </div>
          <div>
          <Img src={img} />
          </div>
        </Container>
      </Wrapper>
   </>
  )
}

export default Main
