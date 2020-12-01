import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import Input from '../../components/Input';

import {
  Banner, Container, Title, Text, Form,
} from './styles';
import Select from '../../components/Select';

const Agendamento = () => (
  <>
    <Header />
    <Banner />
    <Container>
      <Title>Agendamento </Title>
      <Text>
        Faça já um pré agendamento e acelere o seu atendimento!
        Lembramos que as Consultas Clínicas são por ordem de chegada.
      </Text>
      <Form>
        <Input name="name" label="Nome" />
        <Input name="email" label="Email" />
        <Input name="telefone" label="Telefone" />
        <Select name="Unidade" />
      </Form>
    </Container>
    <Footer />
  </>
);

export default Agendamento;
