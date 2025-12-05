import http from 'http';
import { json } from 'stream/consumers';


const server = http.createServer((req, res) => {
    console.log(req.meathod);
    if (req.url === '/main') {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify({message: "Its a fake main page nothing is going on here" }));
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify({ message: "There is no about regarding about me in this page" }));
    }
    else if (req.url === '/contact') {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify({  message: "Don't contact me" }));
    }
    else if (req.url === '/info') {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify({  message: "if you want any information go to Google" }));
    }
    else {
        res.writeHead(200, { 'content-type': 'text/plain' });
        res.end("Why u came here go back to IDE and do your work");
    }
});
server.listen(9000, () => {
    console.log(`Server is running at port ${9000}`);
});
