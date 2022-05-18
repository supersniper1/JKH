import axios from "axios";

const apiURL = 'http://10.3.21.206:8080'
const loginRequest = (dataValue, action, secondAction) => {
  axios.post(`${apiURL}/api/v1/auth/login`, dataValue)
    .then ((response) => action(response.data.token))
    .catch(secondAction)
}

export default loginRequest