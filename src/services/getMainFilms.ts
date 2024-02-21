import axios, {AxiosResponse} from "axios";

const getMainFilms = (category: string):Promise<AxiosResponse> => axios.get('https://api.tvmaze.com/search/shows?q=' + category)

export default getMainFilms;
