import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/EditUser.css';

import Api from '../services/Api'

class EditUser extends React.Component {
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

    var response = await Api.put("/update_user/"+this.props.match.params.id, {name: this.state.name,
                                                                              last_name: this.state.last_name,
                                                                              email: this.state.email,
                                                                              age: this.state.age});

    if(response.data.status === "ok") {
      this.setState({response: "Usuário atualizado com sucesso"})
    } else {
      this.setState({response: "Erro ao atualizar usuário"})
    }
  };

  handleDelete = async (event) => {
    event.preventDefault();
    var response = await Api.delete("/delete_user/"+this.props.match.params.id);

    if(response.data.status === "ok") {
      window.location.replace("/");
    } else {
      this.setState({response: "Erro ao deletadar usuário"})
    }
  }

  async componentDidMount() {
    var response = await Api.get("/user/"+this.props.match.params.id);
    console.log(response.data)

    this.setState({name: response.data.user.name})
    this.setState({last_name: response.data.user.last_name})
    this.setState({email: response.data.user.email})
    this.setState({age: response.data.user.age})
  };

  render() {
    return (
      <div className="EditUser">
        <Link to="/">Home</Link>
        <h1>EditUser</h1>

        <h1>{this.state.response}</h1>

        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input id="name" type="text" placeholder="nome" value={this.state.name} onChange={event => this.setState({name: event.target.value})} />
          <input id="last_name" type="text" placeholder="sobrenome" value={this.state.last_name} onChange={event => this.setState({last_name: event.target.value})}/>
          <input id="email" type="text" placeholder="e-mail" value={this.state.email} onChange={event => this.setState({email: event.target.value})}/>
          <input id="age" type="text" placeholder="age" value={this.state.age} onChange={event => this.setState({age: event.target.value})} />

          <button type="submit">salvar</button>
        </form>
        <button onClick={(event) => this.handleDelete(event)}>deletar</button>

      </div>
    )
  }
}

export default EditUser;
