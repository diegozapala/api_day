import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/NewUser.css';

import Api from '../services/Api'

class NewUser extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      last_name: "",
      email: "",
      age: "",
      response: ""
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    var response = await Api.post("/new_user", {name: this.state.name,
                                                last_name: this.state.last_name,
                                                email: this.state.email,
                                                age: this.state.age});

    if(response.data.status === "ok") {
      this.setState({response: "Usuário criado com sucesso"})
    } else {
      this.setState({response: "Erro ao criar usuário"})
    }
  }

  render() {
    return (
      <div className="NewUser">
        <Link to="/">Home</Link>
        <h1>NewUser</h1>

        <h1>{this.state.response}</h1>

        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input id="name" type="text" placeholder="nome" onChange={event => this.setState({name: event.target.value})} />
          <input id="last_name" type="text" placeholder="sobrenome" onChange={event => this.setState({last_name: event.target.value})}/>
          <input id="email" type="text" placeholder="e-mail" onChange={event => this.setState({email: event.target.value})}/>
          <input id="age" type="text" placeholder="age" onChange={event => this.setState({age: event.target.value})} />

          <button type="submit">cadastrar</button>
        </form>
      </div>
    )
  }
}

export default NewUser;
