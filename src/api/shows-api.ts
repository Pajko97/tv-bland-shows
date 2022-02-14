import Schedule from "../models/Schedule";
import Show from "../models/Show";
import Actor from "../models/Actor"
import HttpClient from "./http-client";

class API extends HttpClient {


    public constructor() {
        super(process.env.REACT_APP_API_BASE_URL);
    }

    
    public getLatestShows = () => this.instance.get<Schedule[]>('/schedule')
    public getShow = (id: number | undefined) => this.instance.get<Show>(`/shows/${id}`)
    public getShowCast = (id: number) => this.instance.get<Actor[]>(`/shows/${id}/cast`)
}

export default API