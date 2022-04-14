import axios from "axios";


// http://10.3.21.206:8080/api/v1/auth/login

const apiURL = 'http://10.3.21.206:8080'
const postApi = (dataValue) => {
  axios.post(`${apiURL}/api/v1/auth/login`, dataValue);
}

export default postApi