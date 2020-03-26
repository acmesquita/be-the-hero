import React from 'react';
import { FiLogIn } from 'react-icons/fi'
import './styles.css';
import HeroesImg from '../../assets/heroes.png';
import Logo from '../../assets/logo.svg';

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={Logo} alt="logo-be-the-hero" />

        <form>
          <h1>Faça seu logon</h1>

          <input placeholder="Seu ID" />
          <button type="submit" className="button" >Entrar</button>

          <a href="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </a>
        </form>
      </section>

      <img src={HeroesImg} alt="Heroes" />
    </div>
  );
}
