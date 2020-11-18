import React from 'react'
import Header from '../Header/Header';
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
              Conecte-se e compartilhe uma foto do seu pet!
            </h2>
            <p>
            No meio de tanta informação e da quantidade de ferramentas que
            surgem todos os dias, você precisa de alguém que te leve na direção
            certa.
            </p>
            <a href="/" class="button">Quero participar!</a>
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
