import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Organization from './components/Organization/Organization';
import Team from './components/Team';
import Footer from './components/Footer';

import './App.css';

function App() {

  const storedEmployees = JSON.parse(localStorage.getItem('employees'));
  const storedTeams = JSON.parse(localStorage.getItem('teams'));

  const [showForm, setShowForm] = useState(true);
  const [employees, setEmployees] = useState(storedEmployees ?? [
    {
      "name": "Alexander",
      "job": "Desarrollador frontend jr",
      "picture": "https://github.com/EduardoPosas.png",
      "role": "Front End",
      "id": "pbmimkvys1dymh8v9",
      "fav": false
    }
  ]);
  const [teams, setTeams] = useState(storedTeams ?? [
    {
      "id": "a1d06893-72bf-495e-a720-a9301d308b0d",
      "name": "Programación",
      "primaryColor": "#57C278",
      "secondaryColor": "#D9F7E9"
    },
    {
      "id": "fa138439-9e32-499b-9eb1-02026327267f",
      "name": "Front End",
      "primaryColor": "#82CFFA",
      "secondaryColor": "#E8F8FF"
    },
    {
      "id": "b9ffdc11-3cd4-45e0-8402-aee19803fb30",
      "name": "Data Science",
      "primaryColor": "#A6D157",
      "secondaryColor": "#F0F8E2"
    },
    {
      "id": "cc779a13-4ef3-4634-93ba-596448301ae6",
      "name": "Devops",
      "primaryColor": "#E06B69",
      "secondaryColor": "#FDE7E8"
    },
    {
      "id": "05e887c0-f560-4cc8-a50d-ac99ea48d3ec",
      "name": "UX y Diseño",
      "primaryColor": "#DB6EBF",
      "secondaryColor": "#FAE9F5"
    },
    {
      "id": "219a6158-7b22-42d9-ad21-5e59a0f5632c",
      "name": "Móvil",
      "primaryColor": "#FFBA05",
      "secondaryColor": "#FFF5D9"
    },
    {
      "id": "f98c2a26-e04e-4ac7-ab99-1e5179e5de8c",
      "name": "Innovación y Gestión",
      "primaryColor": "#FF8A29",
      "secondaryColor": "#FFEEDF"
    }
  ]);

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('teams', JSON.stringify(teams));
  }, [employees, teams]);


  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const deleteEmployee = (id) => {
    const filteredData = employees.filter(employee => employee.id !== id);
    setEmployees(filteredData);
  };

  const updateTeamBackground = (color, id) => {
    const updatedTeams = teams.map(team => {
      if (team.id === id) {
        team.primaryColor = color;
      }
      return team;
    });
    setTeams(updatedTeams);
  };

  const addTeam = (team) => {
    setTeams([...teams, { ...team, id: uuid() }]);
  };

  const changeFav = (id) => {
    const updatedFavs = employees.map(employee => {
      if (employee.id === id) {
        employee.fav = !employee.fav
      }
      return employee;
    })

    setEmployees(updatedFavs);
  }

  return (
    <>
      <Header />
      {
        showForm &&
        <Form
          teams={teams.map(team => team.name)}
          addEmployee={addEmployee}
          addTeam={addTeam}
        />
      }
      <Organization
        showForm={showForm}
        setShowForm={setShowForm}
      />
      {
        teams.map(team => <Team
          data={team}
          key={team.name}
          employees={employees.filter(employee => employee.role === team.name)}
          deleteEmployee={deleteEmployee}
          updateTeamBackground={updateTeamBackground}
          changeFav={changeFav}
        />
        )
      }
      <Footer />
    </>
  )
}

export default App
