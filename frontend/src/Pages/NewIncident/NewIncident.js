import React, {useState} from 'react';

import './styles.css';

import {Link, useHistory} from 'react-router-dom'

import {FiArrowLeft} from 'react-icons/fi'

import './styles.css';

import logo from '../../assets/logo.svg';

import api from '../../services/api'

function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const ongId = localStorage.getItem('ongId')
  const history = useHistory()
  async function handleNewIncident(e){
    e.preventDefault()
    const data = {
      title,
      description,
      value
    }
    try {
      console.log('ok')
      await api.post('incidents',data, {
        headers: {
          authorization: ongId,
        }
      })
      history.push('/profile')
    } catch (error) {
      alert('Erro ao cadastra caso')
    }
  }
  return (
    <div className="new-incident">
      <div className="content">
        <section>
          <img src={logo} alt="Logo Be The Hero"/>
            <h1>Cadastrar novo caso</h1>
            <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
            <Link className="back-link " to="/Profile">
              <FiArrowLeft size={16} color={'#E02041'} />
              Voltar para home
            </Link>
        
        </section>

        <form onSubmit={handleNewIncident}>
            <input 
              type="text" 
              placeholder="Titulo da do caso"
              name={title}
              onChange={e => setTitle(e.target.value)}
              />
            <textarea  
              placeholder="Descrição"
              name={description}
              onChange={e => setDescription(e.target.value)}
            />
            <input 
            type="number"
              placeholder="valor em reais"
              name={value}
              onChange={e => setValue(e.target.value)}
            />
    
            <button className="button" type="submit"> Cadastrar </button>
        </form>
      </div>
    </div> 
  );
}

export default NewIncident;
