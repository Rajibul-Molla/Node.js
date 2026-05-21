
// function delayFn(time){
//     return new Promise((resolve)=> setTimeout(resolve, time))
// }

// console.log("promise lecture starts");
// delayFn(2000).then(()=>{
//     console.log("After 2 second promise resolved");
// })
// console.log("end");


function devidefn(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num2===0){
            reject("Cant devide by 0");
        }
        else{
            resolve(num1/num2);
        }
    })
}

devidefn(10,0).then(result=> {
    console.log(result);
}).catch(error=>{
    console.log(error)
}).finally(()=>{
    console.log("Operation completed");
})
