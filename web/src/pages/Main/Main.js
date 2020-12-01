import React from 'react';
import Header from '../../components/Header/Header';

import img from '../../assets/husky-nobg.png';
import cardio from '../../assets/cardiologia.svg';
import bisturi from '../../assets/bisturi.svg';
import dna from '../../assets/dna.svg';
import injecao from '../../assets/injecao.svg';
import catrelax from '../../assets/catrelax.png';
import difPets from '../../assets/difpets.png';

import {
  Wrapper,
  Container,
  Title,
  Text,
  Span,
  Button,
  Img,
  Spec,
  GridBox,
  Box,
  SpecTitle,
  SpecImg,
} from './styles';
import Footer from '../../components/Footer';

const Main = () => (
  <>
    <Header />
    <Wrapper>
      <Container>
        <div>
          <Title>
            Aqui na Petty seu
            {' '}
            <Span>pet</Span>
            {' '}
            tem o cuidado e carinho que merece
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
            <SpecImg imgSize="20rem" src={difPets} />
            <SpecTitle>Animais Silvestres</SpecTitle>
          </Box>
          <Box>
            <SpecImg imgSize="14rem" src={bisturi} />
            <SpecTitle>Cirurgia Geral</SpecTitle>
          </Box>
          <Box>
            <SpecImg imgSize="15rem" src={dna} />
            <SpecTitle>Células-Tronco</SpecTitle>
          </Box>
          <Box>
            <SpecImg imgSize="15rem" src={injecao} />
            <SpecTitle>Anestesia</SpecTitle>
          </Box>
          <Box>
            <SpecImg imgSize="15rem" src={cardio} />
            <SpecTitle>Cardiologia</SpecTitle>
          </Box>
          <Box>
            <SpecImg imgSize="15rem" src={catrelax} />
            <SpecTitle>Comportamental</SpecTitle>
          </Box>
        </GridBox>
      </Spec>
    </Wrapper>
    <Footer />
  </>
);

export default Main;
