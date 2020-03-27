import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';
import HeroesImg from '../../assets/heroes.png';
import Logo from '../../assets/logo.svg';

import api from '../../services/api'

export default function Logon() {

  const [id, setId] = useState('')
  const history = useHistory()

  async function handleLogon(e) {
    e.preventDefault()

    try {
      const response = await api.post('/sessions', { id });

      localStorage.setItem('ong_id', id)
      localStorage.setItem('ong_name', response.data.name)

      history.push('/profile')
    } catch (error) {
      alert('Falha no login, tente novamente.')
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={Logo} alt="logo-be-the-hero" />

        <form onSubmit={handleLogon}>
          <h1>Faça seu logon</h1>

          <input
            placeholder="Seu ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button type="submit" className="button" >Entrar</button>

          <Link to="/register" className="back-link">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={HeroesImg} alt="Heroes" />
    </div>
  );
}
