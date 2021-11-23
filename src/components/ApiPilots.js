import axios from "axios";

const ApiPilots = axios.create ({
    baseURL: 'https://swapi.dev/api/people/'
})

export default ApiPilots;