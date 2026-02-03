const users = [
    {
        name: "Peter",
        age: 46,
        address: {
            city: "Munich"
        },
        phone: [{
            type: 'mobile',
            tel: "234082094809"
        }]
    },
    {
        name: "Sarah",
        age: 34,
        address: {
            city: "Hamburg"
        },
        phone: [{
            type: 'mobile',
            tel: "987980"
        }]
    },
    {
        name: "Klaus",
        age: 46,
        address: {
            city: "Berlin"
        },
        phone: [{
            type: 'home',
            tel: "098980998790"
        }]
    }
]

//Wir brauchen einen server
import * as http from 'http'
import { writeLogFile } from './controller/staticController.js'

const PORT = 3001

http
    .createServer((request, response) => {

        // query string evaluation
        const parsedUrl = new URL(request.url, `http://${request.headers.host}`);
        console.log("parsed url", parsedUrl)
        const queryParams = parsedUrl.searchParams;
        console.log("query params", queryParams)
        const id = queryParams.get("meineID")
        const carid = queryParams.get("carid")
        const color = queryParams.get("color")

        console.log("query params list",id, carid, color)



      console.log("id", id)
        if (request.url === '/') {
            response.write("hallo World and family")
            response.end()
            return
        }

        if (request.url === '/api/users') {
            response.writeHead(200, { 'content-type': 'application/json' })
            response.write(JSON.stringify(users)) // payload
            response.end()
            return
        }

        if (request.url === '/api/posts') {
            console.log("methode", request.method)
            //posts aus der jsonplaceholder hier ausgeben
            if (request.method === "GET") {
                const ORIGIN_URL = 'https://jsonplaceholder.typicode.com/posts'
                fetch(ORIGIN_URL).then(res => {

                    if (!res.ok) {
                        response.end("no response possible")
                        return
                    }
                    return res.json()
                }).then((data) => {

                    response.write(JSON.stringify(data))
                    response.end()
                    return

                })
                return
            }

            if (request.method === 'POST') {
                let body = '';

                request.on('data', chunk => {
                    body += chunk;
                });
                
                request.on('end', () => {
                    response.writeHead(200, { 'Content-Type': 'text/plain' });
                    writeLogFile(body)
                    response.end(`Empfangener Body:\n${body}`);
                });

                request.on('error', (err) => {
                    console.error('Fehler beim Lesen des Bodys:', err);
                    response.writeHead(400);
                    response.end('Fehler beim Lesen der Anfrage');
                });

              
                return;
            }
            return
        }


        response.end('Error: Page not found')
    })
    .listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`))

