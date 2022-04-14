import axios from "axios";

axios(config)

// http://10.3.21.206:8080/api/v1/auth/login

const apiURL = 'http://10.3.21.206:8080'
const postApi = () => {
  axios({
    method: 'post',
    url: apiURL,
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }
  });
}