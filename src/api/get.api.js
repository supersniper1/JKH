import axios from "axios";

const apiURL = 'http://10.3.21.206:8080'
export const getRequests = (action, secondAction) => {
  axios.get(`${apiURL}/api/v1/requests`, {
    headers: {
      "Authorization": localStorage.getItem("token")
    }
  })
    .then(action)
    .then(secondAction)
}