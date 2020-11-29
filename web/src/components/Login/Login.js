import React from 'react'
import Header from '../Header/Header'
import './styles.css'
const Login = () => {
  return (
    <>
      <Header />
      <section id="container">
      <form>
      <h3>Login</h3>
      <p>Entre na sua conta</p>
        <div className="form-group">
          <input type="email" placeholder="Endereço de email" name="Email" value ="email" required />
          <input type="password" placeholder="senha" senha="Email" value ="senha" required />
        </div>
      </form>
        </section>
        </>
  )
}

export default Login
