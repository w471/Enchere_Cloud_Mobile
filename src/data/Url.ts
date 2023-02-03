export interface TypicaUrl{
    url : string
}

const specialUrl:TypicaUrl = {
    // local url
    // url: "http://localhost:8080"

    // online url
    url : "https://encherecloudws-production.up.railway.app"
}

export const getUrl =() => specialUrl.url;