import axios from "axios";
export const BASE_URL = "http://127.0.0.1:8000"

export const getThumbnail = (thumbnail) => {
    return `${BASE_URL}/storage/contents/${thumbnail}`;
}

const useAxios = axios.create({
    baseURL: `${BASE_URL}/api`,
});

export const getPoster = (poster) => {
    return `${BASE_URL}/storage/Film-Poster/${poster}`;
}

export default useAxios;