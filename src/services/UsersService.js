import axios from "axios";

const usersUrl = "https://tranquil-reaches-33546.herokuapp.com/usuarios"; //prod
//const usersUrl = "http://localhost:3002/usuarios";

export const createUser = async (user) => {
    return await axios.post(`${usersUrl}/`, user);
}