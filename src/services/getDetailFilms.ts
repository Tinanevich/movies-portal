import axios, {AxiosResponse} from "axios";

const getDetailFilms = (id: string): Promise<AxiosResponse> => axios.get('https://api.tvmaze.com/shows/' + id)

export default getDetailFilms;
