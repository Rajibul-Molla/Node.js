

const express=require("express");
const app=express();
const port=3000;

app.get('/',(req,res)=>{
  res.send("Hello world");
  
})
app.get('/about',(req,res)=>{
  res.send("its about page ");
})
app.listen(port,()=>{
  console.log("App is running at port number ",port);
})


// const express = require("express");
// const app = express();

// const port = 3000;

// app.get('*', (req, res) => {

//     const url = req.url;

//     if (url === "/") {
//         res.send("Home Page");
//     }

//     else if (url === "/about") {
//         res.send("About Page");
//     }

//     else if (url === "/contact") {
//         res.send("Contact Page");
//     }

//     else {
//         res.send("404 Page Not Found");
//     }

// });

// app.listen(port, () => {
//     console.log("Server running on port", port);
// });