import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import Logo from '../../assets/logo.svg';
import { useState } from 'react';

import api from '../../services/api'

export default function NewIncident() {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  const ongId = localStorage.getItem('ong_id')

  const history = useHistory()

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    }
    try {
      await api.post('/incidents', data, {
        headers: {
          Authorization: ongId,
        }
      })

      history.push('/profile')
    } catch (error) {
      alert('Deu erro ao cadastrar um novo incidente.')
    }

  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={Logo} alt="be-the-hero" />
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para home
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input
            placeholder="Titulo do caso"
            value={title}
            onChange={e => { setTitle(e.target.value) }}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            placeholder="Valor em reais"
            value={value}
            onChange={e => { setValue(e.target.value) }}
          />
          <div className="button-group">
            <Link className="button-default" to="/profile">Cancelar</Link>
            <button className="button" type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
