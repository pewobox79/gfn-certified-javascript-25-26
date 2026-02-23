import axios from "axios";
import { BASE_URL_STRAPI } from "./config";

export async function getPages(){
    const url = BASE_URL_STRAPI + '/api/pages?populate=*'

    try{

        const response = await axios.get(url) //.get liefert javascript object
        if(response.request.statusText !== "OK"){
            console.log("failed to fetch")
            return
        }
        return response.data

    }catch(err){

        console.log("error on fetch with axios", err)
    }
}