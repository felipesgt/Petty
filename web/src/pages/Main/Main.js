import React from 'react'
import Header from '../../components/Header/Header';
import img from '../../assets/husky-nobg.png'
import {Wrapper, Container, Title, Text, Span, Button, Img, Spec, GridBox, Box, SpecTitle} from './styles';
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
          <Img src={img} />
        </Container>
        <Spec>
          <Title>Especialidades</Title>
          <GridBox>
          <Box>
            <p>img</p>
            <SpecTitle>Animais Silvestres</SpecTitle>
          </Box>
          <Box>
            <p>Title</p>
            <SpecTitle>Cirurgia Geral</SpecTitle>
          </Box>
          <Box>
            <p>Title</p>
            <SpecTitle>Células-Tronco</SpecTitle>
          </Box>
          <Box>
            <p>Title</p>
            <SpecTitle>Anestesia</SpecTitle>
          </Box>
          <Box>
            <p>Title</p>
            <SpecTitle>Cardiologia</SpecTitle>
          </Box>
          <Box>
            <p>Title</p>
            <SpecTitle>Comportamental</SpecTitle>
          </Box>
          </GridBox>
        </Spec>
      </Wrapper>
   </>
  )
}

export default Main
