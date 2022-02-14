import Show from "./Show";

interface Schedule {
    airdate: string,
    airstamp: string,
    airtime: string,
    id: number,
    image: any
    name:  string,
    number: number,
    rating: {average: any}
    runtime: number
    season: number
    show: Show
    summary: null
    type: string,
    url: string
}

export default Schedule