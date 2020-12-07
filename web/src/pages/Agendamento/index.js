/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import Input from '../../components/Input';

import {
  Banner, Container, Title, Text, Form,
} from './styles';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';

function Agendamento() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [unidade, setUnidade] = useState('');
  const [problema, setProblema] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append('nome', nome);
    data.append('email', email);
    data.append('telefone', telefone);
    data.append('unidade', unidade);
    data.append('problema', problema);
    return true;
  }
  return (
    <>
      <Header />
      <Banner />
      <Container>
        <Title>Agendamento </Title>
        <Text>
          Faça já um pré agendamento e acelere o seu atendimento!
          Lembramos que as Consultas Clínicas são por ordem de chegada.
        </Text>
        <Form data-testid="form" onSubmit={handleSubmit}>
          <Input
            data-testid="nome"
            name="name"
            label="Nome"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <Input
            required
            name="email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <Input
            required
            name="telefone"
            label="Telefone"
            onChange={(e) => setTelefone(e.target.value)}

          />
          <Select
            required
            name="Unidade"
            value={unidade}
            onChange={(e) => setUnidade(e.target.value)}
          />
          <Textarea
            required
            name="Problema"
            value={problema}
            label="Descreva o seu problema"
            onChange={(e) => setProblema(e.target.value)}
          />
          <Button type="submit" text="Enviar" />

        </Form>

      </Container>
      <Footer />
    </>
  );
}

export default Agendamento;
