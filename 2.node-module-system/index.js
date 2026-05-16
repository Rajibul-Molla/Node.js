const firstmodule=require('./first-module')

// console.log(firstmodule.add(20,10));




try{
console.log("Second operation is running");
let result=firstmodule.devide(20,0);
console.log(result," Result");
}
catch(error){
console.log("Caught an Error : ", error.message);
}














console.log("Its stoped at the end");