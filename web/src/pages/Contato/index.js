import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import dogdrink from '../../assets/dogdrink.png';
import {
  Container, Title, Row, MapArea, ContactArea, Img,
} from './styles';

const Contato = () => (
  <>
    <Header />
    <Container>
      <Img src={dogdrink} alt="cachorro bebendo algo" />
      <Title>Contato</Title>
      <Row>
        <MapArea>
          <Title>Onde estamos</Title>
          <p>Mapa</p>
        </MapArea>
        <ContactArea>
          <Title>Contato</Title>
          <form>
            <Input />
            <Input />
            <Input />
            <Input />
          </form>
        </ContactArea>
      </Row>
    </Container>
    <Footer />
  </>

);

export default Contato;
