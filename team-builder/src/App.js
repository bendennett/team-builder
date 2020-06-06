import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Members from './Members';

function App() {

  const [teamMembers, setTeamMembers] = useState([{id: 1, name: "Joe", email:"joe@email.com", job:"Developer"}]);

  const addNewMember = memberObjParam => {

    setTeamMembers([...teamMembers, {...memberObjParam, id: Date.now()}])
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Team Members</h1>
      </header>
      <Form addNewMember={addNewMember} />
      <Members teamMembers={teamMembers} />
    </div>
  );
}

export default App;
