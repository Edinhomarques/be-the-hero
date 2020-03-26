import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'

import {FiArrowLeft} from 'react-icons/fi'

import './styles.css';

import logo from '../../assets/logo.svg';

import api from '../../services/api'


function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister( event ){
    event.preventDefault();
    const data = { 
      name, 
      email,
      whatsapp, 
      city, 
      uf
    }
    try {     
      const response = await api.post('/ongs', data)
      alert(`Seu ID de acesso: ${response.data.id}`)
      history.push('/')
    } catch (error) {
      alert(`Erro no cadastro tente novamento`)
      
    }
  }

  
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logo} alt="Logo Be The Hero"/>
            <h1>Cadastro</h1>
            <p>faça seu cadastro, entre na plataforma e ajude pessoas a encontrar os casos da sua ONG.</p>
            <Link className="back-link " to="/">
              <FiArrowLeft size={16} color={'#E02041'} />
              não tenho cadastro
            </Link>
        
        </section>

        <form  onSubmit={handleRegister}>
            <input 
              type="text" 
              placeholder="Nome da ONG"
              value={name}
              onChange={e => setName(e.target.value)}/>
            <input 
              type="email" 
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
              />
            <input 
              type="tel" 
              placeholder="whatsapp"
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)}
              />
            <div className="input-group">
              <input 
                type="text" 
                placeholder="Cidade"
                value={city}
                onChange={e => setCity(e.target.value)}
              />
              <input 
                type="text" 
                placeholder="UF" 
                value={uf}
                onChange={e => setUf(e.target.value)}
                style={{width: "80px"}}
              />

            </div>
            <button className="button" type="submit"> Cadastrar </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
