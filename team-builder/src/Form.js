import React, { useState } from "react";

const Form = props => {

const [teamMember, setTeamMember] = useState({name:"", email:"", job:""});

const changeHandler = event => {
    setTeamMember({...teamMember, [event.target.name]: event.target.value});
};

const submitHandler = event => {
    event.preventDefault();
    props.addNewMember(teamMember)
    setTeamMember({name: '', email: '', job: ''})
}

return (

<form onSubmit={submitHandler}>

<label htmlFor="name">
    Name:
    <input
    id="name"
    type="text"
    name="name"
    onChange={changeHandler}
    value={teamMember.name}/>
</label>

<label htmlFor="email">
    Email:
    <input
    id="email"
    type="text"
    name="email"
    onChange={changeHandler}
    value={teamMember.email}/>
</label>

<label htmlFor="job">
    Role:
    <input
    id="role"
    type="text"
    name="job"
    onChange={changeHandler}
    value={teamMember.job}/>

    <button type="submit">Submit Team Member</button>
</label>
</form>
);
};

export default Form