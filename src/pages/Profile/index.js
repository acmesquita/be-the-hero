import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';
import Logo from '../../assets/logo.svg';
import { useEffect } from 'react';

import api from '../../services/api'
import { useState } from 'react';

export default function Profile() {

  const ongName = localStorage.getItem('ong_name')
  const ongId = localStorage.getItem('ong_id')

  const [listIncidents, setListIncidents] = useState([])

  useEffect(() => {
    api.get('/profile', {
      headers: {
        Authorization: ongId,
      }
    }).then(response => {
      setListIncidents(response.data)
    })

  }, [ongId])

  async function handleIncidenteDelete(id) {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: ongId,
        }
      })

      setListIncidents(listIncidents.filter(i => i.id !== id))

    } catch (error) {
      alert('Erro ao deletar, tente novamente.')
    }
  }

  return (
    <div className="profile-container">
      <header>
        <img src={Logo} alt="be-the-hero" />
        <span>Seja bem vinda, {ongName}</span>

        <Link to="/incidents/new" className="button">Cadastrar Novo Caso</Link>
        <button type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos Cadastrados</h1>
      <ul>
        {listIncidents && listIncidents.map(item => (
          <li key={item.id}>
            <strong>Caso:</strong>
            <p>{item.title}</p>

            <strong>Descrição:</strong>
            <p>{item.description}</p>

            <strong>Valor:</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.value)}</p>

            <button type="button" onClick={() => { handleIncidenteDelete(item.id) }}>
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
