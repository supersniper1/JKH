import axios from "axios";


// http://10.3.21.206:8080/api/v1/requests

const apiURL = 'http://10.3.21.206:8080'
const getRequests = (action, secondAction) => {
  axios.get(`${apiURL}/api/v1/requests`, {
    headers: {
      "Authorization": localStorage.getItem("token")
    }
  })
    .then(action)
    .then(secondAction)
}

export default getRequests