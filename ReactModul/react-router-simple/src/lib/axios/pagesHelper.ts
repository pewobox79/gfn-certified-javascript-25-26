import axios from "axios";
import { BASE_URL_STRAPI } from "./config";
import { DynamicContentQuery } from "../strapi/dynamicQuery";

export async function getPages() {
    const url = BASE_URL_STRAPI + `/api/pages?${DynamicContentQuery}`
    console.log("url", url)
    try {

        const response = await axios.get(url) //.get liefert javascript object
        if (response.request.statusText !== "OK") {
            console.log("failed to fetch")
            return
        }
        console.log("res", response)
        return response.data

    } catch (err) {

        console.log("error on fetch with axios", err)
    }
}

export async function getPageBySlug(slug: string | undefined) {
    
    if(slug === undefined) return //guard clause
    const url = `${BASE_URL_STRAPI}/api/pages?filters[slug][$eq]=${slug}&${DynamicContentQuery}`
    try {
        const response = await axios.get(url)
        return response.data
    } catch (err) {
        console.log("error on getPageBySlug", err)
    }
}