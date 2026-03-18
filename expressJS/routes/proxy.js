import express from 'express'
import { STRAPI_TOKEN } from '../utils/tokens.js'

const router = express.Router()


const STAPI_URL_BASE = 'http://localhost:1337/api'
const GET_CONFIG = {
    method: "GET",
    headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`
    }
}
router
    .post("/homepage", async (req, res) => {

    const {body} = req.body
    console.log("body in server proxy", body)

        const url = `${STAPI_URL_BASE}/pages?filters[slug][$eq]=homepage&${body.replaceAll('"', "").trim()}`
        try {

            const response = await fetch(url, GET_CONFIG)
            const json = await response.json()
            res.send(JSON.stringify(json))

        } catch (err) {
            console.log("failed to fetch homepage form strapiCMS")
            res.send({ msg: "failed to fetch strapi data " })
        }
 


    })
    .get("/about", () => { })

export default router