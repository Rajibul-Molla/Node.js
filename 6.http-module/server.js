
const http=require("http");

const server = http.createServer((req,res)=>{
    console.log("Request: ",req);

    res.writeHead(200,{"Content-Type": "text/plain"})
    res.end("Hello from Node.js HTTP module")

      
})

const port=3000;
server.listen(port,()=>{
    console.log(`Server is running is port Number ${port}`);
})