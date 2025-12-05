import http from 'http';
import { json } from 'stream/consumers';


const server = http.createServer((req, res) => {
    console.log(req.meathod);
    if (req.url === '/main') {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify({ name: "Nothing" }));
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify({ name: "About Page" }));
    }
    else if (req.url === '/contact') {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify({ name: "Contact Page" }));
    }
    else if (req.url === '/info') {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify({ name: "Info Page" }));
    }
    else {
        res.writeHead(200, { 'content-type': 'text/plain' });
        res.end("Backend Server");
    }
});
server.listen(9000, () => {
    console.log(`Server is running at port ${9000}`);
});
