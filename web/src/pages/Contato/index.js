import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import dogdrink from '../../assets/dogdrink.png';
import {
  Container, Title, Row, MapArea, ContactArea, Img,
} from './styles';
import Maps from '../../components/Map';

function Contato() {
  const location = {
    address: 'R. Doze, 300 - Vila Santa Cecília, Volta Redonda - RJ, 27260-315',
    lat: -22.51540,
    lng: -44.10650,
  };
  return (
    <>
      <Header />
      <Container>
        <Img src={dogdrink} alt="cachorro bebendo algo" />
        <Title>Contato</Title>
        <Row>
          <MapArea>
            <Title>Onde estamos?</Title>
            <Maps location={location} zoomLevel={15} />
          </MapArea>
          <ContactArea>
            <Title>Fale conosco</Title>
            <form>
              <Input label="Nome" />
              <Input label="Telefone" />
              <Input label="Email" />
              <Input label="Nome" />
            </form>
          </ContactArea>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Contato;
