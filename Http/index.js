const http = require('http');

const server = http.createServer((req, res)=>{
    // Hadller 
    if(req.url === "/product"){
        res.setHeader("content-type", "application/json");
        return res.end(JSON.stringify([1,2,3,4,5]));
    }

    if(req.url === '/web'){
        res.end('<h1>Hello !</h1>');
    }
    res.end("Welcome to the node js world!");
})

server.listen(8080,() =>{
    console.log(`Server is start at port 8080`);
})