import axios from 'axios'
axios.defaults.proxy = "http://127.0.0.1:8000"

export const userRegister = newUser => {
  return axios
  .post('api/register', newUser,{
    headers:{'Content-Type': 'application/json'}
  })
  .then(res => {
    console.log(res)
  })
  .catch(err =>{
    console.log(err)
  })
}

export const userLogin = user => {
  return axios
  .post('http://127.0.0.1:8000/api/login', {
    email: user.email,
    password: user.password
  },
  {
    headers:{'Content-Type': 'application/json'}
  })
  .then(res => {
    localStorage.setItem('usertoken', res.data.token)
    console.log(res + "ok")
  })
  .catch(err =>{
    console.log(err.response.data)
  })
}

export const getProfile = () => {
  return axios
  .get('api/profile',{
    headers:{Authorization: 'Bearer ${localStorage.usertoken}'}
  })
  .then(res => {
    console.log(res)
    return res.data
  })
  .catch(err =>{
    console.log(err)
  })
}
