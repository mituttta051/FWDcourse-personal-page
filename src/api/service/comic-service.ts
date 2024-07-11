import axios from 'axios';
import Comic from "../response/comic-response";

export default class ComicService {
    static async getComic(email: string) {
        const url = 'https://fwd.innopolis.university/api/hw2';
        const params = new URLSearchParams({email});

        try {
            const response = await axios.get(`${url}?${params}`);
            console.log(response);
            return ComicService.handleComicId(response.data);
        } catch (error) {
            console.error('There was a problem with the axios operation:', error);
        }
    }

    static async handleComicId(id: string) {
        const url = 'https://fwd.innopolis.university/api/comic';
        const params = new URLSearchParams({id});

        try {
            const response = await axios.get(`${url}?${params}`);
            return response.data as Comic;
        } catch (error) {
            console.error('There was a problem with the axios operation:', error);
        }
    }
}