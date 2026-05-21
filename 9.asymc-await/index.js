// function delayfn(time){
//     return new Promise((resolve)=> setTimeout(resolve,time))
// }

// async function greet(name){
//     await delayfn(2000);
//     console.log("Hello ",name)
// }

// greet("ROnth");


async function devidefn(num1,num2){
    try {
    if(num2===0){
        throw new Error("cant devide by 0");
        
    }
    else{
        return num1/num2;
    }
}
catch(error){
    console.error(error);
}
}


async function main(){
    console.log(await devidefn(10,30));
    console.log(await devidefn(10,0));
}
main()