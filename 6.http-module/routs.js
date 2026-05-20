const http=require("http");

const server = http.createServer((req,res)=>{

// http://localhost:3000/
    const url=req.url;
    if(url==='/'){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("You are in the Home Page! ");
    }
    else if(url==='/project'){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("You are in the Project Page! ");
    }
    else if(url==='/about'){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("You are in About Page!");
    }
    else{
        res.writeHead(404,{"content-type":"text/plain"});
        res.end("This page Can not br found");
    }



});
server.listen(3000,()=>{
    console.log(`Server is running at port number 3000`);

})