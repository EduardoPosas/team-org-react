import { useState } from 'react';

import InputField from '../InputField/InputField';
import RoleList from '../RoleList/RoleList';
import Button from '../Button/Button';

import './Form.css'

const Form = ({ teams, addEmployee, addTeam }) => {

  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [picture, setPicture] = useState('');
  const [role, setRole] = useState('');

  const [title, setTitle] = useState('');
  const [primaryColor, setPrimaryColor] = useState('');

  const idGenerator = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36).substring(2);
    return random + date;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const employee = {
      name,
      job,
      picture,
      role,
      id: idGenerator(),
      fav: false
    };

    addEmployee(employee);

    setName('');
    setJob('');
    setPicture('');
    setRole('');
  }

  const handleTeam = (e) => {
    e.preventDefault();
    const newTeam = {
      name: title,
      primaryColor
    };
    addTeam(newTeam);

    setTitle('');
    setPrimaryColor('');
  }

  return (
    <section className="container form">
      <form
        action="/"
        onSubmit={handleSubmit}
      >
        <h2>Crear el colaborador</h2>
        <InputField
          inputLabel='Nombre'
          inputId='name'
          inputPlaceholder='Ingresar nombre'
          inputType='text'
          required
          value={name}
          setValue={setName}
        />
        <InputField
          inputLabel='Puesto'
          inputId='job'
          inputPlaceholder='Ingresar puesto'
          inputType='text'
          required
          value={job}
          setValue={setJob}
        />
        <InputField
          inputLabel='Foto'
          inputId='picture'
          inputPlaceholder='Ingresar enlace de la foto'
          inputType='url'
          required
          value={picture}
          setValue={setPicture}
        />
        <RoleList
          value={role}
          setValue={setRole}
          teams={teams}
          required
        />
        <Button>Crear Colaborador</Button>
      </form>
      <form
        action="/"
        onSubmit={handleTeam}
      >
        <h2>Crear nuevo equipo</h2>
        <InputField
          inputLabel='Titulo'
          inputId='titulo'
          inputPlaceholder='Ingresar titulo'
          inputType='text'
          required
          value={title}
          setValue={setTitle}
        />
        <InputField
          inputLabel='Color primario'
          inputId='primaryColor'
          inputPlaceholder='ej. #fff'
          inputType='color'
          required
          value={primaryColor}
          setValue={setPrimaryColor}
        />
        <Button>Registrar Equipo</Button>
      </form>
    </section>
  )
}

export default Form