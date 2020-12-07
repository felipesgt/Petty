/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import Input from '../../components/Input';

import {
  Banner, Container, Title, Text, Form,
} from './styles';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';
import http from '../../services/api';

function Agendamento() {
  const history = useHistory();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [unidade, setUnidade] = useState('');
  const [problema, setProblema] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    http.post('schedule', {
      nome,
      email,
      telefone,
      unidade,
      problema,
    }).then(() => {
      alert('Agendamento realizado com sucesso');
      history.push('/');
    }).catch(() => {
      alert('Erro ao criar agendamento');
    });

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
