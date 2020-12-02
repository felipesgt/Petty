import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';

import {
  Container, Text, Title, Row, GridBox, Box, BoxText,
} from './styles';
import bulldog from '../../assets/bulldog.png';

const Serviços = () => (
  <>
    <Header />
    <Container>
      <div>
        <Title>Serviços</Title>
        <Text>
          A Petty é uma clínica veterinária completa e oferece tudo que você,
          seu cão e gato precisam! A infraestrutura,
          tecnologia e corpo clínico são totalmente integrados para,
          da melhor forma, oferecer medicina de excelência e comodidade aos pets e aos tutores.
          Além de atender a diversas especialidades com profissionais capacitados,
          oferecemos  exames, consultas, vacinação, hotel, banho e tosa,
          e também dispomos de centro cirúrgico, laboratório,
          internação e UTI altamente tecnológicos,
          atendendo a qualquer necessidade do cão e gato com o melhor atendimento veterinário
          disponível no país
        </Text>
      </div>
      <Row>
        <img src={bulldog} alt="desenho de um bulldog usando o notebook" />
        <GridBox>
          <Box>
            <BoxText>Vacinação</BoxText>
          </Box>
          <Box>
            <BoxText>Microchip</BoxText>
          </Box>
          <Box>
            <BoxText>Banho/Tosa</BoxText>
          </Box>
          <Box>
            <BoxText>Hospitalização</BoxText>
          </Box>
          <Box>
            <BoxText>Clinica Geral</BoxText>
          </Box>
          <Box>
            <BoxText>Pet Shop</BoxText>
          </Box>
        </GridBox>
      </Row>
    </Container>
    <Footer />
  </>
);

export default Serviços;
