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

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [problem, setProblem] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    http.post('schedule', {
      name,
      email,
      phone,
      location,
      problem,
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
            data-testid="name"
            name="name"
            label="Nome"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            name="phone"
            label="Telefone"
            onChange={(e) => setPhone(e.target.value)}

          />
          <Select
            required
            name="Unidade"
            label="Unidade"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <Textarea
            required
            name="problem"
            value={problem}
            label="Descreva o seu problem"
            onChange={(e) => setProblem(e.target.value)}
          />
          <Button type="submit" text="Enviar" />

        </Form>

      </Container>
      <Footer />
    </>
  );
}

export default Agendamento;
