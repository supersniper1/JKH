import axios from "axios";


// http://10.3.21.206:8080/api/v1/auth/login

const apiURL = 'http://10.3.21.206:8080'
const loginRequest = (dataValue, action, secondAction) => {
  axios.post(`${apiURL}/api/v1/auth/login`, dataValue)
    .then(action)
    .then(secondAction)
}

export default loginRequest