import React from 'react';
import Header from '../../components/Header/Header';
import {
  Box,
  Container, GridBox, Text, Title, SpecImg, SpecTitle,
} from './styles';

import cardio from '../../assets/cardiologia.svg';
import bisturi from '../../assets/bisturi.svg';
import dna from '../../assets/dna.svg';
import injecao from '../../assets/injecao.svg';
import catrelax from '../../assets/catrelax.png';
import difPets from '../../assets/difpets.png';
import Footer from '../../components/Footer';

const Especialidades = () => (
  <>
    <Header />
    <Container>
      <div>
        <Title>Especialidades</Title>
        <Text>
          Petty é uma clínica Veterinária completa, nossas instalações atendem
          a diversas especialidades,
          trazendo os mais avançados recursos de saúde para a Medicina Veterinária.
          Para atender ao seu animal contamos com uma equipe capacitada e especializada nas
          mais variadas disciplinas.
          Tudo para proporcionar os melhores tratamentos com seriedade e total comprometimento.
        </Text>
      </div>
      <div>
        <GridBox>
          <Box>
            <SpecImg imgSize="24rem" src={difPets} />
            <SpecTitle>Animais Silvestres</SpecTitle>
          </Box>
          <Box>
            <SpecImg imgSize="15rem" src={bisturi} />
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
            <SpecTitle>Neurologia</SpecTitle>
          </Box>
          <Box>
            <SpecImg imgSize="15rem" src={catrelax} />
            <SpecTitle>Ortopedia</SpecTitle>
          </Box>
          <Box>
            <SpecImg imgSize="15rem" src={catrelax} />
            <SpecTitle>Oncologia</SpecTitle>
          </Box>
          <Box>
            <SpecImg imgSize="15rem" src={catrelax} />
            <SpecTitle>Radiologia</SpecTitle>
          </Box>
          <Box>
            <SpecImg imgSize="15rem" src={catrelax} />
            <SpecTitle>Odontologia</SpecTitle>
          </Box>
          <Box>
            <SpecImg imgSize="15rem" src={catrelax} />
            <SpecTitle>Endoscopia</SpecTitle>
          </Box>
          <Box>
            <SpecImg imgSize="15rem" src={catrelax} />
            <SpecTitle>Nutrição</SpecTitle>
          </Box>
        </GridBox>
      </div>
    </Container>
    <Footer />
  </>
);

export default Especialidades;
