import dotenv from 'dotenv'
dotenv.config()

export const PORT = process.env.SERVER_PORT || 3001

export const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN || ""