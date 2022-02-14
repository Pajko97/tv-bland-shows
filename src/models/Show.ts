interface SingleShow {
    averageRuntime: number,
    dvdCountry: null
    ended: string,
    externals: Object
    genres: Array<any>,
    id: number,
    image: {
        medium : string,
        original : string
    },
    language: string
    name: string,
    network: {
        country : object,
        id: number,
        name : string
    },
    officialSite: null,
    premiered: string,
    rating: {
        average : any
    },
    runtime: number,
    schedule: {
        time : string,
        days: [string]
    },
    status: String,
    summary: string,
    type: string,
    updated: number,
    url: string,
    webChannel: null,
    weight: number,
    _links: Object
}   

export default SingleShow