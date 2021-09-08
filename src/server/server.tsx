import axios from "axios";


export const BASE_URL = ' http://0.0.0.0:3001/agents'


const fetchAgents = () =>
  axios.get(BASE_URL)


const updateResourceAction = (id: number, resources: Array<string>) => {
  return axios.patch(`${BASE_URL}/${id}`, {resources: resources})
}

export {fetchAgents, updateResourceAction}
