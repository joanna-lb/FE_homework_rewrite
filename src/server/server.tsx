import axios from "axios";


export const BASE_URL = ' http://localhost:3001/agents'


const fetchAgents = () =>
    axios.get(BASE_URL)


const updateResourceAction = (id: number, resources: Array<string>) => {
    return axios.patch(`${BASE_URL}/${id}`, {resources: resources})
}

export {fetchAgents, updateResourceAction}
