import React from 'react'
import Header from '../../components/Header/Header';
import './MainStyles.css'
import img from '../../assets/husky-nobg.png'

const Main = () => {
  return (
        <>
      <Header/> 
      <section class="hero">
        <div className="container">
          <div>
            <h2>
            Encontre armas de fogo para o seu pet :3
            </h2>
            <p>
              
Atendimento 24 horas para diversos tipos de pets, aqui na Petty seu pet tem o cuidado e carinho que merece</p>
            <a href="/" class="button">Quero agendar!</a>
          </div>
          <img
          src={img}
          alt=""
        /> 

        </div>
      </section>
   </>
  )
}

export default Main
