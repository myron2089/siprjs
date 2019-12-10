import React, {Component} from 'react'
import {userRegister} from './userFunctions'

class register extends Component {
  constructor(){
    super()
    this.state = {
      userFirstName: '',
      userLastName: '',
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange (e){
    this.setState({ [e.target.name]: e.target.value})
  }

  onSubmit (e){
    e.preventDefault()

    const newUser = {
      userFirstName: this.state.userFirstName,
      userLastName: this.state.userLastName,
      email: this.state.email,
      password: this.state.password
    }

    userRegister(newUser).then(res => {
      if(res) {
        this.props.history.push('/profile')
      }
    })

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3">Registro de usuarios</h1>

              <div className="form-group">
                <label htmlFor="email">Nombres</label>
                <input type="userFirstName"
                       className="form-control"
                       name="text"
                       maxlength="100"
                       placeholder="Ingrese su correo electronico"
                       value={this.state.email}
                       onChange={this.onChange} />
              </div>

              <div className="form-group">
                <label htmlFor="email">Apellidos</label>
                <input type="userLastName"
                       className="form-control"
                       name="text"
                       maxlength="100"
                       placeholder="Ingrese apellidos"
                       value={this.state.email}
                       onChange={this.onChange} />
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input type="email"
                       className="form-control"
                       name="email"
                       placeholder="Ingrese su correo electronico"
                       value={this.state.email}
                       onChange={this.onChange} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input type="password"
                       className="form-control"
                       name="email"
                       placeholder="Ingrese su contraseña"
                       value={this.state.password}
                       onChange={this.onChange} />
              </div>

              <button type="submit" className="btn btn-lg btn-primary btn-block">Ingresar</button>
            </form>
          </div>
        </div>
      </div>
    )
  }

}


export default register
