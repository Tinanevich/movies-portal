import axios, {AxiosResponse} from "axios";

const url = 'https://api.tvmaze.com/shows/';

const getDetailFilms = (id: string): Promise<AxiosResponse<any>> => axios.get(url + id);

export default getDetailFilms;
