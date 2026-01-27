import * as http from 'http'
import { todosDB } from './static/todoDBStore.js'

const PORT = 3001
const TODO_API_PATH = '/api/v1/todos'

http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    //1. Pfad definieren
    if (req.url === TODO_API_PATH) {
        if (req.method === 'GET') {
            // get data from DB
            res.write(JSON.stringify(todosDB))
            res.end()
            return

        }

        if (req.method === 'POST') {

            //1. eingehenden datensatz (kommt über den BODY)
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });

            req.on('end', () => {
                try {
                    const parsedBody = JSON.parse(body);
                    console.log("body", parsedBody);     // z. B. { name: 'John', description: 'Test' }
                    todosDB.push(parsedBody.data.newTodo)
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.write(JSON.stringify(todosDB)); // oder deine Antwort
                    res.end();
                } catch (e) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Invalid JSON' }));
                }
            });

            /*request.on('error', (err) => {
                console.error('Fehler beim Lesen des Bodys:', err);
                response.writeHead(400);
                response.end('Fehler beim Lesen der Anfrage');
            }); */

return
        }


        res.write(JSON.stringify([{ msg: "Method not allowed" }]))
        res.end()
        return

    }
    res.write(JSON.stringify({ msg: "Not found" }))
    res.end()



})
    .listen(PORT, () => console.log(`server läuft auf Port ${PORT}`))