import axios, {AxiosResponse} from "axios";

const url = 'https://api.tvmaze.com/search/shows?q=';

const getMainFilms = (category: string):Promise<AxiosResponse<any>> => axios.get(url + category);

export default getMainFilms;
