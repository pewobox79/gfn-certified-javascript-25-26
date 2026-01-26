import * as http from 'http'

http.createServer((req, res) => {
    console.log("req", req)
    const users = [
        { name: "peter", age: 40 },
        { name: "klaus", age: 55 }
    ]

    if (req.url === '/api/users') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(users))
        return // ← important
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('Not Found')
})
    .listen(5001, () => console.log('server runs on port 5001'))