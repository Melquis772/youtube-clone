import axios from 'axios';

const BASE_URL = 'https://yt-clone-server.herokuapp.com';

export const fetchApi = async (url) => {
    const data = await (await axios.get(`${BASE_URL}/${url}`)).data;

    return data;
} 