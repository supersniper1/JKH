import axios from "axios";

const apiURL = 'http://10.3.21.206:8080'
const loginRequest = (dataValue, handleLogin, setIncorrectPassword) => {
  axios.post(`${apiURL}/api/v1/auth/login`, dataValue)
    .then ((response) => handleLogin(response.data.token))
    .catch(setIncorrectPassword(true))
}

export default loginRequest