import React, {Component} from 'react'
import {getProfile} from './userFunctions'


class profile extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      email: ''
    }
  }

  componentDidMount(){
    getProfile().then(res=> {
      this.setState({
        name: res.user.name,
        email: res.user.email
      })
    })
  }

  render(){
    return (
      <div className="container">
        <div className="jumboton mt-5">
          <div className="col-sm-4 mt-5">
           <h1 className="text-center">
           </h1>
          </div>

          <table className="table col-md-4 mx-auto">
            <tbody>
              <tr>
                <td>Name</td>
                <td>{this.state.userFirstName}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    )
  }

}

export default profile;
