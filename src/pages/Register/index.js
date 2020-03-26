import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';
import Logo from '../../assets/logo.svg';

export default function Register() {
  return (
    <div className="register-conteiner">
      <div className="content">
        <section>
          <img src={Logo} alt="be-the-hero" />
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na platafoma e ajude pessoas a encontrarem os casos da sua ONG.</p>

          <Link to="/" className="back-link">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar
          </Link>
        </section>
        <form>
          <input placeholder="Nome da ONG" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="Whatsapp" />
          <div className="input-group">
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{ width: 80 }} />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
