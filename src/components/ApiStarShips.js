import axios from "axios";

const ApiStarShips = axios.create ({
    baseURL: 'https://swapi.dev/api/starships/'
})

export default ApiStarShips;



