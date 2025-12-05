import http from 'http';
import { json } from 'stream/consumers';


const server = http.createServer((req, res) => {
    console.log(req.meathod);
    if (req.url === '/54') {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify({ name: "Nothing" }));
    }
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end("Backend Server");
});
server.listen(9000, () => {
    console.log(`Server is running at port ${9000}`);
});
