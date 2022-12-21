import axios from 'axios';

const BASE_URL = 'https://youtube-clone-backend-production-0981.up.railway.app';

export const fetchApi = async (url) => {
    const data = await (await axios.get(`${BASE_URL}/${url}`)).data;

    return data;
} 