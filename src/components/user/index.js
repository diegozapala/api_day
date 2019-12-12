import React from 'react';
import { Link } from 'react-router-dom';

class index extends React.Component {
  render() {
    return (
      <div>
        <div>
          Nome: {this.props.name}
        </div>

        <div>
          Sobrenome: {this.props.last_name}
        </div>

        <div>
          E-mail: {this.props.email}
        </div>

        <div>
          Idade: {this.props.age}
        </div>

        <div>
          <Link to={"/editar_usuario/"+this.props.id}>Editar Usuário</Link>
        </div>

        <br/>
        <br/>
        <br/>
      </div>
    )
  }
}

export default index;
