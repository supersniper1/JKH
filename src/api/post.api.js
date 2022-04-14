import axios from "axios";


// http://10.3.21.206:8080/api/v1/auth/login

const apiURL = 'http://10.3.21.206:8080'
const postApi = (dataValue) => {
  axios({
    method: 'post',
    url: apiURL + '/api/v1/auth/login',
    data: dataValue
    // !data example!
    // data: {
    //   id: 0,
    //   firstName: 'Freddy',
    //   lastName: 'Gayazov',
    //   age: 45
    // }
  });
}

export default postApi