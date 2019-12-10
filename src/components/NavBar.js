import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

class NavBar extends Component {
  logOut(e){
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push('/')
  }

  render () {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Ingresar
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Registrar usuario
          </Link>
        </li>
      </ul>
    )

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            Perfil
          </Link>
        </li>
        <li className="nav-item">
          <a href="/" onClick={this.logOut.bind(this)} className="nav-link">
            Salir
          </a>
        </li>
      </ul>
    )

    return (
      <nav className="navbar navbar-expand-lg navbar-light" style={{background: '#e3f2fd'}}>
        <button className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar1"
                aria-controls="navbar1"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"> </span>
        </button>

        <div id="navbar1" className="collapse navbar-collapse justify-content-md-center">
        </div>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Inicio
            </Link>
          </li>
        </ul>
        {localStorage.usertoken ? userLink : loginRegLink}

      </nav>
    )
  }
}

export default withRouter(NavBar);
