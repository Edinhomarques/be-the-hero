import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';
import {FiLogIn} from 'react-icons/fi';

import api from '../../services/api';

export default function Logon(props){
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault();

    try {
      const response = await api.post('session', { id })
      localStorage.setItem('ongId', id)
      localStorage.setItem('ongName', response.data.name )
      console.log(response.data.name)
      history.push('profile');
    } catch (error) {
      alert('Falha no login, tente novamente')
    }

  }
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logo} alt="Logo Be The Hero"/>

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input 
            type="text"
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}/>
          <button className="button" type="submit">Entrar</button>
          
          <Link className="back-link " to="/register">
            <FiLogIn size={16} color={'#E02041'} />
            não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Pessoas Abraçadas"/>
    </div>
  )
}