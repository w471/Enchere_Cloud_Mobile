export interface TypicaUrl{
    url : string
}

const specialUrl:TypicaUrl = {
    url: "http://localhost:8080"
}

export const getUrl =() => specialUrl.url;