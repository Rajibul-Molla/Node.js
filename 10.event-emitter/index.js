const EventEmitter =require("events");

const myfirstemitter=new EventEmitter();

// listner
myfirstemitter.on("greet",(name)=>{
    console.log("hello ",name);
})
myfirstemitter.emit("greet","Rajibul Molla");