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

const PORT = 3001

http
    .createServer((request, response) => {

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
                console.log(request)
                response.write(`das ist eine post method action`)
                response.end()
                return
            }
            return
        }


        response.end('Error: Page not found')
    })
    .listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`))